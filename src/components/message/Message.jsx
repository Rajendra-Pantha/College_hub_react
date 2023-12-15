import React from 'react'
import db from "../../data/subject_db.json"
import { Link } from 'react-router-dom';
const Message = () => {
  return (
<div className='  ml-3 flex  mt-48'>
  <div className='flex flex-wrap gap-8 h-24 justify-center  '>
    {db['Sem_1'].map((subj,i)=>{
      return(
   <Link to={`chatbox/${i}`}> 
    <div  key={i} className='border-2  px-4 py-2 text-gray-600  w-52 h-24 justify-center flex items-center font-bold text-xl rounded-lg shadow-gray-200 shadow-lg hover:border-2 hover:border-black hover:scale-105 hover:text-black cursor-pointer'>{subj}</div>
   </Link>   
      )
    }
    )
    }
  </div>
</div>




  )
}

export default Message