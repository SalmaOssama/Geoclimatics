import React, { FC, useMemo } from "react";
import { useTable } from "react-table";
import {TableProps} from './index.interface';
const Table: FC<TableProps> = ({ tableColumns, tableData }) => {

    const columns = useMemo(() => tableColumns, [])
    const data = useMemo(() => tableData, [])
    const tableInstance = useTable({ columns, data });
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
    return (
        <div className="table-wrapper">
            <table {...getTableProps} className="table-container">
                <thead>
                    {headerGroups.map(headerGroup =>
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) =>
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>)
                            }
                        </tr>
                    )}
                </thead>
                <tbody {...getTableBodyProps}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}
export default Table;