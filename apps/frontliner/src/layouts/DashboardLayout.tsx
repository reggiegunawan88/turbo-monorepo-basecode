import React, { ReactNode } from 'react'

import Div100vh from 'react-div-100vh'

import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

interface IDashboardLayout {
  children: ReactNode
}

const DashboardLayout = ({ children }: IDashboardLayout) => {
  return (
    <Div100vh className="flex flex-col">
      <Header />
      <div className="flex flex-row grow overflow-auto">
        <Navbar />
        {/* dashboard content */}
        <div className="flex flex-1 bg-light-3 p-6 overflow-auto">{children}</div>
      </div>
    </Div100vh>
  )
}

export default DashboardLayout
