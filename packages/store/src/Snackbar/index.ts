import create from 'zustand'

interface SnackbarState {
  isOpen: boolean
  type: string
  description: string
  openSnackbar: () => void
  closeSnackbar: () => void
  setSnackbarType: (value: string) => void
  setSnackbarDescription: (value: string) => void
}

// define the store
export const useSnackbarStore = create<SnackbarState>((set) => ({
  isOpen: false,
  type: '',
  description: '',
  openSnackbar: () => set(() => ({ isOpen: true })),
  closeSnackbar: () => set(() => ({ isOpen: false })),
  setSnackbarType: (value) => set(() => ({ type: value })),
  setSnackbarDescription: (value) => set(() => ({ description: value })),
}))
