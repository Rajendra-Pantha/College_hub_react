import React from 'react';

import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Data from '../../data/Data'
const Assignments = () => {
  return (
    <div className=' pt-8 pl-4 mt-20'>
      
      <div className='flex flex-wrap gap-8 justify-center'>
        {Data.map((item) => <div className='bg-[#FAFAFA] cursor-pointer hover:scale-105 w-[22%] rounded-lg  p-4 shadow-gray-400 shadow-md' key={item.id}>
          <Link to={`details/${item.id}`}><button className='text-[18px] text-[#435585] font-bold '>{item.Subject}</button></Link>
          <div className='  p-4 rounded-lg'>
            <div className='flex gap-2'>
              <div>
              <Icon className=' h-36 w-48 text-[#ccb67f]' icon="bx:file" />
              </div>
       
            </div>


          
             

           
          </div>

          

          <div className='mt-2 flex gap-4'>
            <div className=' h-10 w-14 rounded-full bg-[#818FB4] flex justify-center items-center'><Icon className="  text-xl " icon="mingcute:user-2-fill" color='white' /></div>
            <div className='flex gap-2 bg-[#818FB4] rounded-lg w-full ml-0.5 justify-center items-center'>
             
              <div className='text-white font-bold'>{item.Assignment_by}</div>
            </div>
          </div>

        </div>)
        }
      </div>
    </div>
  )
}

export default Assignments