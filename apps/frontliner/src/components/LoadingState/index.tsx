import React from 'react'

import Image from 'next/image'

const LoadingState = () => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <Image alt="loading-state" src="/assets/loading-icon.gif" width={100} height={100} layout="fixed" priority />
    </div>
  )
}

export default LoadingState
