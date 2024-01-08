import React, { useState,useEffect } from 'react'
import UsernameChange from './Changeusernamefetch';
import { useNavigate } from 'react-router-dom';

const Changeusername = () => {
const navigate = useNavigate();
    const[newUsername,setUsername]=useState({
        username:"",
        
    });
    useEffect(()=>{
        if(localStorage.getItem("Campus_Token")===null){
          navigate("/");
        }
        },[])
    const handleChange=(e)=>{
        setUsername({...newUsername,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        UsernameChange(newUsername)
    }
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h1 className="text-2xl font-bold mb-4">Change Username</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>

      <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-600">
            New Username:
          </label>
          <input
            type="text"
            value={newUsername.username}
            onChange={handleChange}
           
            name="username"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Change Username
        </button>
      </form>
    </div>
  </div>
  )
}

export default Changeusername