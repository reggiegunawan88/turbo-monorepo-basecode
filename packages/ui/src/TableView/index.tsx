import { ReactNode } from 'react'

import useTableView from './hooks/useTableView'
import TableSorter from './TableSorter'

interface IColumns {
  title: string | number // title of the column group
  key: string | number // unique key of this column
  width?: string // width of this column
  sorter?: boolean // set true if you need sort buttons
  bodyElement: (record: any) => ReactNode | string // renderer of the column or table cell
}

interface ITableView {
  columns: IColumns[] // columns of table
  dataSource: any[] // data record array to be displayed
  emptyComponent?: ReactNode | string // empty component of table
  isLoading?: boolean // loading status of table
  loadingComponent?: ReactNode | string // loading component of table
  onChange?: (sorting: any) => void // callback executed when sorter is changed
}

export const TableView = ({
  columns,
  dataSource,
  isLoading,
  loadingComponent,
  emptyComponent,
  onChange,
}: ITableView) => {
  const { sorting, onChangeSorting } = useTableView({ onChange })
  return (
    <div
      className="grid overflow-x-auto rounded-t-md bg-white"
      style={{ minHeight: '400px', gridTemplateRows: 'auto 1fr' }}
    >
      <table
        className="overflow-hidden w-full"
        style={{ tableLayout: columns?.find((column) => column?.width) ? 'fixed' : 'auto' }} // table layout is fixed when using column.width
      >
        {/* table header */}
        <thead className="table-header-group align-middle">
          <tr className="text-xs font-semibold text-left ">
            {columns?.map((column: IColumns, index) => {
              if (column?.sorter) {
                return <TableSorter key={index} column={column} sorting={sorting} onChangeSorting={onChangeSorting} />
              }
              return (
                <th
                  key={column?.key}
                  className="table-cell py-3 px-4 text-white bg-main-primary border-b"
                  style={{ width: column?.width || '100px' }}
                >
                  {column?.title}
                </th>
              )
            })}
          </tr>
        </thead>
        {/* table body */}
        <tbody className="table-row-group align-middle">
          {!isLoading &&
            dataSource?.map((data, index) => {
              return (
                <tr key={index} className="text-xs hover:bg-main-subtle">
                  {columns?.map((item, itemIndex) => (
                    <td key={itemIndex} className="table-cell py-3 px-4 font-light border-b truncate">
                      {item?.bodyElement(data)}
                    </td>
                  ))}
                </tr>
              )
            })}
        </tbody>
      </table>

      {/* table empty state */}
      {dataSource?.length === 0 && !isLoading && (
        <div className="flex sticky left-0 justify-center items-center">{emptyComponent || 'Tidak ada data'}</div>
      )}

      {/* table loading state */}
      {isLoading && (
        <div className="flex sticky left-0 justify-center items-center">{loadingComponent || 'Memuat'}</div>
      )}
    </div>
  )
}
