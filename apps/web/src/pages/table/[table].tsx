import { useQuery } from "@tanstack/react-query";
import TableChartView from "src/views/TableChartView";
import { useRouter } from 'next/router'
import tablesService from "src/services/tables";


const SampleTablePage = () => {
    const { query: { table } } = useRouter()
    const sample = useQuery(
        ['table', table], () => tablesService.query(table as string), {
        enabled: !!table
    })

    return (
        !sample.isLoading && sample.data
            ? <TableChartView rows={sample.data.records} />
            : null
    );
};

export default SampleTablePage;