import { useState } from 'react'

const useDocumentUploader = () => {
  const [uploadedFile, setUploadedFile] = useState<any>(null)
  const [uploadProgress, setUploadProgress] = useState(false)

  // upload doc file
  const triggerUploadFile = () => {
    const doc = document || null
    doc?.getElementById('uploadDocument')?.click()
  }

  // onchange input type file
  const handleUploadFile = async (e: any) => {
    const file = e.target.files[0]
    if (file === undefined) return // if user not selected any file
    const fileType = file.type
    const fileSize = file.size
    const validFileFormat = ['image/gif', 'image/jpeg', 'image/jpg', 'image/png', 'application/pdf']

    // file size exceed limit
    if (fileSize >= 10240000) {
      alert('File hanya bisa di upload maximum 10 MB')
      return false
    }
    // file format invalid
    if (validFileFormat.indexOf(fileType) === -1) {
      alert('File hanya dapat berbentuk gambar atau PDF')
      return false
    }

    // file valid
    setUploadedFile(file)
    // const formData = new FormData()
    // formData.append('file', file, file.name)
    // start uploading file
    // setUploadProgress(0);
    // setUploadedFile(file);
    // await uploadDocument(appointmentId, formData, event => {
    //   const progress = Math.round((100 * event.loaded) / event.total);
    //   setUploadProgress(progress);
    // });
    // setUploadProgress(0);
    // re-fetch doc after upload file
    // getMedicalDocument();
  }

  return {
    uploadedFile,
    triggerUploadFile,
    handleUploadFile,
  }
}

export default useDocumentUploader
