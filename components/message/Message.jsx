import React from 'react'
import { Icon } from '@iconify/react';
const Message = ({styles}) => {
  return (
    <div className=' pt-8 pl-2 w-screen h-[calc(100vh-4rem)] bg-slate-100 flex justify-center items-center md:pt-0 md:pl-0'>
      <div className='w-[100%] h-[100%] border-2 border-black flex rounded-lg overflow-hidden' >
        {/* //slidebar */}
        <div className='bg-[#6da570b7] flex-col flex justify-between '>

          <div>
            {/* //nav */}
            <div className='p-4 bg-[#6da570] h-10 text-md text-white flex  items-center font-semibold'>
              Start Chat
            </div>
            {/* //search */}
            <div className='border-b-2 border-neutral-50 flex items-center pl-2' >
              <Icon className='' icon="basil:search-solid" color="#fff" />

              <input className='pl-2 text-xs focus:outline-none  h-8  bg-transparent placeholder:text-white  placeholder:text-xs text-white' type='text' placeholder='Search' />

            </div>
            {/* user */}
            <div className='pt-4 pl-2 hover:bg-[#6da570b9]'>
              <img className='inline w-10 rounded-full h-10 ' src='https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=1024x1024&w=is&k=20&c=iX0adGZVKv9wS5yrs0-hpFsJBnRAacZa1DcDZ0I9Bqk=' />
              <div className='inline text-white font-semibold text-sm p-2'>
                Group 1
              </div>
            </div>

            <div className='pt-4 pl-2 hover:bg-[#6da570b9]'>
              <img className='inline w-10 rounded-full h-10 ' src='https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=1024x1024&w=is&k=20&c=iX0adGZVKv9wS5yrs0-hpFsJBnRAacZa1DcDZ0I9Bqk=' />
              <div className='inline text-white font-semibold text-sm p-2'>
                Group 2
              </div>
            </div>
          </div>
          {/* props */}
          <button className={styles}>Create Group</button>
        
        </div>
        {/* chatbox */}
        <div className='flex flex-col  w-[calc(100%)] '>
          {/* chatbox header */}
          <div className='h-10 pl-2 w-[calc(100%)] bg-[#6da570] flex justify-between'>
            <div className='flex items-center gap-2'>
              <img className=' w-6 rounded-full h-6' src='https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=1024x1024&w=is&k=20&c=iX0adGZVKv9wS5yrs0-hpFsJBnRAacZa1DcDZ0I9Bqk=' />
              <div className='text-white h-full text-md   flex items-center font-semibold'>
                Group 1
              </div>
            </div>
            <div>
              {/* icon="basil:other-1-solid"  */}
              <Icon className='text-white text-3xl font-bold p-2 m-2 h-7 w-7  hover:bg-[#606f6155]   hover:rounded-full rounded-full bg-lime-800' icon="material-symbols:info-i" />
            </div>
          </div>
          {/* chatbox body  */}
          <div className='bg-green-100  h-[calc(100%-5rem)]  w-[calc(100%)]  p-4 overflow-y-scroll  '>

            <div className='flex pb-6'>
              <div>
                <img className='h-8 w-8 rounded-full' src='https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=1024x1024&w=is&k=20&c=iX0adGZVKv9wS5yrs0-hpFsJBnRAacZa1DcDZ0I9Bqk=' />
                <span className=' text-xs text-gray-500'>just now</span>
              </div>
              <div className=' max-w-md flex flex-col'>
                <p className='bg-white rounded-tl-none rounded-bl-lg rounded-tr-lg rounded-br-l px-3 py-1'>hello</p>
                <img />
              </div>
            </div>

            <div className='flex pb-6 flex-row-reverse'>
              <div>
                <img className='h-8 w-8 rounded-full' src='https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=1024x1024&w=is&k=20&c=iX0adGZVKv9wS5yrs0-hpFsJBnRAacZa1DcDZ0I9Bqk=' />
                <span className=' text-xs text-gray-500'>just now</span>
              </div>
              <div className=' max-w-md flex flex-col'>
                <p className='bg-blue-100 rounded-tl-none rounded-bl-lg rounded-tr-lg rounded-br-l px-3 py-1'>hello</p>
                <img />
              </div>
            </div>

          </div>
          {/* message input */}
          <div className='w-[100%]'>
            <input className='h-10 w-[90%] focus:outline-none placeholder:p-2 p-2' type="text" placeholder='Write something here...' />
            <button className='w-[10%] text-white p-2 text-xs  bg-green-800 h-11 hover:bg-green-600 '>Send</button>

          </div>
        </div>


      </div>

    </div>
  )
}

export default Message