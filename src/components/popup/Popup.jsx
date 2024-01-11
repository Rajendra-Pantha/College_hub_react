import React, { useEffect, useRef, useState } from "react";
// import { useState , useContext } from 'react';
import { useParams } from "react-router-dom";
// import AssignmentContext from '../../AssignmentContext/AssignmentContext';
import get_specific_assignment from "./get_specific_assignment.js";
const Popup = () => {
  const { id } = useParams();

  const [assignment, setAssignment] = useState([]);
  const assignment_ref = useRef(null);

  const update_assignment_ref = (data) => {
    setAssignment([...assignment, data]);
  };

  useEffect(() => {
    const load_specific_data = async () => {
      const data = await get_specific_assignment(id);

      update_assignment_ref(data[0]);
    };
    load_specific_data();
  }, []);

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
                <li className="mb-5 p-5  bg-green-400 text-black-500 font-bold rounded-md w-[100%]">
                  Student 1
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
