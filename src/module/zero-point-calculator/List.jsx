import { Link } from 'react-router'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import Button from '../../components/Button'

export default function ZeroPointCalculatorList() {
  const data = []

  const columns = [
    { accessorKey: 'date', header: 'Tanggal' },
    { accessorKey: 'location', header: 'Lokasi' },
    { accessorKey: 'status', header: 'Status' },
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
        <h2 className="text-xl font-bold">Calculator Zero Point</h2>
        <div className="flex gap-2">
          <input type="date" className="px-2 py-1 border rounded text-sm" />
          <Link to="/zero-point-calculator/create">
            <Button>+ Create</Button>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="px-3 py-2 text-left">{flexRender(header.column.columnDef.header, header.getContext())}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr><td colSpan={columns.length} className="text-center py-4">No data</td></tr>
            ) : (
              table.getRowModel().rows.map(row => (
                <tr key={row.id} className="border-t">
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="px-3 py-2">{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}