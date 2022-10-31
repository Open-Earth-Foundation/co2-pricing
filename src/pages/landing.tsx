import * as React from 'react';
import Grid from '@mui/material/Grid';

import DescriptionBlock from '../components/ui/DescriptionBlock';

import type { GetStaticProps } from 'next';
import type { NextPageWithLayout } from "./_app";
import { Typography } from '@mui/material';
import Link from 'next/link';


const Landing: NextPageWithLayout<DataProps> = ({ top, main }) => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={3} md={3}>
                <h1>CO2 Pricing Oracle</h1>
            </Grid>
            <Grid item xs={9} md={9}>
                <DescriptionBlock description={top.description} title={top.title} />
            </Grid>
            <Grid item xs={2} md={2}>
                <h2>What is Carbon Pricing?</h2>
            </Grid>
            <Grid item xs={10} md={10}>
                <DescriptionBlock description={main.description} title={main.title}>
                    <Link href="/calculator">
                        <Typography>Learn More</Typography>
                    </Link>
                </DescriptionBlock>
            </Grid>
        </Grid>
    );
};



interface DataProps {
    top: {
        title: string,
        description: string,
    },
    main: {
        title: string,
        description: string,
        more_info: string,
    },

}

export const getStaticProps: GetStaticProps<DataProps> = async () => {
    return {
        props: {
            top: {
                title: "General Description",
                description: "Some description about the project and the goal involved in it",
            },
            main: {
                title: "Main Description",
                description: "Some description about the project and the goal involved in it",
                more_info: "/more-info",
            }
        }
    }
}

export default Landing;
