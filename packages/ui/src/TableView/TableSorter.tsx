import { ArrowDropdownIcon, ArrowDropUp } from 'icon/material-icon'

interface ITableSorter {
  column: any // data record array of column
  sorting: any // sorting state (key, value)
  onChangeSorting: (param: any) => void // on change sorting handler
}

const TableSorter = ({ column, sorting, onChangeSorting }: ITableSorter) => {
  return (
    <th
      aria-hidden="true"
      key={column?.key}
      className={`table-cell bg-main-primary py-3 px-4 border-b ${
        column?.sorter && 'cursor-pointer hover:brightness-95'
      }`}
      style={{ width: column?.width || '100px' }}
      onClick={() => onChangeSorting(column)}
    >
      <div className="flex flex-row gap-1 justify-start items-center text-white">
        <span>{column?.title}</span>
        {column?.sorter && (
          <div className="flex overflow-hidden flex-col justify-center items-center h-5 text-base">
            <ArrowDropUp
              color={column?.key === sorting?.key && sorting?.value === 'ASC' ? 'disabled' : 'inherit'}
              style={{ transform: 'translate(0, 6px)' }}
            />
            <ArrowDropdownIcon
              color={column?.key === sorting?.key && sorting?.value === 'DESC' ? 'disabled' : 'inherit'}
              style={{ transform: 'translate(0, -6px)' }}
            />
          </div>
        )}
      </div>
    </th>
  )
}

export default TableSorter
