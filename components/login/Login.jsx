import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import { Icon } from '@iconify/react';


const Login = ({otp,signup}) => {
 const[username,setUsername]=useState("");
 const[password,setPassword]=useState("");
    return (
        <div className='flex bg-[#859cf176] h-[calc(100vh-7rem)] justify-center items-center md:h-screen md:w-2/3' >
            <div>
                <div className='font-semibold text-3xl  mb-5 '>Log In</div>
               
                <form className='text-gray-400  '>
                <div>
               <label className='block mb-2' >Username</label>
               <span className='text-blue-700 border-b-2  border-gray-400 md:pb-2.5 text-sm md:text-sm pb-2.5 '><Icon className='inline' icon="ri:user-line" /> </span> <input value={username} onChange={(e)=>{setUsername(e.target.value)}} className='ml-0 placeholder:px-0 mb-4 placeholder:text-blue-700 border-b-2 border-gray-400 px-3 py-2 bg-transparent   focus:outline-none focus:border-gray-400 w-96' type='text' placeholder="Enter your username"/>
               </div>

               <div>
                <label className='block mb-2'>Password</label>
              <span className='text-blue-700 border-b-2  border-gray-400 md:pb-2.5 text-sm md:text-sm pb-2.5 '><Icon className='inline' icon="material-symbols:lock-outline" />  </span> <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className=' mb-4 placeholder:text-blue-700 border-b-2 border-gray-400 px-3 py-2 bg-transparent   focus:outline-none focus:border-gray-400 w-96'  type='password' 
                placeholder="Enter your password"/>
                </div>
              <Link to={otp}> <button className='w-96 bg-blue-800 border-none rounded-3xl h-12 text-white mt-8 hover:bg-blue-500'>Login</button></Link>
                </form>
                <div className='mt-4 w-80 pl-6  font-medium text-left'> If you haven’t create an account  <Link to={signup} className='text-blue-700 font-bold '>Sign Up here !</Link></div>
            </div>
        </div>
      )
    }


export default Login