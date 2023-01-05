import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { useMemo } from "react";
import { getHeadersFromCollection } from "src/utils/table";


interface TableChartViewProps {
    rows: Record<string, string>[]
}
const TableChartView = ({ rows }: TableChartViewProps) => {
    const headers = useMemo(() => getHeadersFromCollection(rows), [rows])
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <TableCell key={header}>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            {headers.map((header) => (
                                <TableCell key={row.id + header}>{row[header]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableChartView
