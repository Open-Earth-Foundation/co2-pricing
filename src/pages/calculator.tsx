import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import BaseLayout from "../layouts/BaseLayout";
import type { NextPageWithLayout } from "./_app";

const Calculator: NextPageWithLayout = () => {
    const { isLoading, error, data: calculation } = useQuery(
        ['calculations'],
        () => fetch('/api/calculations').then(res => res.json()),
        { enabled: true }
    )

    if (isLoading) return <Box>Loading...</Box>

    const typedError = error as Error

    if (typedError?.message) return <Box>Error: {typedError?.message}</Box>

    return (
        <>
            <pre>{JSON.stringify(calculation, null, 2)}</pre>
            Calculator
        </>
    );
};

Calculator.getLayout = BaseLayout

export default Calculator;
