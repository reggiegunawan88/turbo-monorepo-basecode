import { useEffect, useState } from 'react'

interface ISorting {
  key: string
  value: string
}

interface ITable {
  onChange?: (sorting: ISorting) => void
}

const useTableView = ({ onChange }: ITable) => {
  const [sorting, setSorting] = useState({ key: '', value: '' })

  useEffect(() => {
    if (onChange) onChange(sorting)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorting])

  const onChangeSorting = (record: any) => {
    // check is column sorter
    const sorter = record?.sorter
    // check record is selected of sorting
    const selected = record?.key === sorting.key
    if (sorter) {
      if (selected) {
        switch (sorting.value) {
          case '':
            setSorting({ key: record.key, value: 'ASC' })
            break
          case 'ASC':
            setSorting({ key: record.key, value: 'DESC' })
            break
          default:
            setSorting({ key: '', value: '' })
        }
      } else {
        setSorting({ key: record.key, value: 'ASC' })
      }
    }
  }

  return { onChangeSorting, sorting }
}

export default useTableView
