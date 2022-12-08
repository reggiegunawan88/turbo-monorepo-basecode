// helper for reusable function
import { setCookie } from 'nookies'

interface ICookies {
  access_token: string
  refresh_token: string
}

/* set access & refresh token cookies */
export const setCookies = ({ access_token, refresh_token }: ICookies) => {
  setCookie(null, 'alt_user_token', access_token, {
    maxAge: 30 * 24 * 60 * 60,
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    path: '/',
  })
  setCookie(null, 'alt_refresh_token', refresh_token, {
    maxAge: 30 * 24 * 60 * 60,
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    path: '/',
  })
  return false
}
