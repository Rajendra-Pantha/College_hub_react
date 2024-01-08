import React from 'react'
import { Outlet } from 'react-router-dom'
import Text from './components/text/Text'
const Layout = () => {
  return (
    <>
    <div className='md:flex flex-none' >
    <Text />
    <Outlet />
    </div>
    </>
  )
}

export default Layout