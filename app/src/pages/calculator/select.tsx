import { Box, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import DescriptionBlock from "src/components/ui/DescriptionBlock";
import Loading from "src/components/ui/loading";
import BaseLayout from "src/layouts/BaseLayout";
import Chart from "src/components/ui/chart";

import iamService from 'src/services/iam';


import type { NextPageWithLayout } from "../_app";

import type { IAMModel } from "src/types/iam/model";


const SelectMethod: NextPageWithLayout = () => {
    const [selectedModelId, setSelectedModelId] = useState<string>('');

    const onModelChange = (value: string) => {
        setSelectedModelId(value);
    }

    const {
        isLoading: isLoadingIAMModels,
        data: iamModels,
    } = useQuery<Pick<IAMModel, 'id' | 'name'>[]>(['iam-models'], iamService.getModels, {
        initialData: [],
        onSuccess: ([first]) => first && onModelChange(first?.id),
    })

    const {
        isLoading: isLoadingIAMModel,
        data: iamModel,
    } = useQuery<IAMModel>(['iam-model', selectedModelId], () => iamService.getModelById(selectedModelId),
        {
            onSuccess: (model) => onModelChange(model.id),
            enabled: Boolean(iamModels)
        }
    )

    if (isLoadingIAMModels) return <Loading />

    return (
        <Grid container rowGap={5} columnGap={1}>
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
                />
            </Grid>
            <Grid item md={4} container gap={2} flexDirection='column'>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={selectedModelId}
                    value={selectedModelId}
                    placeholder="Select a calculation"
                    onChange={({ target }) => onModelChange(target.value)}
                // defaultOpen
                >
                    {iamModels.map(({ id, name }) => (
                        <MenuItem key={id} value={id}>{name}</MenuItem>
                    ))}
                </Select>
                <Box flexGrow={1}>
                    {isLoadingIAMModel
                        ? <Box>Loading...</Box>
                        : iamModel && <DescriptionBlock
                            title={iamModel.name}
                            description={iamModel.description}
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
