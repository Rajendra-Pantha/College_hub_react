import React, { useContext } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useState } from 'react';

import { Icon } from '@iconify/react';
import Logins from './Loginfetch';
import OtpContext from '../../otpcontext/OtpContext';

const Login = ({signup , users}) => {

 const[username,setUsername]=useState("");
 const[password,setPassword]=useState("");
 const{setRegistration}=useContext(OtpContext);
const navigate = useNavigate();

 const handleForm=async(e)=>{
  e.preventDefault();
  setRegistration(true)
  
  if(username===""){
    console.error("Username cannot be empty");
    return;
  }
  if(password===""){
    console.error("Password cannot be empty");
    return;
  }

  
  if(users==="Student"){
   const isLogincheck = await Logins({username,password},users)
   if(isLogincheck===true){
    navigate(`/otpverificationstds/${2}`)
   }
   else{
    alert("Username or Password error")
    return;
   }
  }
  else{
   let isLogincheck=await Logins({username,password},users)
   if(isLogincheck===true){
    navigate(`/otpverificationteacher/${2}`)
   }
   else{
    alert("Username or Password error")
    return;
   }
  }


 };

    return (
        <div className='flex bg-[#859cf176] h-[calc(100vh-7rem)] justify-center items-center md:h-screen md:w-2/3' >
            <div>
                <div className='font-semibold text-3xl  mb-5 '>Log In</div>
               
                <form onSubmit={handleForm} className='text-blue-700  '>
                <div>
               <label className='block mb-2' >Username</label>
               <span className='text-gray-600 border-b-2  border-gray-500 md:pb-2.5 text-md pb-2.5 '><Icon className='inline' icon="ri:user-line" /> </span> <input value={username} onChange={(e)=>{setUsername(e.target.value)}} className='text-black ml-0 placeholder:px-0 mb-4 placeholder:text-gray-400 border-b-2 border-gray-500 px-3 py-2 bg-transparent   focus:outline-none focus:border-gray-500 w-96' type='text' placeholder="Enter your username"/>
               </div>

               <div>
                <label className='block mb-2'>Password</label>
              <span className='text-gray-600 border-b-2  border-gray-500 md:pb-2.5 text-md pb-2.5 '><Icon className='inline' icon="material-symbols:lock-outline" />  </span> <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className='text-black mb-4 placeholder:text-gray-400 border-b-2 border-gray-500 px-3 py-2 bg-transparent   focus:outline-none focus:border-gray-500 w-96'  type='password' 
                placeholder="Enter your password"/>
                </div>
              <button type='submit' className='w-96 bg-blue-800 border-none rounded-3xl h-12 text-white mt-8 hover:bg-blue-500'>Login</button>
                </form>
                <div className='mt-4 w-80 pl-6  font-medium text-left'> If you haven’t create an account  <Link to={signup} className='text-blue-700 font-bold '>Sign Up here !</Link></div>
            </div>
        </div>
      )
    }


export default Login