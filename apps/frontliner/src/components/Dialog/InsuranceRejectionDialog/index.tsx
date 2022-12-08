import React from 'react'

import { ArrowDropdownIcon, CancelIcon } from 'icon/material-icon'

import useRejectionDialog from '@/hooks/components/Dialog/useRejectionDialog'

interface IProps {
  closeModal: () => void
}

const InsuranceRejectionDialog = ({ closeModal }: IProps) => {
  const { verificationStatus, notes, updateNotesValue, selectVerificationStatus, submitInsuranceRejection } =
    useRejectionDialog({
      closeModal,
    })

  return (
    <div className="flex flex-col text-dark-1 w-full">
      <div className="flex flex-row justify-between items-center bg-info-2 rounded-t-md p-5 text-white">
        <span className="font-bold">Ditolak</span>
        <button onClick={closeModal}>
          <CancelIcon />
        </button>
      </div>

      <div className="flex flex-col px-10 py-7 gap-y-4 border-b-default border-light-1">
        <div className="flex flex-col gap-y-1">
          <span className="text-xs">Status Verifikasi</span>
          <div className="relative">
            <select
              className="dropdown-input-style"
              value={verificationStatus}
              name="status"
              onChange={(e: any) => selectVerificationStatus(e)}
            >
              <option disabled value="">
                Pilih status
              </option>
              <option value="REJECTED">Ditolak</option>
              <option value="POSTPONED">Verifikasi Ditunda</option>
            </select>
            <ArrowDropdownIcon className="absolute top-3 right-2" fontSize="medium" />
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <span className="text-xs">Catatan</span>
          <input
            type="text"
            placeholder="Isi Alasan Penolakan"
            className="input-style-bordered"
            value={notes}
            onChange={(e: any) => updateNotesValue(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-row px-5 py-3 justify-end">
        <button
          className={`${notes ? 'btn-primary' : 'btn-disabled cursor-not-allowed'} px-10`}
          disabled={!notes}
          onClick={submitInsuranceRejection}
        >
          Simpan
        </button>
      </div>
    </div>
  )
}

export default InsuranceRejectionDialog
