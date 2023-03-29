import { Slider } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

import BaseLayout from "layouts/BaseLayout";
import Chart from "@/components/ui/chart";

import calculatorService from "services/calculator";
import iamService from "services/iam";

import type { NextPageWithLayout } from "types/ui";
import { SelectDiscountRate } from "ui-components";
import { formatDiscount, formatPrice } from "utils/format";

import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/styles/createPalette" {
  interface SimplePaletteColorOptions {
    main: string;
  }
}

declare module "@mui/material/Slider" {
  interface SliderPropsColorOverrides {
    tertiary: true;
  }
}

const primary = "#FA9100";
const secondary = "#D1282C";
const tertiary = "#03AC13";

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    tertiary: {
      main: tertiary,
    },
  },
});

const CURRENT_YEAR = new Date().getFullYear();

const SelectMethod: NextPageWithLayout = () => {
  const [selectedModelId] = useState<string>("mimifund1");
  const [discount, setDiscount] = useState(0.01);
  const [canPlot, setCanPlot] = useState(true);

  const reactivatePlot = () => setCanPlot(true);

  const iamModel = useQuery(
    ["iam", selectedModelId],
    () => iamService.getModelById(selectedModelId),
    {
      enabled: !!selectedModelId,
    }
  );

  const dataPoints = calculatorService.getPlotData(discount);

  const currentYearDataPoint = dataPoints!.find(
    (dataPoint) => dataPoint.name === CURRENT_YEAR.toFixed(0)
  );

  const [integer, decimal] = useMemo(() => {
    if (!currentYearDataPoint) return ["0", "00"];
    return formatPrice(currentYearDataPoint.scc as number);
  }, [currentYearDataPoint]);

  return (
    <>
      <SelectDiscountRate
        width="100%"
        integer={integer}
        decimal={decimal}
        discountPercent={formatDiscount(discount)}
        displayColor={
          discount >= 0.04 ? secondary : discount >= 0.02 ? primary : tertiary
        }
        slider={
          iamModel.data && (
            <ThemeProvider theme={theme}>
              <Slider
                aria-label="Discount rate"
                marks
                valueLabelDisplay="auto"
                onChange={(_, discount) => setDiscount(discount as number)}
                onChangeCommitted={reactivatePlot}
                value={discount}
                color={
                  discount >= 0.04
                    ? "secondary" //: "primary"
                    : discount >= 0.02
                    ? "primary"
                    : "tertiary"
                }
                getAriaLabel={(index) => `${index} discount rate`}
                valueLabelFormat={`${formatDiscount(discount)[0]} ${
                  formatDiscount(discount)[1]
                }`}
                {...iamModel.data.slider}
              />
            </ThemeProvider>
          )
        }
        chart={
          <Chart
            dataPoints={dataPoints!}
            axisProp="name"
            dataProps={["scc"]}
            xLabelProp="name"
          />
        }
      />
    </>
  );
};

SelectMethod.getLayout = BaseLayout;

export default SelectMethod;
