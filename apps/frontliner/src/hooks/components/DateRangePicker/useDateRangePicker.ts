import { useEffect, useRef, useState } from 'react'

interface IValue {
  start_date: string | Date
  end_date: string | Date
}

interface IDateRangeField {
  value: IValue
  onChange: (params: IValue) => void
}

const useDateRangePicker = ({ value, onChange }: IDateRangeField) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState({
    startDate: new Date(value?.start_date),
    endDate: new Date(value?.end_date),
    key: 'selection',
  })

  useEffect(() => {
    if (isOpen) {
      setData((prev) => ({ ...prev, startDate: new Date(value?.start_date), endDate: new Date(value?.end_date) }))
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (containerRef.current && !containerRef.current.contains(event?.target)) {
        setIsOpen(false)
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [containerRef])

  const onChangeDate = (param: any) => {
    setData((prev) => ({ ...prev, ...param }))
  }

  const onSubmit = () => {
    onChange({ start_date: data.startDate, end_date: data.endDate })
    setIsOpen(false)
  }

  return { containerRef, isOpen, setIsOpen, data, onChangeDate, onSubmit }
}

export default useDateRangePicker
