import { useRouter } from "next/router";

import BaseLayout from "layouts/BaseLayout";

import calculatorService from "services/calculator";

import type { NextPageWithLayout } from "types/ui";

import DescriptionBlock from "@/components/outputComponents/DescriptionBlock";
import PriceContainer from "@/components/outputComponents/PriceContainer";
import Chart from "@/components/ui/chart";
import PriceContent from "@/components/outputComponents/PriceContent";
import SharingContainer from "@/components/outputComponents/SharingContainer";
import RestartButton from "@/components/outputComponents/RestartButton";
import { formatDiscount, formatPrice } from "utils/format";

const OutputPage: NextPageWithLayout = () => {
  const router = useRouter();
  console.log(router.query);
  let discount_string = "1%";
  if (Array.isArray(router.query["discount"])) {
    discount_string = router.query["discount"][0] ?? "1%";
  } else {
    discount_string = router.query["discount"] ?? "1%";
  }
  const discount = parseFloat(discount_string) / 100;
  console.log(discount);

  const dataPoints = calculatorService.getPlotData(discount);
  console.log(dataPoints);

  const CURRENT_YEAR = new Date().getFullYear();

  const currentYearDataPoint = dataPoints!.find(
    (dataPoint) => dataPoint.name === CURRENT_YEAR.toFixed(0)
  );

  const price: string | number | undefined = currentYearDataPoint?.scc;

  return (
    <div>
      {/* <h1>{router.query["discount"]}</h1> */}
      <body>
        <DescriptionBlock />
        <PriceContainer />
        <PriceContent price={price} />
        <Chart
          dataPoints={dataPoints!}
          axisProp="name"
          dataProps={["scc"]}
          xLabelProp="name"
        />
        <SharingContainer />
        <RestartButton />
      </body>
    </div>
  );
};

OutputPage.getLayout = BaseLayout;

export default OutputPage;
