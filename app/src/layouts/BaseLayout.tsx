import { Container } from "@mui/system";
import Head from "next/head";
import type { ReactElement } from "react"
import ButtonAppBar from "../components/layout/Appbar";
import { Roboto } from '@next/font/google'


const googleFont = Roboto({
    weight: '400',
    variable: '--font-roboto',
})

const BaseLayout = (page: ReactElement) => {
    return (
        <>
            <Head>
                <title>CO2 Pricing</title>
                <meta name="description" content="CO2 Pricing Application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ButtonAppBar />
            <header>
            </header>
            <main>
                <Container maxWidth="lg" sx={{
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
