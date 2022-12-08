import React from 'react'

import { formatIDR } from 'helpers'
import { ArrowForwardIosIcon, CancelIcon } from 'icon/material-icon'
import Image from 'next/image'

import useApprovalDialog from '@/hooks/components/Dialog/useApprovalDialog'

interface IProps {
  data: any
  refetchInsuranceData: () => void
  closeModal: () => void
}

const InsuranceApprovalDialog = ({ data, refetchInsuranceData, closeModal }: IProps) => {
  const { coveredAmount, excessFee, note, updateNotesValue, inputCoveredAmount, submitInsuranceApproval } =
    useApprovalDialog({
      data,
      refetchInsuranceData,
      closeModal,
    })

  return (
    <div className="flex flex-col text-dark-1">
      <div className="flex flex-row justify-between items-center bg-info-2 rounded-t-md p-5 text-white">
        <span className="font-bold">Disetujui</span>
        <button onClick={closeModal}>
          <CancelIcon />
        </button>
      </div>

      <div className="flex flex-col px-10 py-7 gap-y-4 border-b-default border-light-1">
        <div className="flex flex-row gap-x-2 items-center">
          <Image alt="insurance-icon" src="/assets/icons/insurance-icon.svg" width={17} height={17} />
          <span className="font-semibold text-sm">Coverage Amount</span>
        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col gap-y-1">
            <span className="text-xs">Permintaan Pengajuan Biaya</span>
            <input
              type="text"
              className="input-style-bordered bg-light-3"
              value={formatIDR(data?.submission_amount)}
              disabled
            />
          </div>
          <ArrowForwardIosIcon className="text-info-2 mx-6" />
          <div className="flex flex-col gap-y-1">
            <span className="text-xs">Biaya Yang Dijamin</span>
            <input
              type="number"
              className="input-style-bordered"
              placeholder="Masukkan biaya"
              value={coveredAmount}
              onChange={(e: any) => inputCoveredAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <span className="text-xs">Catatan</span>
          <input
            type="text"
            placeholder="Isi Catatan"
            className="input-style-bordered"
            value={note}
            onChange={(e: any) => updateNotesValue(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-row justify-between items-center px-5 py-3">
        <div className="flex flex-col gap-y-2">
          <span className="text-xs">Biaya Excess</span>
          <span className="font-semibold">{formatIDR(excessFee)}</span>
        </div>
        <button
          className={`${note && coveredAmount ? 'btn-primary' : 'btn-disabled cursor-not-allowed'} px-10`}
          disabled={!note || !coveredAmount}
          onClick={submitInsuranceApproval}
        >
          Simpan
        </button>
      </div>
    </div>
  )
}

export default InsuranceApprovalDialog
