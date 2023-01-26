import { FormControl, InputLabel, Slider, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import BaseLayout from "layouts/BaseLayout";
import Chart from "@/components/ui/chart";

import calculatorService from 'services/calculator';

import type { NextPageWithLayout } from "types/ui";
import { BigDescriptionBlock, CalculatorHeader, CarbonPrice, DiscountRateInfo, MethodDescription } from "ui-components";


const SelectMethod: NextPageWithLayout = () => {
    const [selectedModelId, setSelectedModelId] = useState<string>()
    const [discount, setDiscount] = useState(0.035)
    const [canPlot, setCanPlot] = useState(true)

    const reactivatePlot = () => setCanPlot(true)

    const dataPoints = useQuery(
        ['mimifund', discount], () => calculatorService.getPlotData('mimifund', discount), {
        onSuccess: () => setCanPlot(false),
        onError: () => setCanPlot(false),
        initialData: [],
        enabled: canPlot,
    })

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
                    <CarbonPrice />
                    <Slider
                        aria-label="Discount rate"
                        valueLabelDisplay="auto"
                        defaultValue={50}
                        value={discount}
                        onChange={(_, discount) => setDiscount(discount as number)}
                        onChangeCommitted={reactivatePlot}
                        min={0.000} max={0.050} step={0.005}
                    />
                    <DiscountRateInfo
                        maxWidth={350} />
                </Stack>
                <Stack direction='column' spacing={2} width='100%' height='100%'>
                    <Stack direction={{ xs: 'column', sm: 'row-reverse' }} spacing={2} width='100%'>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
                            <InputLabel id="demo-simple-select-filled-label">
                                Benchmarks
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedModelId ?? ''}
                                placeholder="Select a calculation"
                                onChange={({ target }) => setSelectedModelId(target.value)}
                            >
                                <MenuItem value='bench1'>bench 1</MenuItem>
                                <MenuItem value='bench2'>bench 2</MenuItem>
                                <MenuItem value='bench3'>bench 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                    <Chart
                        dataPoints={dataPoints.data ?? []}
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
                    title='What does "damage value" means?'
                    body='Incididunt fugiat Lorem fugiat magna dolore Lorem mollit id.' />
                <MethodDescription
                    title='What does "discount rate" means?'
                    body='Minim occaecat labore commodo ipsum non. Nostrud sit exercitation culpa deserunt ut commodo.' />
            </Stack>
        </Stack>
    );
};

SelectMethod.getLayout = BaseLayout

export default SelectMethod;
