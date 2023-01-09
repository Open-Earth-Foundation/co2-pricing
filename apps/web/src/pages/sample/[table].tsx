import { useQuery } from "@tanstack/react-query";
import { useRouter } from 'next/router'

import TableChartView from "views/TableChartView";
import BaseLayout from "layouts/BaseLayout";

import tablesService from "services/tables";

import type { NextPageWithLayout } from "types/ui";


const SampleTable: NextPageWithLayout = () => {
    const { query: { table } } = useRouter()
    const sample = useQuery(
        ['table', table], () => tablesService.query(table as string), {
        enabled: !!table
    })

    if (!sample.data) return null

    return (
        <TableChartView
            table={table as string}
            rows={sample.data.records}
            axisProp={'prtp'}
            xLabelProp={'year'}
            dataProps={['scc']}
        />
    );
};

SampleTable.getLayout = BaseLayout


export default SampleTable;