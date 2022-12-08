import fetcher from '../../fetcher'

interface ILogin {
  email: string
  password: string
  role: string
}

export const userLogin = async (params: ILogin) => {
  const fetchConfig = {
    url: `${process.env.NEXT_PUBLIC_BASE_URL_USER_SERVICE}/auth/login`,
    method: 'POST',
    isPublic: true,
    body: params,
    bearer: '',
  }

  const response = await fetcher(fetchConfig)
  return response
}
