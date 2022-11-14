import { Box, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import DescriptionBlock from "../../components/ui/DescriptionBlock";
import BaseLayout from "../../layouts/BaseLayout";
import type { NextPageWithLayout } from "../_app";
import Image from "next/image";

import mimifundService from '../../services/mimifund';

import iamPanelMockup from '../../assets/mocks/iam_panel_mock.png';

const Calculator: NextPageWithLayout = () => {
    const { isLoading, error } = useQuery(
        ['carbon-social-cost'],
        () => mimifundService.getSCCO2,
        { enabled: true }
    )

    const [sectionData] = useState({
        name: 'Stage Description',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel nibh nunc, est sollicitudin pellentesque tincidunt ultrices. Magna elit enim fames fames sem at blandit.'
    });
    const [iam, setIam] = useState<number>(10);

    const onChange = () => {
        setIam(10);
    }

    if (isLoading) return <Box>Loading...</Box>

    const typedError = error as Error

    if (typedError?.message) return <Box>Error: {typedError?.message}</Box>

    return (
        <Grid container rowGap={5} columnGap={1}>
            <Grid item md={3}>
                <Typography variant="h3" component='h2' sx={{ fontWeight: 'bold' }} justifySelf='center'>
                    CO2 Pricing Oracle
                </Typography>
            </Grid>
            <Grid item md={8}>
                <DescriptionBlock
                    description={sectionData.description}
                    title={sectionData.name}
                    orientation='horizontal'
                />
            </Grid>
            <Grid item md={4} container gap={2} flexDirection='column'>
                <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={iam}
                        placeholder="Select a calculation"
                        onChange={onChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Box flexGrow={1}>
                    <DescriptionBlock
                        description={sectionData.description}
                        title={sectionData.name}
                    />
                </Box>
            </Grid>
            <Grid item md={7} gap={2}>
                <Image
                    alt="IAM Panel"
                    src={iamPanelMockup}
                    width={650}
                    height={450}
                />
            </Grid>
        </Grid >

    );
};

Calculator.getLayout = BaseLayout

export default Calculator;
