import { Container } from "@mui/system";
import Head from "next/head";
import { useMemo } from "react"
import type { ReactElement } from "react"

import { Topnav } from '../ui-components'

const buttonOverrides = {
    cursor: "pointer",
}

const BaseLayout = (page: ReactElement) => {
    const overrides = useMemo(() => {
        return ['Frame 6953', 'Home', 'FAQ', 'About', 'Calculator'].reduce((acc, curr) => {
            return {
                ...acc, [curr]: {
                    style: buttonOverrides
                }
            }
        }, {
            'Carbon Pricing Tool': {
                width: '90px',
            }
        })
    }, [])

    return (
        <>
            <Head>
                <title>CO2 Pricing</title>
                <meta name="description" content="CO2 Pricing Application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <Topnav width="100vw" overrides={overrides} />
            </header>
            <main>
                <Container maxWidth="xl"
                    sx={{
                        height: '60vh',
                        width: '100%',
                        marginY: 2,
                    }}>
                    {page}
                </Container>
            </main>
        </>
    );
}

export default BaseLayout;
