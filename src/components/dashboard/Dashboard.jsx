import React, { useEffect , useContext , useRef} from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Data from '../../data/Data';
import db from "../../data/subject_db.json";
import appContext from '../../AppContext/appContext';
import {v4 as uuidv4} from "uuid"

const Dashboard = () => {
  const {initilize_socket} = useContext(appContext)
  const socket = useRef(null)
  const navigate =useNavigate();
  const current_user_uuid_ref = useRef(null)
  
  useEffect(()=>{
    current_user_uuid_ref.current = uuidv4()
    localStorage.setItem("current_id" , current_user_uuid_ref.current)
    const d = async () =>{
      socket.current = await initilize_socket()
      socket.current.on("connect" , () => {
        console.log("connect from student dashboard")
      })
    }
    d()
  if(localStorage.getItem("Campus_Token")===null){
    navigate("/");
  }
  },[])
  return (
    <div className='  pl-4 mt-8 '>
      
      <div className='text-3xl font-semibold text-gray-600 ml-8 mb-2 '> Recent Assignment</div>
      <div className='bg-gray-400 h-px mb-6 ml-8'/>
      <div className='flex flex-wrap gap-10 justify-evenly mb-12 ml-10 '>
        {Data.map((item , i) => <div key={i} className='bg-[#FAFAFA] cursor-pointer hover:scale-105 w-[22%] rounded-lg  p-4 shadow-gray-400 shadow-md'>
          <Link to={`/students/assignmentsstds/details/${item.id}`}><button className='text-[18px] text-[#435585] font-bold '>{item.Subject}</button></Link>
          <div className='  p-4 rounded-lg'>
            <div className='flex gap-2'>
              <div>
              <Icon className='h-32 w-44 text-[#d2691e]' icon="bx:file" />
              </div>
       
            </div>


          
             

           
          </div>
         

          

          <div className='mt-2 flex gap-4'>
            <div className=' h-10 w-14 rounded-full bg-[#008080] flex justify-center items-center'><Icon className="  text-xl " icon="mingcute:user-2-fill" color='white' /></div>
            <div className='flex gap-2 bg-[#008080] rounded-lg w-full ml-0.5 justify-center items-center'>
             
              <div className='text-white font-bold'>{item.Assignment_by}</div>
            </div>
          </div>

        </div>)
        }
      </div>
      
      <div className='text-3xl font-semibold text-gray-600 ml-8 mb-2 mt-8'>Messages</div>
      <div className='bg-gray-400 h-px mb-6 ml-8'/>
      <div className='flex flex-wrap gap-8 ml-8 mt-4 w-[100%]'>
    {
     
    db["Sem_1"].map((subj,i)=>
     {
    
      return(
        
        <Link  to={`/students/messagestds/chatbox/${i}`} key={i}> 
        <div >
          
          <div className=' border-2  px-4 py-2 text-gray-600 h-32 w-48 justify-center flex items-center font-bold text-xl rounded-lg shadow-gray-200 shadow-lg hover:border-2 hover:border-[#d2691e] hover:scale-105 hover:text-black cursor-pointer'>{subj}</div>
          </div>
          </Link>
      )
      
    }
      )
  }
     
      </div>

    </div>
  )
}

export default Dashboard