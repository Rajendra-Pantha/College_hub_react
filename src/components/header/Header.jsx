import React from 'react'
import { Popover } from '@headlessui/react'
import "./Header.css"
import { Icon } from '@iconify/react';
const Header = () => {
  return (
    // 01949A
    <div className='flex justify-between items-center px-4 pr-6 h-20 bg-[#004369] broder-none'>
        <div  ><span className='logo text-white font-body text-3xl '>CAMPUS HUB</span>
        </div>
        <div>
        <div className='flex gap-6 font-bold text-2xl '>
        <Popover className="relative">
     
        <>
          
          <Popover.Button >
          
            <Icon className=' text-white text-4xl' icon="basil:notification-solid"  />
          </Popover.Button>
          <Popover.Panel className="absolute right-0 mt-2.5 z-10 w-52 shadow-sm rounded-md shadow-black bg-blue-50">

<div className='  px-2 py-3  text-sm'></div>
      
          </Popover.Panel>
         </>
    
    </Popover>
    <Popover className="relative">
     
        <>
          
          <Popover.Button >
          
           <div className='text-white border-2 border-white rounded-full p-1 text-xl'>RP</div>
          </Popover.Button >
          <Popover.Panel className="absolute right-0 mt-2.5 z-10 w-40 shadow-sm rounded-md shadow-black bg-blue-50">

    <div className='  px-2 py-3  text-sm'>
     
    
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