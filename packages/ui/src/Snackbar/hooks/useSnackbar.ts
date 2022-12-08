import { useEffect } from 'react'

import { useSnackbarStore } from 'store'

const useSnackbar = () => {
  const { showSnackbar, snackbarType, snackbarDescription, closeSnackbar } = useSnackbarStore((state) => ({
    showSnackbar: state.isOpen,
    snackbarType: state.type,
    snackbarDescription: state.description,
    closeSnackbar: state.closeSnackbar,
  }))

  useEffect(() => {
    // close snackbar after 5 seconds showing
    if (showSnackbar) {
      const snackbarTimeout = setTimeout(() => {
        closeSnackbar()
      }, 5000)
      return () => {
        clearTimeout(snackbarTimeout)
      }
    }
  }, [showSnackbar])

  return {
    showSnackbar,
    snackbarType,
    snackbarDescription,
    closeSnackbar,
  }
}

export default useSnackbar
