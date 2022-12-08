import React from 'react'

import ConsultationData from './ConsultationData'
import CoverageData from './CoverageData'
import PartnerData from './PartnerData'
import PatientData from './PatientData'

interface IProps {
  data: any
}

const PatientDetail = ({ data }: IProps) => {
  return (
    <div className="grid grid-cols-2 gap-x-3 p-6 shadow bg-white">
      <div className="flex flex-col gap-y-6">
        <PatientData data={data?.attributes ? data?.attributes : data?.patient} />
        <PartnerData data={data} />
      </div>
      <div className="flex flex-col gap-y-6">
        <ConsultationData data={data} />
        <CoverageData data={data} />
      </div>
    </div>
  )
}

export default PatientDetail
