import React from 'react'
import { Icon } from '@iconify/react'
import { Popover } from '@headlessui/react'
import { useState } from 'react'
const Class = () => { 
  const [detail,setDetail]=useState({ 
    groupName: '',
    subjectName: ''
  });
 const handleSubmit =(e)=>{
  e.preventDefault();
 
  setDetail(
  {  groupName: '',
    subjectName: ''}
  )
 }
  return (
   <div className=' pt-8 pl-2'>
      <Popover>
        <>
        <Popover.Button>
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <span className="flex items-center">
      <Icon icon="bi:plus" className="mr-2" />
        Create Group 
      </span>
    </div>
    </Popover.Button>
    <Popover.Panel className='p-4 border-2 border-gray-300 rounded-lg mt-4'>
      <form onSubmit={handleSubmit}>
        <input value={detail.groupName} onChange={(e)=>{setDetail({...detail,groupName:e.target.value})}} className='block mb-4 text-lg shadow appearance-none border rounded w-[90%] py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='Enter group name'/>
        <input value={detail.subjectName} onChange={(e)=>{setDetail({...detail,subjectName:e.target.value})}}  className='block mb-4 text-lg shadow appearance-none border rounded w-[90%] py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='Enter subject name'/>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create</button>
      </form>
    </Popover.Panel>
    </>
    </Popover>
    </div>
  )
}

export default Class