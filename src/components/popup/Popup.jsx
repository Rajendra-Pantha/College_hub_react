import React, { useEffect, useRef, useState } from "react";
// import { useState , useContext } from 'react';
import { useParams , useNavigate } from "react-router-dom";
// import AssignmentContext from '../../AssignmentContext/AssignmentContext';
import get_specific_assignment from "./get_specific_assignment.js";
import get_specific_assignment_student_lists from "./get_student_list.js"
const Popup = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [assignment, setAssignment] = useState([]);
  const [student_lists , setStudentList] = useState([])
  const assignment_ref = useRef(null);

  const update_assignment_ref = (data) => {
    setAssignment([...assignment, data]);
  };

  const set_student_list = (data) => {
    data.forEach((list) => {
      setStudentList(prevData => ([...prevData, list]));
    })
  };

  useEffect(() => {
    const load_specific_data = async () => {
      setStudentList([])
      const data = await get_specific_assignment(id);
      const submitted_student_list = await get_specific_assignment_student_lists(id)
      console.log("got here too" , submitted_student_list)

      update_assignment_ref(data[0]);
      set_student_list(submitted_student_list)
    };
    load_specific_data();
  }, []);


  const view_assignment = (e)=>{
    const file_path = e.target.getAttribute("data-file_path")
    // const p = '65a2174dfb459f6e40993eed_65a15f467c6207f832e9389e'
    
    navigate(`/teacher/assignments/student_assignment/${file_path}`)
    
  }

  return (
    <div className="w-screen flex justify-center ">
      <div className="w-[80%] ">
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <div>
            <div className=" p-4   mt-4 flex flex-col gap-4">
              <div>
                {assignment[0] && (
                  <div className="text-[#3490dc] border-b-2 mb-3 pb-3 border-[#3490dc] font-semibold text-[20px]">
                    Title :
                    <span className="text-[16px] ml-4">{assignment[0].title} </span>
                  </div>
                )}
              </div>

              <div>
                {assignment[0] && (
                  <div className="text-[#3490dc] border-b-2 mb-3 pb-3 border-[#3490dc] font-semibold text-[20px]">
                    Description :
                    <span className="text-[16px] ml-4">
                      {assignment[0].description}
                    </span>
                  </div>
                )}
              </div>

              <div>
                {assignment[0] && (
                  <div className="text-[#3490dc] border-b-2 mb-3 pb-3 border-[#3490dc] font-semibold text-[20px]">
                    Deadline :
                    <span className="text-[16px] ml-4">
                      {assignment[0].deadline}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="m-4 overflow-auto">
              <h3 className="text-[#3490dc] border-b-2 mb-3 pb-3 border-[#3490dc] font-semibold text-xl  ">
                Submitted Students
              </h3>
              <ul className="list-none p-0  ">
              {student_lists[0] && (student_lists[0].err) ? 
                <li className="mb-5 text-white p-5 cursor-pointer flex justify-between  bg-teal-800 text-black-500 font-bold rounded-md w-[100%]">
                <span>No One has Submitted yet</span>
                </li>
              :  student_lists.map((students , i) => (
                  <li className="mb-5 text-white p-5 cursor-pointer flex justify-between  bg-teal-800 text-black-500 font-bold rounded-md w-[100%]" key={i} data-file_path = {`${id}_${students.student._id}`} onClick={view_assignment}>
                  <span>{students.student.s_name}</span>
                  <span>{students.submitted_date}</span>
                </li>
                )
              )}
                {/* <li className="mb-5 p-5  bg-green-400 text-black-500 font-bold rounded-md w-[100%]">
                  Student 1
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
