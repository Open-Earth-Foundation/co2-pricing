import { Box } from "@mui/material";
import { Container } from "@mui/system";
import Head from "next/head";
import type { ReactElement } from "react"
import ButtonAppBar from "../components/layout/Appbar";

const BaseLayout = (page: ReactElement) => {
    return (
        <>
            <Head>
                <title>CO2 Pricing</title>
                <meta name="description" content="CO2 Pricing Application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <ButtonAppBar />
            </header>
            <main>
                <Box p={4}>
                    <Container maxWidth="lg">
                        {page}
                    </Container>
                </Box>
            </main>
        </>
    );
}

export default BaseLayout;
