import { ReactElement, useState } from 'react'

import { Modal } from 'ui'

const useModal = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const hideModal = () => {
    setShowModal(false)
  }

  const ComponentModal = (children: ReactElement) => {
    if (!showModal) {
      return null
    }
    return <Modal hideModal={hideModal}>{children}</Modal>
  }

  return { showModal, openModal, hideModal, ComponentModal }
}

export default useModal
