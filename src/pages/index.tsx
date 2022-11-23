import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";

import BaseLayout from "../layouts/BaseLayout";

import type { NextPageWithLayout } from "./_app";


const Home: NextPageWithLayout = () => {
  return <Stack >
    <Link href="/landing" ><Button>Landing</Button></Link>
    <Link href="/calculator" ><Button>Calculator</Button></Link>
    <Link href="/report" ><Button>Report</Button></Link>
  </Stack>
};

Home.getLayout = BaseLayout

export default Home;
