import React from 'react'
import { useContext } from 'react'
import AssignmentContext from '../../AssignmentContext/AssignmentContext'
import { Popover } from '@headlessui/react'
import { useState } from 'react'
const Teacherassignments = () => {
 const {data,addAssignment} = useContext(AssignmentContext)
 

  const [newAssignment, setNewAssignment] = useState({
    title: '',
    AssignmentType:'',
    description: '',
    deadline: '',
    subject: '',
  });
  
 



    const handleSubmit = (e) => {
      e.preventDefault();
      
    addAssignment(newAssignment);
  
    
      setNewAssignment({
        title: '',
        AssignmentType:'',
        description: '',
        deadline: '',
        subject: '',
      });

 }
 
  return (
    
    <div className=' pt-8 pl-2 w-screen relative'>
     

      <Popover className="relative">
     
     <>
       
       <Popover.Button >
       
       <button className='absolute right-8 border-2 rounded-xl p-2 font-semibold shadow-lg shadow-slate-300 hover:border-black hover:border-2 hover:-translate-y-0.5 '>Create Assignment</button>
       </Popover.Button>
       <Popover.Panel className="absolute right-4 mt-10 z-10  w-[97%] shadow-sm rounded-md shadow-black bg-blue-50 h-[calc(100vh-14rem)]">

<div className='  px-2 py-3  text-sm'>
       <form onSubmit={handleSubmit}>
        <div className='mb-8'>
      <label className='font-semibold'>
        Title:</label>
        <input className='h-8 rounded-lg ml-2 w-[75%]' type="text"  value={newAssignment.title}onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}/>
        </div>

        <div className='mb-8'>
      <label className='font-semibold'>
        Assignment-type:</label>
        <input className='h-8 rounded-lg ml-2 w-[75%]' type="text"  value={newAssignment.AssignmentType}onChange={(e) => setNewAssignment({ ...newAssignment, AssignmentType: e.target.value })}/>
        </div>
        
        <div className='mb-8'>
      <label className='font-semibold'>
        Description: </label>
        <textarea className='h-48 rounded-lg ml-2 w-[70%]' value={newAssignment.description}  onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })} />
        </div>
        <div className='mb-8'>
      <label className='font-semibold'>
        Deadline: </label>
        <input className='h-8 rounded-lg ml-2 w-[70%]' type="date"  value={newAssignment.deadline} onChange={(e) => setNewAssignment({ ...newAssignment, deadline: e.target.value })} />
        </div>
     
    
      
      <button className="border-2 p-2 ml-[30%] font-semibold bg-indigo-950 text-white rounded-2xl hover:-translate-y-0.5" type="submit">Add Assignment</button>
    </form>
    </div>
   
       </Popover.Panel>
      </>
 
 </Popover>



     <div className='flex flex-wrap gap-8 mt-16 ml-8 '>
      {
        data.map((item,i)=>(
          <div className='border-2 w-[35%] p-2' key={i}>
           
         <div > <span className='font-semibold text-lg pb-2'>Title:</span > {item.title}</div>
         <div> <span className='font-semibold text-lg pb-2'>Assignment-type:</span>{item.AssignmentType}</div>
         <div><span className='font-semibold text-lg pb-2'>Deadline:</span> {item.deadline}</div>
          <div> <span className='font-semibold text-lg pb-2'>Description:</span>{item.description}</div>
                    </div>
        
         
        )
        
        )
        }
        </div>
    </div>
   
  )

}
export default Teacherassignments