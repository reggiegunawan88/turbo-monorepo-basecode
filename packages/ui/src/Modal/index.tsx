import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  hideModal: () => void
}

export const Modal = ({ children, hideModal }: IProps) => {
  return (
    <>
      <div className="fixed inset-0 z-10 w-full bg-dark-1 opacity-75 cursor-pointer" onClick={hideModal} />
      <div className="overflow-y-auto fixed left-1/2 top-1/2 z-20 w-full max-w-sm h-fit bg-white rounded-md transform -translate-x-1/2 -translate-y-1/2">
        {/* filter list */}
        <div className={`flex flex-col gap-2 h-full`}>{children}</div>
      </div>
    </>
  )
}
