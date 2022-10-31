import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="CO2 Pricing - Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containerOuter}>
        <div className={styles.containerInner}>
          <Link href="/landing" >Landing</Link>
          <Link href="/calculator" >Calculator</Link>
          <Link href="/report" >Report</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
