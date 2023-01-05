import { useQuery } from "@tanstack/react-query";
import TableChartView from "src/views/TableChartView";
import tablesService from "src/services/tables";
import type { NextPageWithLayout } from "./_app";
import BaseLayout from "src/layouts/BaseLayout";


const getTablesData = async (configs: any[]) => {
    const results: any[] = []
    for (const config of configs) {
        const result = await tablesService.query(config.table as string)
        results.push({ ...config, records: result.records })
    }
    return results
}


const AllTablesPage: NextPageWithLayout = () => {
    const tables = [
        {
            table: 'mimifund',
            axisProp: 'prtp',
            xLabelProp: 'year',
            dataProps: ['scc'],
        },
        {
            table: 'mimigive',
            axisProp: 'prtp',
            xLabelProp: 'year',
            dataProps: ['scc'],
        },
        {
            table: 'noaa',
            axisProp: 'prtp',
            xLabelProp: 'full_date',
            dataProps: ['trend', 'smoothed'],
        },
        {
            table: 'damagescountry',
            axisProp: 'ISO3',
            xLabelProp: 'N',
            dataProps: ['16.7%', '50%', '83.3%'],
        },
    ]
    const sampleList = useQuery(['tables'], () => getTablesData(tables))

    if (!sampleList.data) return null

    return (<>
        {sampleList.data.map((data) => {
            return (
                <TableChartView
                    key={data.table}
                    table={data.table}
                    rows={data.records}
                    axisProp={data.axisProp}
                    xLabelProp={data.xLabelProp}
                    dataProps={data.dataProps}
                />
            )
        })}
    </>);
};

AllTablesPage.getLayout = BaseLayout


export default AllTablesPage;
