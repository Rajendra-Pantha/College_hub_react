import React from 'react'
import { useState } from 'react';
const Popup = ({item  }) => {
    const [submittedStudents, setSubmittedStudents] = useState([
      'Student 1',
      'Student 2',
      'Student 3',
    ]);
    return (
      <div className='popup-container fixed top-[70%] left-[100%] z-10'>
        <div>
          
        <div className="overflow-auto absolute flex justify-between right-20 z-10 -mt-96 w-[calc(100vw-12rem)]  rounded-md  bg-[#f7f3f3] h-[calc(100vh-14rem)] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200" style={{
      boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    }} >
       
         
        <div >
        <div className=' p-4   mt-4 flex flex-col gap-4'>
        <h2 className='text-[#3490dc] border-b-2 mb-3 pb-3 border-[#3490dc] font-semibold text-xl'> {item.title}</h2>
          <p>Assignment Type: {item.AssignmentType}</p>
          <p>Deadline: {item.deadline}</p>
          <p>Description: {item.description}</p>
          </div>
          <div className='m-4 overflow-auto'>
          <h3 className="text-[#3490dc] border-b-2 mb-3 pb-3 border-[#3490dc] font-semibold text-xl  ">
    Submitted Students:
  </h3>
  <ul className="list-none p-0  ">
    {submittedStudents.map((student, index) => (
      <li
        key={index}
        className="mb-5 p-5 w-[30%] bg-gray-200 rounded-md"
      >
        {student}
      </li>
    ))}
  </ul>
  </div>
          </div>
          </div>
    
        </div >
        </div>
     
    );
  };

export default Popup