import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import DescriptionBlock from '../components/ui/DescriptionBlock';

import type { GetStaticProps } from 'next';
import type { NextPageWithLayout } from "./_app";
import { Link, Typography } from '@mui/material';
import BaseLayout from '../layouts/BaseLayout';
import LongButton from '../components/ui/LongButton';

const Landing: NextPageWithLayout<DataProps> = ({ top, main }) => {
    return (
        <Grid container spacing={2}>
            <Grid md={5}>
                <Typography variant="h2" component='h2' sx={{ fontWeight: 'bold' }}>CO2 Pricing Oracle</Typography>
            </Grid>
            <Grid md={7}>
                <DescriptionBlock description={top.description} title={top.title} />
            </Grid>
            <Grid md={4}>
                <Typography variant='h4' component="h3">How can I calculate mine?</Typography>
            </Grid>
            <Grid md={8}>
                <DescriptionBlock description={main.description} title={main.title}>
                    <Link href="/calculator/select">
                        <Typography>Learn More</Typography>
                    </Link>
                </DescriptionBlock>
            </Grid>
            <Grid md={4}>
                <Typography variant='h4' component="h3">How can I calculate mine?</Typography>
            </Grid>
            <Grid md={8}>
                <Link href="/calculator/select">
                    <LongButton sx={{ background: '#262626' }}>Go to Calculator</LongButton>
                </Link>
            </Grid>
            <Grid md={4}>
                <Typography variant='h4' component="h3">
                    I already have calculated mine
                </Typography>
            </Grid>
            <Grid md={8}>
                <Link href="/calculator">
                    <LongButton variant="outlined">
                        Check out how the RCB affected yours
                    </LongButton>
                </Link>
            </Grid>
        </Grid >
    );
};

Landing.getLayout = BaseLayout

export interface SectionProps {
    title: string;
    description: string;
}

interface DataProps {
    top: SectionProps,
    main: SectionProps & {
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
                description: "Some description about the project and the goal involved in it.".repeat(6),
                more_info: "/more-info",
            }
        }
    }
}

export default Landing;
