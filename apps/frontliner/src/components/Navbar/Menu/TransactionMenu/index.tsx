import React from 'react'

import { DescriptionIcon, ExpandLessIcon, ExpandMoreIcon } from 'icon/material-icon'
import Link from 'next/link'

interface IProps {
  activePath: string
  minimize: boolean
  showSubmenu: boolean
  expandSubmenu: () => void
}

const TransactionMenu = ({ activePath, minimize, showSubmenu, expandSubmenu }: IProps) => {
  return (
    <>
      <div
        className={`flex flex-row gap-x-3 items-center py-3 px-6 cursor-pointer hover:bg-info-1 hover:text-white ${
          activePath.includes('insurance-submission') ? 'bg-info-1 text-white' : 'bg-white text-info-1'
        }`}
        onClick={expandSubmenu}
      >
        {!minimize && <span className="font-bold">Transaksi</span>}
        {showSubmenu ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
      </div>
      {/* navigation sub-menu list */}
      <div className={`transition-all ${showSubmenu ? 'opacity-100' : 'opacity-0'}`}>
        <Link
          passHref
          href="/insurance-submission"
          className={`flex flex-row items-center px-4 gap-x-2 py-3 text-sm cursor-pointer border-l-3 whitespace-nowrap hover:text-white hover:bg-info-1 hover:border-main-primary ${
            activePath?.includes('insurance-submission')
              ? 'bg-info-1 border-main-primary text-white'
              : 'bg-white text-info-1'
          }`}
        >
          <DescriptionIcon fontSize="small" />
          {!minimize && <span>Pengajuan Asuransi</span>}
        </Link>
      </div>
    </>
  )
}

export default TransactionMenu
