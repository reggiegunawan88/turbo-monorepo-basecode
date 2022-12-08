import { useState } from 'react'

const useDocumentSupport = () => {
  const [documentMode, setDocumentMode] = useState('VIEW')
  const [inputMode, setInputMode] = useState('VIEW')

  const toggleDocumentMode = () => {
    setDocumentMode(documentMode === 'VIEW' ? 'EDIT' : 'VIEW')
  }

  const toggleInputMode = () => {
    setInputMode(inputMode === 'VIEW' ? 'EDIT' : 'VIEW')
  }

  return {
    documentMode,
    inputMode,
    toggleDocumentMode,
    toggleInputMode,
  }
}

export default useDocumentSupport
