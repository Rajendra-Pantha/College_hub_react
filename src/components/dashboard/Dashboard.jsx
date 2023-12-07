import React from 'react';

import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Data from '../../data/Data'
const Dashboard = () => {
  return (
    <div className=' pt-8 pl-4 '>
      <div className='flex flex-wrap gap-4'>
     { Data.map((item)=><div className='bg-gray-100 w-auto h-auto p-2' key={item.id}>
      <Link to={`details/${item.id}`}><button className='text-xs text-blue-700 '>View details...</button></Link>
     <div className='bg-[#86b48888] w-auto p-1 rounded-lg'>
      <div className='flex gap-2'>
        <div>Assignment Type:</div>
        <div>{ item.Assignmen_Type}</div>
      </div>

      <div className='flex gap-2'>
        <div>Topic name: </div>
        <div>{ item.Topic_name }</div>
      </div>
      
      <div className='flex gap-2'>
        <div>Assignment by: </div>
        <div>{ item.Assignment_by }</div>
      </div>

       <div className='flex gap-2'>
        <div>DeadLine: </div>
        <div>{ item.Deadline }</div>
      </div>
     </div>

     
       
     <div className='mt-2 flex gap-4'>
      <div className=' h-10 w-14 rounded-full bg-[#86b488] flex justify-center items-center'><Icon className=" text-xl text-white" icon="fluent:learning-app-24-regular" /></div>
     <div className='flex gap-2 bg-[#86b48888] rounded-lg w-full ml-0.5 justify-center items-center'>
        <div  >Subject </div>
        <div>{ item.Subject }</div>
      </div>
     </div>

     </div>)
     }
     </div>
    </div>
  )
}

export default Dashboard