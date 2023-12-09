import React from 'react'
import { Popover } from '@headlessui/react'

import { Icon } from '@iconify/react';
const Header = () => {
  return (
    <div className='flex justify-between items-center px-4 pr-6 h-16 bg-[#D2DDF3] '>
        <div className='font-bold text-xl'>CAMPUS HUB
        </div>
        <div>
        <div className='flex gap-6 font-bold text-2xl'>
        <Popover className="relative">
     
        <>
          
          <Popover.Button >
          
            <Icon icon="basil:notification-solid"  />
          </Popover.Button>
          <Popover.Panel className="absolute right-0 mt-2.5 z-10 w-52 shadow-sm rounded-md shadow-black bg-blue-50">

<div className='  px-2 py-3  text-sm'></div>
      
          </Popover.Panel>
         </>
    
    </Popover>
    <Popover className="relative">
     
        <>
          
          <Popover.Button >
          
            <Icon icon="gg:profile"  />
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