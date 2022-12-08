import React from 'react'

import { formatDateGeneral } from 'helpers'
import { PersonIcon } from 'icon/material-icon'

interface IProps {
  data: any
}

const PatientData = ({ data }: IProps) => {
  return (
    <div className="flex flex-col gap-y-5">
      {/* patient data */}
      <div className="flex flex-row gap-x-2 bg-light-4 p-2">
        <PersonIcon fontSize="small" />
        <span className="text-sm font-bold">Data Pasien</span>
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="grid grid-cols-3 gap-x-2">
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Nama Pasien</span>
            <span className="text-sm font-semibold">{data?.patient_name || '-'}</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Hubungan Keluarga</span>
            <span className="text-sm font-semibold">{data?.patient_family_relation_name || '-'}</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-2">
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Nomor KTP</span>
            <span className="text-sm font-semibold">{data?.patient_card_id || '-'}</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Tanggal Lahir</span>
            <span className="text-sm font-semibold">{formatDateGeneral(data?.patient_birthdate) || '-'}</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Jenis Kelamin</span>
            <span className="text-sm font-semibold">{data?.gender === 'MALE' ? 'Laki-laki' : 'Perempuan'}</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-2">
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Alamat</span>
            <span className="text-sm font-semibold">{data?.patient_full_address || '-'}</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Telepon</span>
            <span className="text-sm font-semibold">{data?.user_phone || '-'}</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Email</span>
            <span className="text-sm font-semibold">{data?.user_email || '-'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientData
