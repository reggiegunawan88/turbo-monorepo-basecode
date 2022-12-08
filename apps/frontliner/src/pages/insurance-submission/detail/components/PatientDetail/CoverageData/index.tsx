import React from 'react'

import { formatDateGeneral, formatIDR } from 'helpers'
import Image from 'next/image'

interface IProps {
  data: any
}

const CoverageData = ({ data }: IProps) => {
  return (
    <div className="flex flex-col gap-y-5">
      {/* patient data */}
      <div className="flex flex-row gap-x-2 bg-light-4 p-2">
        <Image
          alt="insurance-icon"
          src="/assets/icons/insurance-icon.svg"
          width={0}
          height={0}
          className="w-5 h-auto"
        />
        <span className="text-sm font-bold">Coverage</span>
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Tanggal Pengajuan</span>
            <span className="text-sm font-semibold">{formatDateGeneral(data?.created_at) || '-'}</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Tanggal Konfirmasi</span>
            <span className="text-sm font-semibold">
              {formatDateGeneral(data?.approved_at) || formatDateGeneral(data?.rejected_at) || '-'}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Biaya Dijamin</span>
            <div className="flex flex-row gap-x-1 items-center">
              <Image alt="insurance-icon" src="/assets/icons/insurance-icon.svg" width={17} height={17} />
              <span className="text-sm font-semibold">
                {data?.covered_amount > 0 ? formatIDR(data?.covered_amount) : '-'}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Biaya Excess</span>
            <span className="text-sm font-semibold">{formatIDR(data?.excess_amount) || '-'}</span>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Catatan</span>
            <span className="text-sm font-semibold">{data?.approve_note || data?.reject_note || '-'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoverageData
