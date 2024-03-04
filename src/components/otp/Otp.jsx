import React, { useEffect } from 'react'
import {  useNavigate ,Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Otpfun from './Otpfetch'
import { useContext } from 'react'
import OtpContext from '../../otpcontext/OtpContext'

const Otp = ({users}) => {
  const{a}=useParams();
  const[otps,setotps]=useState('');
  const navigate=useNavigate();
 
  const{isLogin,setIslogin,isredirecedfromregistration}=useContext(OtpContext);
  useEffect(()=>{
    if(isredirecedfromregistration == false){
      
      navigate("/")
    }
    // console.log(isLogin)
  
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
   if(otps===""){
    console.error("Otp cannot be null")
    return;
   }
   if(otps.length !== 5){
    console.error("otp length must be of 5 digit ")
    return;
   }


   if(users==="Student"){
    if(a==1){
      const is_verified =await Otpfun(otps,"register");
      console.log(is_verified)
      if(is_verified){
        navigate("/students/dashboard")
      }else{
        alert("Otp Dosenot matched!!!")
        navigate(-1)
      }
     }
     else{
      const is_verified =await Otpfun(otps,"login");;
      if(is_verified){
        navigate("/students/dashboard")
      }else{
        alert("Otp Dosenot matched!!!")
        navigate(-1)
      }
      
     }
    
   }
   else{
    if(a==1){
      const is_verified =await Otpfun(otps,"register");
      if(is_verified){
        navigate("/teacher/dashboard")
      }else{
        alert("Otp Dosenot matched!!!")
        navigate(-1)
      }
     }
     else{
      const is_verified =await Otpfun(otps,"login");;
      if(is_verified){
        navigate("/teacher/dashboard")
      }else{
        alert("Otp Dosenot matched!!!")
        navigate(-1)
      }
      
     }
   }
  //  if(a==1){
  //   Otpfun(otps,"register");
  //  }
  //  else{
  //   Otpfun(otps,"login");
  //  }
   
    // const concatenatedValue = `${otps.input1} ${otps.input2} ${otps.input3} ${otps.input4} ${otps.input5}`;
    // console.log( concatenatedValue);
   
  };
  if(isredirecedfromregistration===true){return (
    <div className='w-screen bg-[#859cf176] h-[calc(100vh-7rem)]  flex justify-center items-center md:h-screen md:w-2/3'>
<div className='w-full h-full flex justify-center items-center flex-col' >
    <div className='text-3xl font-bold pl-8 '>OTP Verification</div>
    <div className='text-lg text-gray-600 md:w-[70%] pl-8 pt-4 pr-8 mt-8'>We have sent you a 4 digit verification code to your email.Please check your email and enter below.</div>
   <form className='w-full max-w-md mt-8 flex justify-center flex-col' onSubmit={handleSubmit}>
   <div className='sw-full'>
   <input value={otps}  onChange={(e)=>{setotps(e.target.value)}} className='w-[100%] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-gray-500 border-b-2 bg-transparent h-12 text-black placeholder:pl-4  placeholder:text-xl focus:outline-none' type='number' placeholder="Enter otp here..." />

   {/* <input value={otps.input2} required onChange={(e)=>{setotps({...otps,input2:e.target.value})}} className='w-12 border-gray-500 border-b-2 bg-transparent h-12 text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:text-center  focus:outline-none' type='number' placeholder="2" /> */}

   {/* <input value={otps.input3} required onChange={(e)=>{setotps({...otps,input3:e.target.value})}} className='w-12 border-gray-500 border-b-2 bg-transparent h-12 text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:text-center  focus:outline-none' type='number' placeholder="3" />

    <input value={otps.input4} required onChange={(e)=>{setotps({...otps,input4:e.target.value})}} className='w-12 border-gray-500 border-b-2 bg-transparent h-12 text-black  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:text-center  focus:outline-none' type='number' placeholder="4" />

  <input value={otps.input5} required onChange={(e)=>{setotps({...otps,input5:e.target.value})}} className='w-12 border-gray-500 border-b-2 bg-transparent h-12 text-black  placeholder:text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none' type='number' placeholder="5" />*/}
    </div> 

    <div className='w-full justify-center flex'>
   <button 
   type="submit" 
   className='w-[30%]  bg-blue-800 border-none rounded-3xl py-4 px-6 flex justify-center items-center text-white mt-8 hover:bg-blue-500 font-semibold shadow-lg'> Verify   </button>
   
    </div>
    </form>
</div>
    </div>
  )}
  // else{
   
  //     return <Navigate to={"/"} />;
  //   }
  
  
}

export default Otp