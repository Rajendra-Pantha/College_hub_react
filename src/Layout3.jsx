import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Sidebarsteacher from './components/sidebars/sidebarsteacher'


const Layout3 = () => {
  return (
    <>
    <Header/>
    
    <div className='flex '>
    <Sidebarsteacher/>
    <Outlet/>
    </div>
   
    </>
  )
}

export default Layout3