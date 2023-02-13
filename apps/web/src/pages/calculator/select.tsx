import { Slider } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

import BaseLayout from "layouts/BaseLayout";
import Chart from "@/components/ui/chart";

import calculatorService from 'services/calculator';
import iamService from 'services/iam';

import type { NextPageWithLayout } from "types/ui";
import { SelectDiscountRate } from "ui-components";
import { formatDiscount, formatPrice } from "utils/format";


const CURRENT_YEAR = new Date().getFullYear()

const SelectMethod: NextPageWithLayout = () => {
    const [selectedModelId] = useState<string>('mimifund1')
    const [discount, setDiscount] = useState(0.010)
    const [canPlot, setCanPlot] = useState(true)

    const reactivatePlot = () => setCanPlot(true)

    const iamModel = useQuery(
        ['iam', selectedModelId], () => iamService.getModelById(selectedModelId), {
        enabled: !!selectedModelId,
    })

    const dataPoints = useQuery(
        ['mimifund', discount], () => calculatorService.getPlotData(discount), {
        onSuccess: () => setCanPlot(false),
        onError: () => setCanPlot(false),
        initialData: [],
        enabled: canPlot,
    })

    const currentYearDataPoint = useMemo(() => {
        return dataPoints.data?.find((dataPoint) => dataPoint.name === CURRENT_YEAR)
    }, [dataPoints.data])

    const [integer, decimal] = useMemo(() => {
        if (!currentYearDataPoint) return ['0', '00']
        return formatPrice(currentYearDataPoint.scc as number)
    }, [currentYearDataPoint])

    return (
        <>
            <SelectDiscountRate
                width='100%'
                integer={integer}
                decimal={decimal}
                discountPercent={formatDiscount(discount)}
                slider={
                    iamModel.data && <Slider
                        aria-label="Discount rate"
                        marks
                        valueLabelDisplay="auto"
                        onChange={(_, discount) => setDiscount(discount as number)}
                        onChangeCommitted={reactivatePlot}
                        value={discount}
                        getAriaLabel={(index) => `${index} discount rate`}
                        getAriaValueText={formatDiscount}
                        valueLabelFormat={formatDiscount}
                        {...iamModel.data.slider}
                    />
                }
                chart={
                    <Chart
                        dataPoints={dataPoints.data}
                        axisProp='name'
                        dataProps={['scc']}
                        xLabelProp='name'
                    />
                }
            />
        </>
    )
};

SelectMethod.getLayout = BaseLayout

export default SelectMethod;
