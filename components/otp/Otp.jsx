import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Otp = ({dashboard}) => {
  const[otps,setotps]=useState("");
  return (
    <div className='w-screen bg-[#859cf176] h-[calc(100vh-7rem)]  flex justify-center items-center md:h-screen md:w-2/3'>
<div>
    <div className='text-3xl font-bold pl-8 '>OTP Verification</div>
    <div className='text-sm text-gray-600  pl-8 pt-4 pr-8 mt-8'>We have sent you a 4 digit verification code to your email.Please check your email and enter below.</div>
    <input value={otps} required onChange={(e)=>{setotps(e.target.value)}} className=' bg-[#6da570a4] ml-8 w-5/6 rounded-3xl h-10 p-4 mt-8 text-black placeholder:text-black md:w-5/6' type='text' placeholder='Enter your OTP here!!' />
    <div className='md:flex md:w-2/3 md:justify-center) md:ml-10'><Link  to={dashboard}>
   <button className='w-4/6 bg-blue-800 border-none rounded-3xl h-10 ml-20 text-white mt-8 md:w-96 hover:bg-blue-500'> Verify   </button>
   </Link>
    </div>
</div>
    </div>
  )
}

export default Otp