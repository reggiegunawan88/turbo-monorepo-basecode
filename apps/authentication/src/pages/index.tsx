import Image from 'next/image'
import Div100vh from 'react-div-100vh'

import Login from '@/components/Authentication/Login'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <Div100vh className="flex flex-col items-center justify-center bg-[url('/assets/images/login-bg-desktop.svg')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col items-center gap-y-8">
        {/* alteacare logo */}
        <Image alt="alteacare-logo" src="/assets/images/alteacare-logo.svg" width={273} height={78} />
        {/* auth component */}
        <Login />
      </div>
      {/* footer */}
      <Footer />
    </Div100vh>
  )
}

export default Home
