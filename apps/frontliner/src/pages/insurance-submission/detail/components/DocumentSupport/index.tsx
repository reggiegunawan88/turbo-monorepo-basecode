import React from 'react'

import { FolderIcon } from 'icon/material-icon'
import Image from 'next/image'
import { DocumentUploader } from 'ui'

import useDocumentSupport from '@/hooks/pages/insurance-submission-detail/DocumentSupport/useDocumentSupport'

const DocumentSupport = () => {
  const { documentMode, inputMode, toggleDocumentMode, toggleInputMode } = useDocumentSupport()

  const renderUploadDocument = () => {
    if (documentMode === 'VIEW') {
      return (
        <>
          <span className="text-sm">Foto_KTP.jpeg</span>
          <div className="flex flex-row gap-x-3 items-center text-main-primary place-self-end">
            <button>Lihat</button>
            <button onClick={toggleDocumentMode}>
              <Image alt="edit-icon" src="/assets/icons/edit-icon.svg" width={24} height={24} />
            </button>
          </div>
        </>
      )
    } else {
      return (
        <div className="col-span-2">
          <DocumentUploader cancelEdit={toggleDocumentMode} />
        </div>
      )
    }
  }

  const renderInputMode = (type: string) => {
    if (inputMode === 'VIEW') {
      return (
        <>
          <span>ALTEA1234</span>
          <div className="flex flex-row gap-x-3 items-center text-main-primary place-self-end">
            <button onClick={toggleInputMode}>
              <Image alt="edit-icon" src="/assets/icons/edit-icon.svg" width={24} height={24} />
            </button>
          </div>
        </>
      )
    } else {
      return (
        <>
          <input
            type={type === 'TEXT' ? 'text' : 'number'}
            className="px-3 border-b-default border-dark-1 outline-none text-dark-1"
          />
          <div className="flex flex-row gap-x-3 items-center text-main-primary place-self-end">
            <button>Simpan</button>
            <button className="text-error-1" onClick={toggleInputMode}>
              Batal
            </button>
          </div>
        </>
      )
    }
  }

  return (
    <div className="flex shadow bg-white p-6">
      <div className="flex flex-col gap-y-5 w-1/2">
        <div className="flex flex-row gap-x-2 bg-light-4 p-2">
          <FolderIcon fontSize="small" />
          <span className="text-sm font-bold">Data Pendukung</span>
        </div>
        {/* document list */}
        <div className="flex flex-col gap-y-6 px-6 font-semibold text-center text-sm">
          <div className="grid grid-cols-3 items-center text-left">
            <span>Foto KTP</span>
            {renderUploadDocument()}
          </div>
          {/* <div className="grid grid-cols-3 items-center">
            <span>Surat Pengantar</span>
            {renderUploadDocument()}
          </div> */}
          <div className="grid grid-cols-3 items-center text-left">
            <span>Kode Karyawan</span>
            {renderInputMode('TEXT')}
          </div>
          <div className="grid grid-cols-3 items-center text-left">
            <span>Nomor KK</span>
            {renderInputMode('NUMBER')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentSupport
