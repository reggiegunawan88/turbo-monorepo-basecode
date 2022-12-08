import fetcher from '../../fetcher'

interface IProps {
  token: string
  query: any
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL_PARTNER_SERVICE

export const getInsuranceSubmissionList = async ({ token, query }: IProps) => {
  const page = `&page=${query?.page || 1}`
  const orderID = query?.order_id ? `&order_id=${query?.order_id}` : ''
  const status = query?.status ? `&status[]=${query?.status}` : ''
  const patientName = query?.patient_name ? `&patient_name=${query?.patient_name}` : ''
  const doctorName = query?.doctor_name ? `&doctor_name=${query?.doctor_name}` : ''
  const specializations = query?.specialization_ids ? `&specialization_ids[]=${query?.specialization_ids}` : ''
  const insuranceNo = query?.insurance_no ? `&insurance_no=${query?.insurance_no}` : ''

  // tanggal konsultasi (attribute: schedule_date)
  const confirmationDateStart = query?.confirmation_date?.start_date
    ? `&confirmation_date_start=${query?.confirmation_date?.start_date}`
    : ''
  const confirmationDateEnd = query?.confirmation_date?.end_date
    ? `&confirmation_date_end=${query?.confirmation_date?.end_date}`
    : ''

  // tanggal pengajuan (attribute: create_date)
  const createDateStart = query?.create_date?.start_date ? `&create_date_start=${query?.create_date?.start_date}` : ''
  const createDateEnd = query?.create_date?.end_date ? `&create_date_end=${query?.create_date?.end_date}` : ''

  // tanggal konfirmasi (attribute: confirmation_date)
  const scheduleDateStart = query?.schedule_date?.start_date
    ? `&schedule_date_start=${query?.schedule_date?.start_date}`
    : ''
  const scheduleDateEnd = query?.schedule_date?.end_date ? `&schedule_date_end=${query?.schedule_date?.end_date}` : ''

  const sorting = query?.sorting?.key
    ? `&sort_by=${query?.sorting?.key}&sort_type=${query?.sorting?.value}`
    : '&sort_by=ID&sort_type=DESC'

  const fetchConfig = {
    url: `${baseURL}/v1/submission?${page}${orderID}${status}${patientName}${doctorName}${specializations}${insuranceNo}${confirmationDateStart}${confirmationDateEnd}${createDateStart}${createDateEnd}${scheduleDateStart}${scheduleDateEnd}${sorting}`,
    method: 'GET',
    isPublic: false,
    body: null,
    bearer: token,
  }

  const response = await fetcher(fetchConfig)
  return response
}
