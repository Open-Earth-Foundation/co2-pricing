import { useQueries } from "@tanstack/react-query";
import TableChartView from "../views/TableChartView";
import tablesService from "../services/tables";
import type { NextPageWithLayout } from "./_app";
import BaseLayout from "../layouts/BaseLayout";
import { Stack } from "@mui/material";
import { Typography } from "@material-ui/core";
import type { QueryDataOutput } from "../types/data/query";
import { TABLES } from "src/constants/tables";


const AllTablesPage: NextPageWithLayout = () => {
    const results = useQueries({
        queries: TABLES.map((config) => ({
            queryKey: ['table', config.table],
            queryFn: () => tablesService.query(config.table),
            select: ({ records }: QueryDataOutput) => ({ ...config, records }),
        })),
    })

    if (!results.length) {
        return <Typography align="center">
            No data found
        </Typography>
    }

    return (
        <>
            <Stack direction="column" spacing={10}>
                {results.map(({ data }) => {
                    return data ? (
                        <TableChartView
                            key={data.table}
                            table={data.table}
                            rows={data.records}
                            axisProp={data.axisProp}
                            xLabelProp={data.xLabelProp}
                            dataProps={data.dataProps}
                        />)
                        : null
                })}
            </Stack>
        </>
    )
};

AllTablesPage.getLayout = BaseLayout


export default AllTablesPage;
