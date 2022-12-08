import { ReactElement, useEffect } from 'react'

import { useRouter } from 'next/router'

import DashboardLayout from '@/layouts/DashboardLayout'

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/insurance-submission')
  }, [])

  return null
}

Home.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Home
