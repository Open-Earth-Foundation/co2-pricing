import { type NextPage } from "next";
import Link from "next/link";

import styles from "./index.module.css";

const Home: NextPage = () => {
  return <div className={styles.containerOuter}>
    <div className={styles.containerInner}>
      <Link href="/landing" >Landing</Link>
      <Link href="/calculator" >Calculator</Link>
      <Link href="/report" >Report</Link>
    </div>
  </div>
};

export default Home;
