import { FormEvent, useState } from 'react'

interface IProps {
  closeModal: () => void
}

const useRejectionDialog = ({ closeModal }: IProps) => {
  const [verificationStatus, setverificationStatus] = useState<string>('REJECTED')
  const [notes, setNotes] = useState<string>('')

  const updateNotesValue = (param: string) => {
    setNotes(param)
  }

  const selectVerificationStatus = (e: FormEvent<HTMLInputElement>) => {
    setverificationStatus(e.currentTarget.value)
  }

  const submitInsuranceRejection = () => {
    closeModal()
  }

  return {
    verificationStatus,
    notes,
    updateNotesValue,
    selectVerificationStatus,
    submitInsuranceRejection,
  }
}

export default useRejectionDialog
