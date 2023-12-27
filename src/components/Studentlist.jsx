import React from 'react'
import { useState } from 'react';
const Studentlist = () => {

    const [students, setStudents] = useState([
        { id: 1, name: 'Ram ' },
        { id: 2, name: 'Shyam ',  },
        { id: 3, name: 'Hari ',  },
        
      ]);
    
      return (
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-4 ml-4">Student List</h1>
          <div className=" flex flex-col w-[30%] gap-4">
            {students.map((student) => (
              <div
                key={student.id}
                className="bg-white p-4 border border-gray-300 shadow-md rounded-md ml-4"
              >
                <h2 className="text-lg font-semibold mb-2">{student.name}</h2>
                
              </div>
            ))}
          </div>
        </div>
      );
            }


export default Studentlist