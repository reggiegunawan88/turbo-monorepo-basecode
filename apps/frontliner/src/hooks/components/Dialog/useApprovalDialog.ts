import { useEffect, useState } from 'react'

import { parseCookies } from 'nookies'
import { PartnerService } from 'service'
import { useSnackbarStore } from 'store'

interface IProps {
  data: any
  refetchInsuranceData: () => void
  closeModal: () => void
}

const useApprovalDialog = ({ data, refetchInsuranceData, closeModal }: IProps) => {
  const [bodyData, setBodyData] = useState({
    covered_amount: NaN as number,
    note: '' as string,
  })
  const [excessFee, setExcessFee] = useState<number>(0)

  // zustand snackbar store
  const { openSnackbar, setSnackbarType, setSnackbarDescription } = useSnackbarStore((state) => ({
    openSnackbar: state.openSnackbar,
    setSnackbarType: state.setSnackbarType,
    setSnackbarDescription: state.setSnackbarDescription,
  }))

  const updateNotesValue = (param: string) => {
    setBodyData({
      ...bodyData,
      note: param,
    })
  }

  const inputCoveredAmount = (param: string) => {
    setBodyData({
      ...bodyData,
      covered_amount: parseInt(param),
    })
  }

  const updateExcessFee = () => {
    if (bodyData.covered_amount > data?.submission_amount) {
      return setExcessFee(0)
    }
    const result = data?.submission_amount - bodyData.covered_amount || 0
    setExcessFee(result)
  }

  const submitInsuranceApproval = async () => {
    const token = parseCookies().alt_user_token || ''
    PartnerService.approveInsuranceSubmission({ token: token, id: data?.id, data: bodyData })
      .then(() => {
        openSnackbar()
        setSnackbarType('SUCCESS')
        setSnackbarDescription('Pengajuan Penggunaan Asuransi Berhasil Disetujui')

        // re-fetch insurance detail data after submit approval
        refetchInsuranceData()
        closeModal()
      })
      .catch((error: any) => {
        openSnackbar()
        setSnackbarType('ERROR')
        setSnackbarDescription(error?.message)
      })
  }

  useEffect(() => {
    updateExcessFee()
  }, [bodyData.covered_amount])

  return {
    coveredAmount: bodyData.covered_amount,
    note: bodyData.note,
    excessFee,
    updateNotesValue,
    inputCoveredAmount,
    submitInsuranceApproval,
  }
}

export default useApprovalDialog
