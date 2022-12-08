import { CheckIcon, CloseIcon, ErrorIcon } from 'icon/material-icon'

import useSnackbar from './hooks/useSnackbar'

export const Snackbar = () => {
  const { showSnackbar, snackbarType, snackbarDescription, closeSnackbar } = useSnackbar()

  if (!showSnackbar) {
    return null
  }

  return (
    <div className="fixed top-18 max-w-sm text-white w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all z-50">
      <div
        className={`flex flex-row gap-x-4 justify-between items-center py-5 px-4 rounded-lg ${
          snackbarType === 'SUCCESS' ? 'bg-success-3' : 'bg-error-3'
        }`}
      >
        <div className="flex flex-row gap-x-3 items-center">
          {snackbarType === 'SUCCESS' && <CheckIcon />}
          {snackbarType === 'ERROR' && <ErrorIcon />}
          <span className="leading-4">{snackbarDescription}</span>
        </div>
        <button onClick={closeSnackbar}>
          <CloseIcon />
        </button>
      </div>
    </div>
  )
}
