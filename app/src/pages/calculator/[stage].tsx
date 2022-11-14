import { Box, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import DescriptionBlock from "../../components/ui/DescriptionBlock";
import BaseLayout from "../../layouts/BaseLayout";
import type { NextPageWithLayout } from "../_app";

import type { IAMModel } from "../../types/iam-model";
import type { CalculatorStage } from "../../types/calculator/stage";
import Chart from "../../components/ui/chart";
import { useRouter } from "next/router";
import iamService from '../../services/iam';
import calculatorService from '../../services/calculator';
import Loading from "src/components/ui/loading";

const SelectMethod: NextPageWithLayout = () => {
    const { query: { stage } } = useRouter()
    const [selectedModelId, setSelectedModelId] = useState<string>();

    const onChange = (value: string) => {
        setSelectedModelId(value);
    }

    const {
        isLoading: isLoadingIAMModels,
        data: iamModels,
    } = useQuery<IAMModel[]>(['iam-models'], iamService.getModels, { initialData: [] })

    const {
        isLoading: isLoadingStage,
        data: calculatorstage
    } = useQuery<CalculatorStage>(
        ['calculator-stage', stage], () => calculatorService.getStageById(stage as string),
        {
            onSuccess: ({ id }) => onChange(id),
            initialData: {
                id: "0",
                name: '',
                description: "..Loading",
            },
            enabled: Boolean(stage)
        }
    );


    if (isLoadingIAMModels) return <Box>Loading...</Box>

    return (
        <Grid container rowGap={5} columnGap={1}>
            <Grid item md={3}>
                <Typography variant="h3" component='h2' sx={{ fontWeight: 'bold' }} justifySelf='center'>
                    CO2 Pricing Oracle
                </Typography>
            </Grid>
            <Grid item md={8}>

                {isLoadingStage
                    ? <Loading />
                    : <DescriptionBlock
                        description={calculatorstage.description}
                        title={calculatorstage.name}
                        orientation='horizontal'
                    />
                }
            </Grid>
            <Grid item md={4} container gap={2} flexDirection='column'>
                <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedModelId}
                        placeholder="Select a calculation"
                        onChange={({ target }) => onChange(target.value)}
                    >
                        {iamModels.map((iamModel) => (
                            <MenuItem key={iamModel.id} value={iamModel.id}>{iamModel.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Box flexGrow={1}>
                    {isLoadingStage
                        ? <Box>Loading...</Box>
                        : <DescriptionBlock
                            description={calculatorstage.description}
                            title={calculatorstage.name}
                        />}
                </Box>
            </Grid>
            <Grid item md={7} gap={2}>
                <Chart />
            </Grid>
        </Grid >

    );
};

SelectMethod.getLayout = BaseLayout

export default SelectMethod;
