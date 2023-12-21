import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Otp = ({dashboard}) => {
  const[otps,setotps]=useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const concatenatedValue = `${otps.input1} ${otps.input2} ${otps.input3} ${otps.input4} ${otps.input5}`;
    console.log( concatenatedValue);
   
  };
  return (
    <div className='w-screen bg-[#859cf176] h-[calc(100vh-7rem)]  flex justify-center items-center md:h-screen md:w-2/3'>
<div >
    <div className='text-3xl font-bold pl-8 '>OTP Verification</div>
    <div className='text-lg text-gray-600 md:w-[70%] pl-8 pt-4 pr-8 mt-8'>We have sent you a 4 digit verification code to your email.Please check your email and enter below.</div>
   <form onSubmit={handleSubmit}>
   <div className='ml-24 flex  gap-4 text-center'>
   <input value={otps.input1} required onChange={(e)=>{setotps({...otps,input1:e.target.value})}} className='w-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-gray-500 border-b-2 bg-transparent h-12 text-black placeholder:text-center focus:outline-none' type='number' placeholder="1" />

   <input value={otps.input2} required onChange={(e)=>{setotps({...otps,input2:e.target.value})}} className='w-12 border-gray-500 border-b-2 bg-transparent h-12 text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:text-center  focus:outline-none' type='number' placeholder="2" />

   <input value={otps.input3} required onChange={(e)=>{setotps({...otps,input3:e.target.value})}} className='w-12 border-gray-500 border-b-2 bg-transparent h-12 text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:text-center  focus:outline-none' type='number' placeholder="3" />

    <input value={otps.input4} required onChange={(e)=>{setotps({...otps,input4:e.target.value})}} className='w-12 border-gray-500 border-b-2 bg-transparent h-12 text-black  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:text-center  focus:outline-none' type='number' placeholder="4" />

    <input value={otps.input5} required onChange={(e)=>{setotps({...otps,input5:e.target.value})}} className='w-12 border-gray-500 border-b-2 bg-transparent h-12 text-black  placeholder:text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none' type='number' placeholder="5" />
    </div>

    <div className='md:flex md:w-2/3 md:justify-center) md:ml-10'><Link  to={dashboard}>
   <button type="submit" className='md:w-[70%]  bg-blue-800 border-none rounded-3xl py-6 px-8 flex justify-center items-center h-10 md:ml-32 ml-44 text-white mt-8 w-[30%]  hover:bg-blue-500 font-semibold shadow-lg shadow-black-300'> Verify   </button>
   </Link>
    </div>
    </form>
</div>
    </div>
  )
}

export default Otp