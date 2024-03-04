
import React, { useContext, useState , useEffect } from'react'
import Registration from './Sinupfetch';
import { Link,useNavigate } from 'react-router-dom'

import { Icon } from '@iconify/react';
import OtpContext from '../../otpcontext/OtpContext';
const Signupstds = ({users,logins}) => {

const navigate = useNavigate();
const[entries,setEntries]=useState({
  id:"",
  username:"",
  password:"",
  conpassword:""
});

const{isLogin,setIslogin,setRegistration}=useContext(OtpContext)


 const handleSubmit= async(e)=>{
e.preventDefault();
setRegistration(true)
console.log(entries)
setIslogin(false)
const{id,username,password,conpassword}=entries
setIslogin(false)
const validstudentregex=/^S\d{5}$/;
const validteacherregex=/^T\d{5}$/;

let IdRegex
if (users==="Student"){
   IdRegex = validstudentregex;


}
else{
  IdRegex = validteacherregex;

console.log(users)
}

  if (!IdRegex.test(id)) {
    console.error('Invalid Id format');
    return;
  }
  if(username==="" || username.length<3){
    console.error("Username cannot be less than 3")
    return;
  }
  if(password===""){
    console.error("Password cannnot be empty")
    return;
  }
if(password!==conpassword){
  console.error("Password and Conform Password are not match")
  return;
}
let Sid,Tid
  if(users==="Student"){
    Sid=id
   let isRegisterCheck= await Registration({Sid,username,password},users);
   if(isRegisterCheck){
    navigate(`/otpverificationstds/${1}`)
   }
   else{
    alert("Cannot register")
    return;
   }
  }
  else{
    Tid=id
   let isRegisterCheck = await Registration({Tid,username,password},users);
   if(isRegisterCheck){
    navigate(`/otpverificationteacher/${1}`)
   }
   else{
    alert("Cannot register")
    return;
   }
  }






};
 


 function handleChange(e){
  e.preventDefault()
 const newObj={...entries,[e.target.name]: e.target.value}
 setEntries(newObj)


 }
  return (

    <div className='flex bg-[#859cf176] h-[calc(100vh-7rem)] justify-center items-center md:h-screen md:w-2/3' >
        <div>
            <div className='font-semibold text-3xl  mb-5 '>Sign up</div>
           
            <form onSubmit={handleSubmit} className='text-blue-700 '>
              <div>
            <label className='block mb-2 '>{users} ID</label>
            <span className='text-gray-600 border-b-2  border-gray-500 md:pb-2.5 text-md  pb-2.5 '>  <Icon  className='inline'  icon="bx:id-card" /> </span> <input 
             className='text-black placeholder:text-gray-400 mb-4 border-b-2 border-gray-500 px-3 py-2 bg-transparent   focus:outline-none focus:border-gray-500 w-96' 
             value={entries.id}
             name='id'
             type='text'
             placeholder="Enter your student ID"
             onChange={handleChange}/>
          </div>
            <div>
            <label className='block mb-2' >Username</label>
            <span className='text-gray-600 border-b-2  border-gray-500 md:pb-2.5 text-md  pb-2.5 '><Icon className='inline' icon="ri:user-line" /> </span>    <input 
            className='text-black mb-4 placeholder:text-gray-400 border-b-2 border-gray-500 px-3 py-2 bg-transparent   focus:outline-none focus:border-gray-500 w-96' 
            value={entries.username}
            name='username'
            type='text' 
            placeholder="Enter your username"
            onChange={handleChange}/>
            </div>
            <label className='block mb-2'>Password</label>
            <span className='text-gray-600 border-b-2  border-gray-500 md:pb-2.5 text-md pb-2.5 '> <Icon className='inline' icon="material-symbols:lock-outline" /> </span>   <input 
            className='text-black mb-4 placeholder:text-gray-400 border-b-2 border-gray-500 px-3 py-2 bg-transparent   focus:outline-none focus:border-gray-500 w-96'  
            value={entries.password}
            name='password'
            type='password' 
            placeholder="Enter your password"
            onChange={handleChange}/>
            <div>
            <label className='block mb-2'>Conform Password</label>
            <span className='text-gray-600 border-b-2  border-gray-500 md:pb-2.5 text-md pb-2.5 '> <Icon className='inline' icon="material-symbols:lock-outline" /> </span>  <input name='conpassword'
            className='text-black placeholder:text-gray-400 mb-4 border-b-2 border-gray-500 px-3 py-2 bg-transparent   focus:outline-none focus:border-gray-500 w-96'  
            value={entries.conpassword}
            type='password'
            placeholder="Enter your Conform password"
            onChange={handleChange}/>
            </div>
          <button type='submit' className='w-96 bg-blue-800 border-none rounded-3xl h-12 text-white mt-8 hover:bg-blue-500'>Register</button>
            </form>
            <div className='mt-4 w-80 pl-6  font-medium text-left'> If you already have an account register You can <Link to={logins} className='text-blue-700 font-bold '>Login here !</Link></div>
        </div>
    </div>
  )
}

export default Signupstds
