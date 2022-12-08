import React from 'react'

import { formatIDR, formatIndonesianDate } from 'helpers'
import { AlarmIcon, BusinessCenterIcon, CalendarIcon } from 'icon/material-icon'

interface IProps {
  data: any
}

const ConsultationData = ({ data }: IProps) => {
  return (
    <div className="flex flex-col gap-y-5">
      {/* patient data */}
      <div className="flex flex-row gap-x-2 bg-light-4 p-2">
        <BusinessCenterIcon fontSize="small" />
        <span className="text-sm font-bold">Data Konsultasi</span>
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Nama Dokter</span>
            <span className="text-sm font-semibold">{data?.attributes?.doctor_name || '-'}</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Spesialisasi</span>
            <span className="text-sm font-semibold">{data?.attributes?.specialization_name || '-'}</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Rumah Sakit</span>
            <span className="text-sm font-semibold">{data?.attributes?.hospital_name || '-'}</span>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Tanggal Konsultasi</span>
            <div className="flex flex-row gap-x-1 items-center">
              <CalendarIcon fontSize="small" />
              <span className="text-sm font-semibold">
                {formatIndonesianDate(data?.attributes?.schedule_date) || '-'}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Jam Konsultasi</span>
            <div className="flex flex-row gap-x-1 items-center">
              <AlarmIcon fontSize="small" />
              <span className="text-sm font-semibold">
                {data?.attributes?.schedule_time_start} - {data?.attributes?.schedule_time_end}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Biaya Konsultasi</span>
            <span className="text-sm font-semibold">{formatIDR(data?.submission_amount) || '-'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsultationData
