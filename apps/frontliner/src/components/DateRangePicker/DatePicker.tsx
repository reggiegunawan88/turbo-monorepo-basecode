import React from 'react'

import { formatCurrentMonth } from 'helpers'
import { DateRange as DateRangeLib } from 'react-date-range'

interface IData {
  startDate: string | Date
  endDate: string | Date
}

interface IDatePicker {
  data: IData
  onChangeDate: (param: any) => void
  onSubmit: () => void
}

const DatePicker = ({ data, onChangeDate, onSubmit }: IDatePicker) => {
  const { start_date, end_date } = formatCurrentMonth()
  return (
    <div className="absolute left-0 z-50 mt-2 origin-top-left bg-white border shadow-md flex flex-col rounded-md overflow-hidden">
      <DateRangeLib
        rangeColors={['#61C7B5']}
        color="#61C7B5"
        ranges={[
          {
            startDate: data?.startDate ? new Date(data.startDate) : start_date,
            endDate: data?.endDate ? new Date(data.endDate) : end_date,
            key: 'selection',
          },
        ]}
        onChange={(values) => {
          onChangeDate({ startDate: values?.selection?.startDate, endDate: values?.selection?.endDate })
        }}
      />
      <div className="pb-4 px-4">
        <button className="btn-primary w-full" onClick={() => onSubmit()}>
          Terapkan
        </button>
      </div>
    </div>
  )
}

export default DatePicker
