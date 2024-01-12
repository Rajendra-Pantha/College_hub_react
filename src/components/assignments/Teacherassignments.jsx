import React, { useEffect } from "react";
import { useContext, useRef } from "react";
import AssignmentContext from "../../AssignmentContext/AssignmentContext";
import { Popover } from "@headlessui/react";
import { useState } from "react";
import { Icon } from "@iconify/react";

import { Link, useNavigate } from "react-router-dom";
import createAssignment from "./Create_assignment";

const Teacherassignments = () => {
  const { initilize_teacher_default_detail } = useContext(AssignmentContext);
  const [assignment_list, setAssignmentList] = useState([]);

  const assignment_ref = useRef(null);
  const teachers = useRef(null)
  assignment_ref.current = {
    title: "",
    description: "",
    deadline: "",
    subject: "invalid",
  };
  // const [teacher_subjects , setTeacherSubjects] = useState([])
  const teacher_subjects = useRef(null);
  const popoverButtonRef = useRef(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Campus_Token") === null) {
      navigate("/");
    }
    const fetch_teacher_subjects = async () => {
      const { data, teacher } = await initilize_teacher_default_detail(false);
      console.log("got subject teaceheer ", teacher);
      teachers.current = teacher.t_name

      setAssignmentList([]);
      for (let i = 0; i < data.length; i++) {
        setAssignmentList((prevData) => [...prevData, data[i]]);
      }
      
      teacher_subjects.current = teacher.subject;
      console.log("chalyoo ", teacher_subjects.current);

    };
    fetch_teacher_subjects();
  }, []);

  const handleBg = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (assignment_ref.current.subject === "invalid") {
      alert("Please select valid subject");
      return;
    } else {
      // addAssignment(assignment_ref.current);

      createAssignment(assignment_ref.current);

      // setNewAssignment({
      //   //   id:"",
      //   title: "",
      //   //  AssignmentType: "",
      //   description: "",
      //   deadline: "",
      //   subject: "",
      // });
    }

    popoverButtonRef.current.click();
  };

  const handle_input_change = (e) => {
    assignment_ref.current = {
      ...assignment_ref.current,
      [e.target.name]: e.target.value,
    };
    // console.log(e.target.value)
    //   setNewAssignment({...newAssignment,subject: e.target.value})
    //   console.log("the chagned data is" , newAssignment)
  };
  return (
    <div className=" mt-2 pl-2 w-screen relative">
      {isPopoverOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-10"
          onClick={() => setIsPopoverOpen(false)}
        />
      )}
      <Popover className="relative">
        <>
          <Popover.Button onClick={handleBg} ref={popoverButtonRef}>

            

            <div
              className='flex gap-2 justify-center absolute -z-1  border-2 rounded-xl py-4 px-6 font-semibold shadow-lg shadow-slate-300 hover:bg-[#0066cc] bg-[#000080] text-white ml-9 right-8 mb-2 '>

              <Icon icon="gala:add" width="22" /> <div>Create Assignment</div>
            </div>
           
          </Popover.Button>
        
          <Popover.Panel
            className="absolute  mt-[4%] ml-[15%] z-10  p-4  w-[40vw] shadow-sm rounded-md shadow-black bg-[#dcdcdc] "
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            }}
          >
            <div className="  px-2 py-3  text-sm">
              <form onSubmit={handleSubmit}>
                <div className="flex mb-2 mt-6 ml-5">
                  <label className=" text-gray-700  font-semibold mb-2">
                    Subjects:
                  </label>
                  <select
                    className=" ml-16 text-lg shadow  border rounded w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                    name="subject"
                    onChange={(e) => {
                      handle_input_change(e);
                    }}                  >
                    <option value="invalid">Select one subject</option>
                    {teacher_subjects.current &&
                      teacher_subjects.current.map((sub) => {
                        return (
                          <option key={sub} value={sub}>
                            {sub}
                          </option>
                        );
                      })}
                    {/* <option></option>
                    <option>Math</option>
                    <option>c++</option>
                    <option>english</option> */}
                  </select>
                  {/* <div>
                    <label className=" ml-8  text-gray-700  font-semibold mb-2">Id :</label>
                  <input
                    className="  ml-4 text-lg shadow  border rounded w-[20%]  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={newAssignment.id}
                    onChange={(e) =>
                      setNewAssignment({
                        ...newAssignment,
                        id:parseInt(e.target.value) ,
                      })
                    }
                  /></div> */}
                </div>

                <div className="mb-2 mt-3 ml-4">
                  <label className=" text-gray-700  font-semibold mb-2">
                    Title:
                  </label>
                  <input
                    className="ml-24 text-lg shadow appearance-none border rounded w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="title"
                    onChange={(e) => {
                      handle_input_change(e);
                    }}
                  />
                  {/* onChange={(e) =>
                      setNewAssignment({
                        ...newAssignment,
                        title: e.target.value,
                      })
                    } */}
                </div>

                {/* <div className="mb-2 mt-3 ml-4">
                  <label className=" text-gray-700  font-semibold mb-2">
                    Assignment-type:
                  </label>
                  <input
                    className="ml-4 text-lg shadow appearance-none border rounded w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={newAssignment.AssignmentType}
                    onChange={(e) =>
                      setNewAssignment({
                        ...newAssignment,
                        AssignmentType: e.target.value,
                      })
                    }
                  />
                </div> */}

                <div className="mb-2 mt-3 ml-4">
                  <label className=" text-gray-700  font-semibold mb-2">
                    Description:
                  </label>
                  <textarea
                    className="ml-12 text-lg shadow appearance-none border rounded w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="description"
                    onChange={(e) => {
                      handle_input_change(e);
                    }}
                  />
                  {/* onChange={(e) =>
                      setNewAssignment({
                        ...newAssignment,
                        description: e.target.value,
                      })
                    } */}
                </div>
                <div className="mb-2 mt-3 ml-4">
                  <label className=" text-gray-700  font-semibold mb-2">
                    Deadline :
                  </label>
                  <input
                    className="ml-16 text-lg shadow appearance-none border rounded w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="date"
                    name="deadline"
                    onChange={(e) => {
                      handle_input_change(e);
                    }}
                  />
                  {/* onChange={(e) =>
                      setNewAssignment({
                        ...newAssignment,
                        deadline: e.target.value,
                      })
                    } */}
                </div>

                <button
                  id="btn"
                  className="border-2 px-4 py-2 ml-[40%] mt-3 font-semibold border-none hover:bg-[#0066cc] bg-[#000080] text-white rounded-2xl "
                  type="submit"
                  // disabled={isAddButtonDisabled}
                >
                  Add Assignment
                </button>
              </form>
            </div>
          </Popover.Panel>
        </>
      </Popover>

      <div className="flex flex-wrap gap-8 mt-20 ml-8  ">
        {assignment_list && assignment_list.reverse().map((item , i) => (
          <Link
            to={`popup/${item._id}`}
            className="bg-[#FAFAFA] flex flex-col justify-evenly -z-1 cursor-pointer hover:scale-105 w-[22%] rounded-lg  p-4 shadow-gray-400 shadow-md"
            key={i}
          >
            <div className=" text-[18px] text-[#435585] font-bold ">
              {item.subject}
            </div>

            <div className="  p-4 rounded-lg">
              <div className="flex gap-2">
                <div>
                  <Icon className=" h-32 w-44 text-[#d2691e]" icon="bx:file" />
                </div>
              </div>
            </div>

            <div className="mt-2 flex gap-4">
              <div className=" h-10 w-14 rounded-full bg-[#008080] flex justify-center items-center">
                <Icon
                  className="  text-xl "
                  icon="mingcute:user-2-fill"
                  color="white"
                />
              </div>

              <div className="flex gap-2 bg-[#008080] rounded-lg w-full ml-0.5 justify-center items-center">
                <div className="text-white font-bold">{teachers.current}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    
  );
};

export default Teacherassignments;
