import { useEffect, useState } from 'react'

import { parseCookies } from 'nookies'
import { PartnerService } from 'service'

import useModal from '@/hooks/useModal'

interface IProps {
  insuranceId: string | any
}

const useInsuranceSubmissionDetail = ({ insuranceId }: IProps) => {
  const { openModal, hideModal, ComponentModal } = useModal()
  const [data, setData] = useState(null) as any
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [dialogType, setDialogType] = useState<string>('')

  const openDialogModal = (type: string) => {
    setDialogType(type)
    openModal()
  }

  const fetchInsuranceDetailData = () => {
    const token = parseCookies().alt_user_token || ''
    PartnerService.getInsuranceSubmissionDetail({ token, id: insuranceId })
      .then((resp: any) => {
        setData(resp?.data)
        setIsLoading(false)
      })
      .catch((error: any) => {
        console.error(error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (insuranceId) {
      fetchInsuranceDetailData()
    }
  }, [insuranceId])

  return {
    data,
    isLoading,
    dialogType,
    hideModal,
    openDialogModal,
    fetchInsuranceDetailData,
    ComponentModal,
  }
}

export default useInsuranceSubmissionDetail
