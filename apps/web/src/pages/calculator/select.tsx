import { Box, Button, Grid, LinearProgress, Slider, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import DescriptionBlock from "../../components/ui/DescriptionBlock";
import Loading from "../../components/ui/loading";
import BaseLayout from "../../layouts/BaseLayout";
import Chart from "../../components/ui/chart";

import iamService from '../../services/iam';
import calculatorService from '../../services/calculator';


import type { NextPageWithLayout } from "../_app";

import type { IAMModel } from "../../types/iam/model";
import Link from "next/link";


const SelectMethod: NextPageWithLayout = () => {
    const [selectedModelId, setSelectedModelId] = useState<string>()
    const [discount, setDiscount] = useState(0.015)
    const [year, setYear] = useState(2020)
    const [canPlot, setCanPlot] = useState(true)

    const reactivatePlot = () => setCanPlot(true)

    const dataPoints = useQuery(
        ['calculator-data-points'], () => calculatorService.getPlotData(discount, year), {
        onSuccess: () => setCanPlot(false),
        onError: () => setCanPlot(false),
        initialData: [],
        enabled: canPlot,
    })

    const iamModels = useQuery(
        ['iam-models'], () => iamService.getModels(), {
        onSuccess([first]) {
            const canSelectFirst = !selectedModelId && !!first
            canSelectFirst && setSelectedModelId(first.id)
        },
        initialData: []
    })

    const selectedIamModel = useQuery<IAMModel>(
        ['iam-model', selectedModelId], () => iamService.getModelById(selectedModelId as string), {
        onSuccess: (model) => {
            setSelectedModelId(model.id)
            setCanPlot(false)
        },
        enabled: !!selectedModelId,
        onError: () => setCanPlot(false),
    })

    if (iamModels.isLoading) return <Loading />

    return (
        <Grid container rowGap={5} columnGap={1} height={1}>
            <Grid item sm={12} md={3}>
                <Typography variant="h3" component='h2' sx={{ fontWeight: 'bold' }} justifySelf='center'>
                    CO2 Pricing Oracle
                </Typography>
            </Grid>
            <Grid item sm={12} md={8}>
                <DescriptionBlock
                    title={'Select IAM Model'}
                    description={'Select the IAM model you want to use'}
                    orientation='horizontal'
                >
                </DescriptionBlock>
            </Grid>
            <Grid item md={4} container gap={2} flexDirection='column' sx={{ height: 1 }}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedModelId ?? ''}
                    placeholder="Select a calculation"
                    onChange={({ target }) => setSelectedModelId(target.value)}
                >
                    {iamModels.data.map(({ id, name }) => (
                        <MenuItem key={id} value={id}>{name}</MenuItem>
                    ))}
                </Select>
                <Box flexGrow={1}>
                    {selectedIamModel.isLoading
                        ? <Loading />
                        : selectedIamModel.data && <DescriptionBlock
                            title={selectedIamModel.data.name}
                            description={selectedIamModel.data.description}
                            ctas={<Link href={`/learn/iam-model/${selectedIamModel.data.id}`} passHref>
                                <Button variant="text">Learn more</Button>
                            </Link>}
                        >
                        </DescriptionBlock>}
                </Box>
            </Grid>
            <Grid item md={7} gap={2} flexDirection='column' height={1}>
                <Stack spacing={2} direction="column" height={1}>
                    <DescriptionBlock title='IAM Panel' orientation='vertical' >
                        <Chart
                            key={selectedModelId}
                            dataPoints={dataPoints.data ?? []}
                            axisProp='name'
                            dataProps={['current', 'yours', 'ideal']}
                            xLabelProp='name'
                        />
                        <Stack direction='row' spacing={2} mt={2}>
                            <Slider
                                aria-label="Discount rate"
                                valueLabelDisplay="auto"
                                defaultValue={50}
                                value={discount}
                                onChange={(_, discount) => setDiscount(discount as number)}
                                onChangeCommitted={reactivatePlot}
                                min={0.000} max={0.05} step={0.005}
                            />
                            <Slider
                                defaultValue={50}
                                aria-label="Year"
                                valueLabelDisplay="auto"
                                value={year}
                                onChange={(_, year) => setYear(year as number)}
                                onChangeCommitted={reactivatePlot}
                                min={1950}
                                max={2300}
                                step={5}
                            />
                        </Stack>
                    </DescriptionBlock>
                    <Stack height={60} direction='row'>
                        <Box flexGrow={1} />
                        <Box flexShrink={0} minWidth='40%' display='flex' px='.4rem'>
                            <LinearProgress variant="determinate" value={33} style={{ margin: 'auto 1rem', flex: 1 }} />
                        </Box>
                        <Button variant="contained" color="primary" size="large" sx={{ flexGrow: 0, flexShrink: 0 }}>
                            Next
                        </Button>
                    </Stack>
                </Stack>
            </Grid>
        </Grid >

    );
};

SelectMethod.getLayout = BaseLayout

export default SelectMethod;
