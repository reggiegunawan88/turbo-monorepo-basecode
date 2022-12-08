import { AttachFileIcon } from 'icon/material-icon'

import useDocumentUploader from './hooks/useDocumentUploader'

interface IDocumentUploader {
  cancelEdit: () => void
}

export const DocumentUploader = ({ cancelEdit }: IDocumentUploader) => {
  const { uploadedFile, triggerUploadFile, handleUploadFile } = useDocumentUploader()
  return (
    <div className="flex flex-col">
      {/* uploading file section */}
      {/* {uploadProgress ? (
        <div className="grid grid-cols-2 py-3 space-x-3 border-b-default border-light-3">
          <div className="flex flex-row items-center space-x-2 text-dark-3">
            <span className="text-xs font-bold text-dark-1">{uploadedFile?.name}</span>
            <span className="text-xs font-semibold text-dark-3">{convertBytes(uploadedFile?.size)}</span>
          </div>
          <div className="flex flex-row justify-end items-center space-x-3">
            <span className="text-xs text-dark-3">Uploading...</span>
            <div className="w-12 h-1 bg-main-subtle">
              <div className="w-full h-1 bg-main-darker animate-pulse"></div>
            </div>
          </div>
        </div>
      ) : null} */}
      {/* attach file area */}
      <div className="grid grid-cols-2">
        {/* <div className="flex flex-col text-dark-3">
          <span className="font-bold text-dark-1">Unggah Berkas</span>
          <span>Max 10MB</span>
        </div> */}
        <span className="font-bold text-dark-1 text-sm">{uploadedFile?.name || 'Unggah berkas'}</span>

        <div className="flex flex-row items-center justify-end gap-x-3">
          <button className="flex flex-row items-center space-x-1 text-main-primary" onClick={triggerUploadFile}>
            <AttachFileIcon fontSize="medium" />
            <span className="text-sm">Unggah</span>
          </button>
          <button className="text-error-1" onClick={cancelEdit}>
            <span className="text-sm">Batal</span>
          </button>
          <input id="uploadDocument" type="file" onChange={handleUploadFile} hidden />
        </div>
      </div>
    </div>
  )
}
