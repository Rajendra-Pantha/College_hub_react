import React, { useEffect } from 'react'
import { useState } from 'react';

import passwordChangefun from './Changepasswordfetch';
import { useNavigate } from 'react-router-dom';
const Changepassword = () => {
    const navigate =useNavigate();
   
    const[passwordDetail,setPasswordDetail]=useState({
        oldpassword:"",
        newpassword:""
    });

    useEffect(()=>{
        if(localStorage.getItem("Campus_Token")===null){
          navigate("/");
        }
        },[])

    const handleChange=(e)=>{
    setPasswordDetail({...passwordDetail,[e.target.name]:e.target.value})
    }
    console.log(passwordDetail)
    const handleSubmit = async(e)=>{
e.preventDefault()
 await passwordChangefun(passwordDetail);
    }
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-lg z-20 w-96 border-stone-200 border-2">
      <h1 className="text-2xl font-bold mb-4">Change Password</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>

      <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-600">
            Old Password:
          </label>
          <input
            type="password"
            value={passwordDetail.oldpassword}
            onChange={handleChange}
           
            name="oldpassword"
            className="mt-1 p-2 w-full border-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-600">
            New Password:
          </label>
          <input
            type="password"
            value={passwordDetail.newpassword}
            onChange={handleChange}
           
            name="newpassword"
            className="mt-1 p-2 w-full border-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
       <div className='flex w-[20rem] justify-center'><button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Change Password
        </button></div> 
      </form>
    </div>
  </div>
  )
}

export default Changepassword