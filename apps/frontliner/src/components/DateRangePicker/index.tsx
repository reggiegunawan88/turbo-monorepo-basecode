import React from 'react'

import { formatDateSeparator } from 'helpers'
import { CalendarIcon } from 'icon/material-icon'
import dynamic from 'next/dynamic'

import useDateRangePicker from '@/hooks/components/DateRangePicker/useDateRangePicker'

import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file

const DatePicker = dynamic(() => import('./DatePicker'))

interface IValue {
  start_date: string | Date
  end_date: string | Date
}

interface IDateRangeField {
  value: IValue
  onChange: (params: IValue) => void
}

const DateRangeField = ({ value, onChange }: IDateRangeField) => {
  const { containerRef, isOpen, setIsOpen, data, onChangeDate, onSubmit } = useDateRangePicker({ value, onChange })
  return (
    <div ref={containerRef} className="relative">
      <div
        className="flex justify-between cursor-pointer items-center input-style-bordered bg-white"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        <span className="text-dark-3 truncate">
          {formatDateSeparator({ param: value?.start_date })} - {formatDateSeparator({ param: value?.end_date })}
        </span>
        <CalendarIcon fontSize="small" />
      </div>
      {isOpen && <DatePicker data={data} onChangeDate={onChangeDate} onSubmit={onSubmit} />}
    </div>
  )
}

export default DateRangeField
