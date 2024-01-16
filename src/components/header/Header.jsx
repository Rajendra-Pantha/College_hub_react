import React , {useContext, useEffect, useState} from 'react'
import { Popover } from '@headlessui/react'
import "./Header.css"
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import User_context from '../../UserContext/User_context';
import AssignmentContext from '../../AssignmentContext/AssignmentContext';
const Header = ({username}) => {
const navigate = useNavigate()
  const handleLogOut=()=>{
    localStorage.removeItem("Campus_Token");
      navigate("/")
     }
  return (
    // 01949A
    <div className='flex justify-between items-center px-4 pr-6 h-20 bg-[#004369] broder-none'>
        <div  ><span className='logo text-white font-body text-3xl '>CAMPUS HUB</span>
        </div>
        <div>
        <div className='  font-bold text-2xl  gap-2 flex items-center justify-center'>
        {/* <Popover className="relative">
     
        <>
          
          <Popover.Button className='focus:outline-none' >
          
            <Icon className=' text-white text-3xl mt-2' icon="basil:notification-solid"  />
          </Popover.Button>
          <Popover.Panel className="absolute right-0 mt-2.5 z-10 w-52 shadow-sm rounded-md shadow-black bg-blue-50">

<div className='  px-2 py-3  text-sm'></div>
      
          </Popover.Panel>
         </>
    
    </Popover> */}
    <Popover className="relative">
     
        <>
          
          <Popover.Button className='focus:outline-none'>
          
          {username &&  <div className='border-white-500 border-4 text-[16px] flex justify-center items-center text-white text-center w-9 h-9 rounded-full font-bold font-sans'>{ username && username}</div>}
          </Popover.Button >
          <Popover.Panel className="absolute right-0 mt-2.5 z-10 w-40 shadow-sm rounded-md shadow-black bg-blue-50">

    <div className='  px-2 py-3  text-sm'>
     
    <div className='block cursor-pointer font-bold  border-gray-300 text-center text-sm '
     onClick={handleLogOut}>
          Log Out
        </div>
    </div>
 
      
          </Popover.Panel>
         </>
      
    </Popover>
    </div>
       
       
        
        </div>
        
        </div>
   
  )
}

export default Header