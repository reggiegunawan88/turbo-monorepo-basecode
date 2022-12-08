import fetcher from '../../fetcher'

interface IProps {
  token: string
  id: string
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL_PARTNER_SERVICE

export const getInsuranceSubmissionDetail = async ({ token, id }: IProps) => {
  const fetchConfig = {
    url: `${baseURL}/v1/submission/${id}`,
    method: 'GET',
    isPublic: false,
    body: null,
    bearer: token,
  }

  const response = await fetcher(fetchConfig)
  return response
}
