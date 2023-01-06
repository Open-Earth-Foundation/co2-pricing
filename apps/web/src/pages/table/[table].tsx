import { useQuery } from "@tanstack/react-query";
import TableChartView from "../../views/TableChartView";
import { useRouter } from 'next/router'
import tablesService from "../../services/tables";
import type { NextPageWithLayout } from "../_app";
import BaseLayout from "../../layouts/BaseLayout";


const SampleTablePage: NextPageWithLayout = () => {
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

SampleTablePage.getLayout = BaseLayout


export default SampleTablePage;