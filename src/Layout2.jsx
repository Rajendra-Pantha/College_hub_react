import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Sidebars from './components/sidebars/Sidebars'

const Layout2 = () => {
  return (
    <>
    <Header/>
    
    <div className='flex '>
    <Sidebars/>
    <Outlet/>
    </div>
   
    </>
  )
}

export default Layout2