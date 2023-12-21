import React from 'react'
import db from "../../data/subject_db.json"
const Subjects = () => {
  //console.log(Object.keys(db))
  // Object.keys(db).map(items=>{
  //    db[items].map(subj=>
  //     { console.log(subj)
  //  }
  //      )
  //  })
  return (
    
      <div className='flex flex-wrap gap-6 justify-center mt-40 w-[80%]'>
    {
     
    db["Sem_1"].map((subj,i)=>
     {
      return(
        <div key={i}>
          
          <div className=' border-2  px-4 py-2 text-gray-600 h-52 w-52 justify-center flex items-center font-bold text-xl rounded-lg shadow-gray-200 shadow-lg hover:border-2 hover:border-[#d2691e] hover:scale-105 hover:text-black cursor-pointer'>{subj}</div>
          </div>
      )
    }
      )
  }
     
      </div>
  
  )
}



export default Subjects