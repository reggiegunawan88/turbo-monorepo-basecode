import fetcher from '../../fetcher'

interface IProps {
  token: string
  id: string
  data: any
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL_PARTNER_SERVICE

export const approveInsuranceSubmission = async ({ token, id, data }: IProps) => {
  const fetchConfig = {
    url: `${baseURL}/v1/submission/${id}/approve`,
    method: 'POST',
    isPublic: false,
    body: data,
    bearer: token,
  }

  const response = await fetcher(fetchConfig)
  return response
}
