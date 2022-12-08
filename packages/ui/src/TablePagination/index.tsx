import useTablePagination from './hooks/useTablePagination'

interface ITablePagination {
  totalData: number // total number of data items
  currentPage: number // current page number
  onChange: (param: any) => void // called when the page number or pageSize is changed
  siblingCount?: number // how many digits to display either side of current page
  pageSize: number // number of data items per page
  setPageSize: (page: number) => void // called when pageSize is changed
  pageSizeOptions?: number[] // specify the size changer options
}

export const TablePagination = ({
  totalData = 0,
  currentPage = 0,
  onChange,
  siblingCount = 2,
  setPageSize,
  pageSizeOptions = [10, 20, 30],
  pageSize = 10,
}: ITablePagination) => {
  const separator = '...'
  const paginationRange = useTablePagination({
    currentPage,
    totalData,
    siblingCount,
    pageSize,
    separator,
    onChange,
  })

  const onNext = () => {
    onChange(currentPage + 1)
  }

  const onPrevious = () => {
    onChange(currentPage - 1)
  }

  const lastPage = paginationRange?.[paginationRange?.length - 1]

  return (
    <div className="bg-white h-[90px] px-8 py-6 flex flex-col">
      <div className="flex items-center gap-8  flex-row justify-start text-xs" style={{ marginTop: 'auto' }}>
        <span>Rows per page :</span>
        <div className="flex gap-x-4 items-center">
          <select
            className="border-b-2 p-1 border-black text-black "
            defaultValue={pageSizeOptions[0]}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {pageSizeOptions?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <div className="flex items-center text-sm gap-x-1">
            <span
              className="h-6 cursor-pointer min-w-[24px] rounded-full flex justify-center items-center"
              onClick={() => onChange(1)}
            >
              &#10094;&#10094;
            </span>
            <span
              onClick={() => {
                if (currentPage > 1) onPrevious()
              }}
              className={`h-6 cursor-pointer min-w-[24px] rounded-full flex justify-center items-center ${
                currentPage === 1 && 'text-dark-4 cursor-not-allowed'
              }`}
            >
              &#10094;
            </span>
            {paginationRange?.map((pageNumber, index) => {
              if (pageNumber === separator) {
                return (
                  <span
                    key={index}
                    className="h-6 cursor-pointer min-w-[24px] rounded-full flex justify-center items-center"
                  >
                    &#8230;
                  </span>
                )
              }
              return (
                <span
                  key={index}
                  className={`h-6 cursor-pointer min-w-[24px] rounded-full flex justify-center items-center ${
                    pageNumber === currentPage && 'bg-main-primary text-white'
                  }`}
                  onClick={() => onChange(pageNumber)}
                >
                  {pageNumber}
                </span>
              )
            })}
            <span
              onClick={() => onNext()}
              className={`h-6 cursor-pointer min-w-[24px] rounded-full flex justify-center items-center ${
                currentPage === lastPage && 'text-dark-4 cursor-not-allowed'
              }`}
            >
              &#10095;
            </span>
            <span
              className="h-6 cursor-pointer min-w-[24px] rounded-full flex justify-center items-center"
              onClick={() => onChange(lastPage)}
            >
              &#10095;&#10095;
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
