import { destroyCookie } from 'nookies'

const useHeader = () => {
  const logoutUser = async () => {
    // remove cookie and redirect to auth page
    await destroyCookie(undefined, 'alt_user_token', {
      domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    })
    await destroyCookie(undefined, 'alt_refresh_token', {
      domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    })
    window.location.href = process.env.NEXT_PUBLIC_BASE_URL_AUTHENTICATION || ''
  }

  return {
    logoutUser,
  }
}

export default useHeader
