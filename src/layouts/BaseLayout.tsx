import Head from "next/head";
import type { ReactElement } from "react"

import styles from "../pages/index.module.css";

const BaseLayout = (page: ReactElement) => {
    return (
        <>
            <Head>
                <title>CO2 Pricing</title>
                <meta name="description" content="CO2 Pricing Application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.containerOuter}>
                <div className={styles.containerInner}>
                    {page}
                </div>
            </div>
        </>
    );
}

export default BaseLayout;
