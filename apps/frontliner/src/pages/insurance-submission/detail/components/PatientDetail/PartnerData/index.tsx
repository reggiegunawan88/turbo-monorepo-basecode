import React from 'react'

import Image from 'next/image'

interface IProps {
  data: any
}

const PartnerData = ({ data }: IProps) => {
  return (
    <div className="flex flex-col gap-y-5">
      {/* patient data */}
      <div className="flex flex-row items-center gap-x-2 bg-light-4 p-2">
        <Image
          alt="insurance-icon"
          src="/assets/icons/insurance-icon.svg"
          width={0}
          height={0}
          className="w-5 h-auto"
        />
        <span className="text-sm font-bold">Data Rekanan</span>
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="grid grid-cols-3 gap-x-4">
          <div className="flex flex-row gap-x-5">
            <Image alt="aia-logo" src="/assets/images/aia-logo.svg" width={50} height={50} layout="fixed" />
            <div className="flex flex-col gap-y-2">
              <span className="text-xs">Nama Rekanan</span>
              <span className="text-sm font-semibold">{data?.partner?.name || '-'}</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Tipe Rekanan</span>
            <span className="text-sm font-semibold">{data?.partner?.type || '-'}</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xs">Nomor Polis/Peserta</span>
            <span className="text-sm font-semibold">{data?.insurance_no || '-'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnerData
