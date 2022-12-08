import React from 'react'

import { ExitToAppIcon } from 'icon/material-icon'
import Image from 'next/image'

import useHeader from '@/hooks/components/Header/useHeader'

const Header = () => {
  const { logoutUser } = useHeader()
  return (
    <div className="flex z-10 flex-row justify-between items-center py-3 px-6 shadow">
      <Image alt="logo-alteacare" src="/assets/images/alteacare-logo.svg" width={125} height={35} priority />
      <div className="flex flex-row gap-x-5 items-center">
        {/* avatar btn */}
        <div className="group inline-block relative">
          <div className="p-2 hover:bg-main-subtle rounded-full">
            <button className="p-1 px-1.5 text-white bg-main-darker rounded-full">FL</button>
          </div>
          {/* hovered block section */}
          <div className="hidden group-hover:block absolute top-10 right-0 z-10 bg-white">
            <div className="p-4 w-40 text-sm rounded-lg shadow">
              <button className="flex flex-row justify-between w-full items-center text-info-2" onClick={logoutUser}>
                <span className="font-semibold">Keluar</span>
                <ExitToAppIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
