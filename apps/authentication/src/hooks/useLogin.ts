import { useEffect, useState } from 'react'

import { setCookies } from 'helpers'
import { destroyCookie } from 'nookies'
import { UserService } from 'service'
import { useSnackbarStore } from 'store'

import roles from '@/constant/role'

const useLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState(roles[0]?.code)
  const [showPassword, setShowPassword] = useState(false)

  // zustand store
  const { openSnackbar, setSnackbarType, setSnackbarDescription } = useSnackbarStore((state) => ({
    openSnackbar: state.openSnackbar,
    setSnackbarType: state.setSnackbarType,
    setSnackbarDescription: state.setSnackbarDescription,
  }))

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleInput = (e: any) => {
    switch (e.target.name) {
      case 'EMAIL':
        setEmail(e.target.value)
        break
      case 'PASSWORD':
        setPassword(e.target.value)
        break
      case 'ROLE':
        setRole(e.target.value)
        break
      default:
        break
    }
  }

  const submitLogin = () => {
    UserService.userLogin({ email, password, role: role || '' })
      .then((resp: any) => {
        setCookies({ access_token: resp.data?.access_token, refresh_token: resp.data?.refresh_token })
        const frontliner_domain: string = process.env.NEXT_PUBLIC_BASE_URL_FRONT_LINER || ''
        window.location.href = frontliner_domain
      })
      .catch((error: any) => {
        openSnackbar()
        setSnackbarType('ERROR')
        setSnackbarDescription(error?.message)
      })
  }

  const clearCookies = () => {
    destroyCookie(undefined, 'alt_user_token', {
      domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    })
    destroyCookie(undefined, 'alt_refresh_token', {
      domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    })
  }

  useEffect(() => {
    // clear cookies on component mounted
    clearCookies()
  }, [])

  return {
    email,
    password,
    role,
    showPassword,
    handleInput,
    toggleShowPassword,
    submitLogin,
  }
}

export default useLogin
