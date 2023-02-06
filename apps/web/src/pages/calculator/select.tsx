import { FormControl, InputLabel, Slider, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import BaseLayout from "layouts/BaseLayout";
import Chart from "@/components/ui/chart";

import calculatorService from 'services/calculator';
import iamService from 'services/iam';

import type { NextPageWithLayout } from "types/ui";
import { BigDescriptionBlock, CalculatorHeader, CarbonPrice, DiscountRateInfo, MethodDescription } from "ui-components";
import { formatDiscount } from "utils/format";


const SelectMethod: NextPageWithLayout = () => {
    const [selectedModelId, setSelectedModelId] = useState<string>()
    const [discount, setDiscount] = useState(0.010)
    const [canPlot, setCanPlot] = useState(true)
    const currentYear = new Date().getFullYear()

    const reactivatePlot = () => setCanPlot(true)

    const dataPoints = useQuery(
        ['mimifund', discount], () => calculatorService.getPlotData('mimifund', discount), {
        onSuccess: () => setCanPlot(false),
        onError: () => setCanPlot(false),
        initialData: [],
        enabled: canPlot,
    })

    // gets iam model
    const iamModels = useQuery(
        ['iam-models'], () => iamService.getModels(), {
        initialData: [],
        onSettled: (data) => {
            if (data && data[0]) {
                setSelectedModelId(data[0].id)
            }
        }
    })

    // gets iam model
    const iamModel = useQuery(
        ['iam', selectedModelId], () => iamService.getModelById(selectedModelId!), {
        enabled: !!selectedModelId,
    })

    const currentYearDataPoint = useMemo(() => {
        return dataPoints.data?.find((dataPoint) => dataPoint.name === currentYear)
    }, [dataPoints.data, currentYear])

    return (
        <Stack spacing={2} maxWidth='lg' m='auto'>
            <BigDescriptionBlock width='100%' />

            <CalculatorHeader width='100%' />
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                minHeight={450}
                justifyContent='space-around'
                p={3}
                width='100%'>
                <Stack
                    spacing={4}
                    alignItems='center'
                    flexGrow={1}
                    justifyContent='space-around'>
                    <CarbonPrice overrides={{
                        '$10000': {
                            children: `$${currentYearDataPoint?.scc ?? 0}`,
                        }
                    }} />
                    {iamModel.data &&
                        <Slider
                            aria-label="Discount rate"
                            marks
                            valueLabelDisplay="on"
                            onChange={(_, discount) => setDiscount(discount as number)}
                            onChangeCommitted={reactivatePlot}
                            value={discount}
                            getAriaValueText={formatDiscount}
                            valueLabelFormat={formatDiscount}
                            {...iamModel.data.slider}
                        />
                    }
                    <DiscountRateInfo
                        maxWidth={350} />
                </Stack>
                <Stack direction='column' spacing={2} width='100%' height='100%'>
                    <Stack direction={{ xs: 'column', sm: 'row-reverse' }} spacing={2} width='100%'>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
                            <InputLabel id="demo-simple-select-filled-label">
                                IAM Model
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedModelId ?? ''}
                                placeholder="Select a calculation"
                                onChange={({ target }) => setSelectedModelId(target.value)}
                            >
                                {iamModels.data?.map((model) => (
                                    <MenuItem key={model.id} value={model.id}>
                                        {model.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Stack>
                    <Chart
                        dataPoints={dataPoints.data}
                        axisProp='name'
                        dataProps={['scc']}
                        xLabelProp='name'
                    />
                </Stack>

            </Stack>

            <MethodDescription
                width='100%'
                title='Method Description'
                body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            />

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width='100%'>
                <MethodDescription
                    width='100%'
                    title='What does "damage value" means?'
                    body='Incididunt fugiat Lorem fugiat magna dolore Lorem mollit id.' />
                <MethodDescription
                    width='100%'
                    title='What does "discount rate" means?'
                    body='Minim occaecat labore commodo ipsum non. Nostrud sit exercitation culpa deserunt ut commodo.' />
            </Stack>
        </Stack>
    );
};

SelectMethod.getLayout = BaseLayout

export default SelectMethod;
