import { ReactNode, useEffect, useMemo } from 'react'

interface IUseTablePagination {
  totalData: number
  pageSize: number
  siblingCount: number
  separator: ReactNode | string
  currentPage: number
  onChange: (param: any) => void
}

const useTablePagination = ({
  totalData,
  pageSize,
  siblingCount = 1,
  currentPage,
  separator,
  onChange,
}: IUseTablePagination) => {
  const range = (start, end) => {
    let length = end - start + 1
    return Array.from({ length }, (_, idx) => idx + start)
  }
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalData / pageSize)

    // pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*separator
    const totalPageNumbers = siblingCount + 5

    /*
      if the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount
      let leftRange = range(1, leftItemCount)

      return [...leftRange, separator, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)
      return [firstPageIndex, separator, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, separator, ...middleRange, separator, lastPageIndex]
    }
  }, [totalData, pageSize, siblingCount, currentPage])

  useEffect(() => {
    // ensure current page is include pagination range
    const closest = paginationRange?.reduce((prev, curr) => {
      return Math.abs(curr - currentPage) < Math.abs(prev - currentPage) ? curr : prev
    }, 1)
    onChange(closest)
  }, [pageSize])

  return paginationRange
}

export default useTablePagination
