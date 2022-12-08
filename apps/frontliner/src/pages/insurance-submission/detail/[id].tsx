import React, { ReactElement } from 'react'

import { ArrowBackIcon, CheckIcon, CloseIcon, VideocamIcon } from 'icon/material-icon'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import PatientDetail from './components/PatientDetail'
import LoadingState from '@/components/LoadingState'
import useInsuranceSubmissionDetail from '@/hooks/pages/insurance-submission-detail/useInsuranceSubmissionDetail'
import DashboardLayout from '@/layouts/DashboardLayout'

const InsuranceApprovalDialog = dynamic(() => import('@/components/Dialog/InsuranceApprovalDialog'))
const InsuranceRejectionDialog = dynamic(() => import('@/components/Dialog/InsuranceRejectionDialog'))

const InsuranceSubmissionDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, dialogType, openDialogModal, hideModal, fetchInsuranceDetailData, ComponentModal } =
    useInsuranceSubmissionDetail({
      insuranceId: id,
    })

  const renderModalComponent = () => {
    if (dialogType === 'APPROVE') {
      return ComponentModal(
        <InsuranceApprovalDialog data={data} refetchInsuranceData={fetchInsuranceDetailData} closeModal={hideModal} />
      )
    }
    return ComponentModal(<InsuranceRejectionDialog closeModal={hideModal} />)
  }

  if (isLoading) {
    return <LoadingState />
  }

  if (!data) {
    return <h1>Data not found</h1>
  }

  return (
    <div className="flex flex-col w-full h-fit rounded-md bg-light-4 text-dark-1">
      <div className="bg-main-primary p-6 rounded-t-md">
        <button
          className="flex flex-row gap-x-3 items-center text-white cursor-pointer"
          onClick={() => router.push('/insurance-submission')}
        >
          <ArrowBackIcon />
          <span className="text-sm">Kembali</span>
        </button>
      </div>
      {/* order detail */}
      <div className="flex flex-row justify-between items-center px-5 py-4">
        {/* order ID and status */}
        <div className="flex flex-col gap-y-2">
          <span
            className="text-xs px-2 rounded w-fit"
            style={{ color: data?.status_detail?.text_color, backgroundColor: data?.status_detail?.bg_color }}
          >
            {data?.status_detail?.label}
          </span>
          <div className="flex flex-row gap-x-2 items-center">
            <div className="text-white bg-info-4 rounded px-0.5">
              <VideocamIcon fontSize="small" />
            </div>
            <span className="font-semibold text-dark-1">Order ID: {data?.attributes?.order_id}</span>
          </div>
        </div>
        {/* action btn */}
        {data?.status !== 'APPROVED' && (
          <div className="flex flex-row gap-x-4">
            {/* btn reject temporary disabled */}
            <button
              className="btn-disabled cursor-not-allowed py-3 px-10"
              disabled
              onClick={() => openDialogModal('REJECT')}
            >
              <div className="flex flex-row gap-x-3">
                <CloseIcon />
                <span>Tolak</span>
              </div>
            </button>
            <button
              className="bg-main-primary hover:bg-success-1 py-3 px-10 text-white rounded-lg"
              onClick={() => openDialogModal('APPROVE')}
            >
              <div className="flex flex-row gap-x-3">
                <CheckIcon />
                <span>Setujui</span>
              </div>
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col bg-white p-6 gap-y-4">
        <PatientDetail data={data} />
        {/* <DocumentSupport /> */}
      </div>
      {renderModalComponent()}
    </div>
  )
}

InsuranceSubmissionDetail.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default InsuranceSubmissionDetail
