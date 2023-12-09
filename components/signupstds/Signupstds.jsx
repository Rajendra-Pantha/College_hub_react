
import React, { useState } from'react'

import { Link } from 'react-router-dom'

import { Icon } from '@iconify/react';
const Signupstds = ({otp,users,logins}) => {
  const[id,setId]=useState("");
  const[username,setUsername]=useState("");
  const[pass,setpass]=useState("");
  const[conpass,setconpass]=useState("");

//   const[entries,setEntries]=useState({
//     id:"",
//     username:"",
//     password:"",
//     conpassword:""
//   });
//  function handleChange(e){
//  const newObj={...entries,[e.target.name]: e.target.value}
//  setEntries(newObj)

//  }
  return (

    <div className='flex bg-[#859cf176] h-[calc(100vh-7rem)] justify-center items-center md:h-screen md:w-2/3' >
        <div>
            <div className='font-semibold text-3xl  mb-5 '>Sign up</div>
           
            <form className='text-gray-400 '>
              <div>
            <label className='block mb-2 '>{users} ID</label>
            <span className='text-blue-700 border-b-2  border-gray-400 md:pb-2.5 text-sm md:text-sm pb-2.5 '>  <Icon  className='inline'  icon="bx:id-card" /> </span> <input 
             className=' placeholder:text-blue-700 mb-4 border-b-2 border-gray-400 px-3 py-2 bg-transparent   focus:outline-none focus:border-gray-400 w-96' 
             value={id}
             type='text'
             placeholder="Enter your student ID"
             onChange={(e)=>{setId(e.target.value)}}/>
          </div>
            <div>
            <label className='block mb-2' >Username</label>
            <span className='text-blue-700 border-b-2  border-gray-400 md:pb-2.5 text-sm md:text-sm pb-2.5 '><Icon className='inline' icon="ri:user-line" /> </span>    <input 
            className=' mb-4 placeholder:text-blue-700 border-b-2 border-gray-400 px-3 py-2 bg-transparent   focus:outline-none focus:border-gray-400 w-96' 
            value={username}
            type='text' 
            placeholder="Enter your username"
            onChange={(e)=>{setUsername(e.target.value)}}/>
            </div>
            <label className='block mb-2'>Password</label>
            <span className='text-blue-700 border-b-2  border-gray-400 md:pb-2.5 text-sm md:text-sm pb-2.5 '> <Icon className='inline' icon="material-symbols:lock-outline" /> </span>   <input 
            className=' mb-4 placeholder:text-blue-700 border-b-2 border-gray-400 px-3 py-2 bg-transparent   focus:outline-none focus:border-gray-400 w-96'  
            value={pass}
            type='password' 
            placeholder="Enter your password"
            onChange={(e)=>{setpass(e.target.value)}}/>
            <div>
            <label className='block mb-2'>Conform Password</label>
            <span className='text-blue-700 border-b-2  border-gray-400 md:pb-2.5 text-sm md:text-sm pb-2.5 '> <Icon className='inline' icon="material-symbols:lock-outline" /> </span>  <input 
            className=' placeholder:text-blue-700 mb-4 border-b-2 border-gray-400 px-3 py-2 bg-transparent   focus:outline-none focus:border-gray-400 w-96'  
            value={conpass}
            type='password'
            placeholder="Enter your Conform password"
            onChange={(e)=>{setconpass(e.target.value)}}/>
            </div>
          <Link to={otp}> <button className='w-96 bg-blue-800 border-none rounded-3xl h-12 text-white mt-8 hover:bg-blue-500'>Register</button></Link>
            </form>
            <div className='mt-4 w-80 pl-6  font-medium text-left'> If you already have an account register You can <Link to={logins} className='text-blue-700 font-bold '>Login here !</Link></div>
        </div>
    </div>
  )
}

export default Signupstds
