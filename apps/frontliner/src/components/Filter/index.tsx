import React from 'react'

import DateRangeField from '@/components/DateRangePicker'
import consultationStatus from '@/constants/status/consultationStatus'
import useFilter from '@/hooks/components/Filter/useFilter'

interface IFilters {
  filter: any
  onChangeFilter: (params: any) => void
}

const Filters = ({ filter, onChangeFilter }: IFilters) => {
  const { specializationList } = useFilter()
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-flow-col grid-cols-6 gap-2">
        {/* order id field */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-dark-1">Order ID</span>
          <input
            placeholder="Ketik Order ID"
            className="input-style-bordered"
            defaultValue={filter?.order_id}
            onChange={(e) => {
              onChangeFilter({ order_id: e.target.value })
            }}
          />
        </label>

        {/* status field */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-dark-1">Status</span>
          <select
            placeholder="Pilih Status"
            className="input-style-bordered"
            defaultValue={filter?.status}
            onChange={(e) => {
              onChangeFilter({ status: e.target.value })
            }}
          >
            <option value="">Pilih Status</option>
            {Object.keys(consultationStatus).map((item: any) => {
              return (
                <option key={item} value={item}>
                  {consultationStatus[item]?.label}
                </option>
              )
            })}
          </select>
        </label>

        {/* patient field */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-dark-1">Nama Pasien</span>
          <input
            className="input-style-bordered"
            placeholder="Ketik Nama Pasien"
            defaultValue={filter?.patient_name}
            onChange={(e) => {
              onChangeFilter({ patient_name: e.target.value })
            }}
          />
        </label>

        {/* doctor field */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-dark-1">Nama Dokter</span>
          <input
            className="input-style-bordered"
            placeholder="Ketik Nama Dokter"
            defaultValue={filter?.doctor_name}
            onChange={(e) => {
              onChangeFilter({ doctor_name: e.target.value })
            }}
          />
        </label>

        {/* specialist field */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-dark-1">Spesialis</span>
          <select
            className="input-style-bordered"
            placeholder="Pilih Spesialis"
            defaultValue={filter?.specialist}
            onChange={(e) => {
              onChangeFilter({ specialist: e.target.value })
            }}
          >
            <option value="">Pilih Spesialis</option>
            {specializationList?.map((item: any) => {
              return (
                <option key={item?.specialization_id} value={item?.specialization_id}>
                  {item?.name}
                </option>
              )
            })}
          </select>
        </label>

        {/* polish field */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-dark-1">No. Polis</span>
          <input
            className="input-style-bordered"
            placeholder="Ketik Nomor Polis"
            defaultValue={filter?.no_polis}
            onChange={(e) => {
              onChangeFilter({ no_polis: e.target.value })
            }}
          />
        </label>
      </div>
      <div className="grid grid-flow-col grid-cols-3 gap-2">
        {/* consultation field */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-dark-1">Tgl Konsultasi</span>
          <DateRangeField
            value={filter?.consultation_date}
            onChange={(values: any) => {
              onChangeFilter({ consultation_date: values })
            }}
          />
        </label>

        {/* submission field */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-dark-1">Tgl Pengajuan</span>
          <DateRangeField
            value={filter?.submission_date}
            onChange={(values: any) => {
              onChangeFilter({ submission_date: values })
            }}
          />
        </label>

        {/* confirmation field */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-dark-1">Tgl Konfirmasi</span>
          <DateRangeField
            value={filter?.confirmation_date}
            onChange={(values: any) => {
              onChangeFilter({ confirmation_date: values })
            }}
          />
        </label>
      </div>
    </div>
  )
}

export default Filters
