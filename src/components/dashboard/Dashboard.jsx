import React from 'react';

import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Data from '../../data/Data';
import db from "../../data/subject_db.json";
const Dashboard = () => {
  return (
    <div className='  pl-4 '>
      <div className='font-bold text-4xl pb-8 pl-8 text-gray-600 '>Recently Uploaded</div>
      <div className='text-3xl font-semibold text-gray-600 ml-8 mb-4 '>Assignment</div>
      <div className='flex flex-wrap gap-8 justify-center mb-4'>
        {Data.map((item) => <div className='bg-[#FAFAFA] cursor-pointer hover:scale-105 w-[22%] rounded-lg  p-4 shadow-gray-400 shadow-md' key={item.id}>
          <Link to={`/students/assignmentsstds/details/${item.id}`}><button className='text-[18px] text-[#435585] font-bold '>{item.Subject}</button></Link>
          <div className='  p-4 rounded-lg'>
            <div className='flex gap-2'>
              <div>
              <Icon className='h-36 w-48 text-[#ccb67f]' icon="bx:file" />
              </div>
       
            </div>


          
             

           
          </div>
         

          

          <div className='mt-2 flex gap-4'>
            <div className=' h-10 w-14 rounded-full bg-[#818FB4] flex justify-center items-center'><Icon className="  text-xl " icon="mingcute:user-2-fill" color='white' /></div>
            <div className='flex gap-2 bg-[#818FB4] rounded-lg w-full ml-0.5 justify-center items-center'>
             
              <div className='text-white font-bold'>{item.Assignment_by}</div>
            </div>
          </div>

        </div>)
        }
      </div>
      <hr className='bg-gray-700 h-px'/>
      <div className='text-3xl font-semibold text-gray-600 ml-8 mb-4 mt-4'>Messages</div>
      
      <div className='flex flex-wrap gap-6 justify-center mt-4 w-[100%]'>
    {
     
    db["Sem_1"].map((subj,i)=>
     {
      return(
        <div key={i}>
          
          <div className=' border-2  px-4 py-2 text-gray-600 h-32 w-48 justify-center flex items-center font-bold text-xl rounded-lg shadow-gray-200 shadow-lg hover:border-2 hover:border-black hover:scale-105 hover:text-black cursor-pointer'>{subj}</div>
          </div>
      )
    }
      )
  }
     
      </div>

    </div>
  )
}

export default Dashboard