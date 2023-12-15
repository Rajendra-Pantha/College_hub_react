import React from 'react'

const Setting = () => {
  return (
    <div className=' mt-8 pt-8 pl-2 ml-14'>
      <div >
        <div className='text-center font-semibold text-3xl mb-12'>Setting</div>
        <button className='block border-b-2 w-[50vh] mb-4 p-2 border-gray-300 text-center text-sm font-semibold md:w-[80wh]'>
          Change Username
        </button>

        <button className='block border-b-2 w-[50vh]  mb-4 p-2 border-gray-300 text-center text-sm font-semibold md:w-[80wh]'>
          Change Password
        </button>

        <button className='block border-b-2 w-[50vh] mb-4 p-2  border-gray-300 text-center text-sm font-semibold md:[80wh]'>
        Terms and Conditions   </button>

        <button className='block border-b-2 w-[50vh]  mb-4 p-2 border-gray-300 text-center text-sm font-semibold md:w-[80wh]'>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Setting