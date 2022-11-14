import { Button, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";
import type { LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

import BaseLayout from "../layouts/BaseLayout";

import type { NextPageWithLayout } from "./_app";


const StyledLink = ({ children, href }: PropsWithChildren<LinkProps>) => (
  <Link href={href} passHref>
    <Button size="large" variant="contained">
      {children}
    </Button>
  </Link>
);

const Home: NextPageWithLayout = () => {
  return <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: 'calc(100vh - 128px)' }}
  >
    <Grid item xs={3}>
      <Stack spacing={2} alignItems='center'>
        <StyledLink href="/landing" >Landing</StyledLink>
        <StyledLink href="/calculator/select" >Calculator</StyledLink>
        <StyledLink href="/report" >Report</StyledLink>
      </Stack>
    </Grid>

  </Grid>
};

Home.getLayout = BaseLayout

export default Home;
