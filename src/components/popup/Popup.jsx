import React from 'react'
import { useState , useContext } from 'react';
import { useParams } from 'react-router-dom';
import AssignmentContext from '../../AssignmentContext/AssignmentContext';

const Popup = () => {
  const {data}= useContext(AssignmentContext);
  // console.log(data)
    const { id } = useParams();
    const selectedAssignment = data.find((item) => item.id === parseInt(id, 10));
    const [submittedStudents, setSubmittedStudents] = useState([
      'Student 1',
      'Student 2',
      'Student 3',
    ]);
    return (
      <div className='w-screen flex justify-center '>
        <div className='w-[80%] '>
          
        <div style={{
      boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    }} >
       
         
        <div >
        <div className=' p-4   mt-4 flex flex-col gap-4'>
        <h2 className='text-[#3490dc] border-b-2 mb-3 pb-3 border-[#3490dc] font-semibold text-xl'> title</h2>
        
        {selectedAssignment && (
                <>
                  <p>Assignment Type: {selectedAssignment.AssignmentType}</p>
                  <p>Deadline: {selectedAssignment.deadline}</p>
                  <p>Description: {selectedAssignment.description}</p>
                </>
              )}
           
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