import React, { ReactNode } from 'react'

import { AssignmentIcon } from 'icon/material-icon'

interface IEmptyState {
  imageSize?: number
  image?: ReactNode | undefined
  title?: string
}

const EmptyState = (props: IEmptyState) => {
  const { image, imageSize = 60, title = 'title here' } = props
  return (
    <div className="flex flex-col items-center p-8 text-dark-4">
      {image ? image : <AssignmentIcon style={{ fontSize: imageSize }} />}
      <span className="font-normal text-sm">{title}</span>
    </div>
  )
}

export default EmptyState
