import React, { useEffect, useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Data from "../../data/Data";
import appContext from "../../AppContext/appContext";
import { v4 as uuidv4 } from "uuid";
import fetch_teacher_group from "../message/get_groups";
import AssignmentContext from "../../AssignmentContext/AssignmentContext";

const Dashboard = () => {
  const { initilize_socket } = useContext(appContext);
  const {initilize_student_default_detail} = useContext(AssignmentContext)
  const socket = useRef(null);
  const navigate = useNavigate();
  const current_user_uuid_ref = useRef(null);
  const [group_list, setGroup_list] = useState([]);
  const [dashboard_assignment_content , setDashboardAssignment] = useState([])
  const update_Group_List = (lists) => {
    setGroup_list([]);
    for (let i = 0; i < lists.length; i++) {
      setGroup_list((prevData) => [...prevData, lists[i]]);
    }
  };
  const set_dashboard_assignment_content = (assignment_lists) => {
    assignment_lists.forEach((assignment)=>{
      setDashboardAssignment(prevData => ([...prevData , assignment]))
    })
  }
  useEffect(() => {
    current_user_uuid_ref.current = uuidv4();
    localStorage.setItem("current_id", current_user_uuid_ref.current);

    const d = async () => {
      setDashboardAssignment([])
      const studentMessageGroup = await fetch_teacher_group();
      const dashboard_data = await initilize_student_default_detail(true)
      set_dashboard_assignment_content(dashboard_data)

      console.log("student dashboard data " , dashboard_data)
      update_Group_List(studentMessageGroup);
      socket.current = await initilize_socket();
      socket.current.on("connect", () => {
        console.log("connect from student dashboard");
      });
    };

    d();

    if (localStorage.getItem("Campus_Token") === null) {
      navigate("/");
    }
  }, []);

  return (
    <div className="  pl-4 mt-8 ">
      <div className="text-3xl font-semibold text-gray-600 ml-8 mb-2 ">
        {" "}
        Recent Assignment
      </div>
      {/* `/students/assignmentsstds/details/${item.id}` */}
      <div className="bg-gray-400 h-px  mb-6 ml-8" />
      <div className="flex flex-wrap gap-8   mb-12 ml-8 ">
      {/* bg-[#FAFAFA] */}
        {dashboard_assignment_content &&
          dashboard_assignment_content.map((item, i) => (
            <Link
              to={`/students/assignmentsstds/details/${item._id}`}
              key={i}
              className="bg-[#FAFAFA] w-[250px]  flex flex-col justify-between -z-1 cursor-pointer hover:scale-105  rounded-lg  p-4 shadow-gray-400 shadow-md"
            >
              <div className="relative flex justify-center text-[18px] text-[#435585] font-bold w-[100%]">
                <span>{item.subject}</span>
                <span className="h-4 w-4 rounded-full bg-green-500"></span>
              </div>

              <div className="  p-4 rounded-lg">
                <div className="flex gap-2">
                  <div>
                    <Icon
                      className=" h-32 w-44 text-[#d2691e]"
                      icon="bx:file"
                    />
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
                  <div className="text-white font-bold">{item.owner.t_name}</div>
                </div>
              </div>
            </Link>
          ))}
      </div>

      <div className="text-3xl font-semibold text-gray-600 ml-8 mb-2 mt-8">
        Messages
      </div>
      <div className="bg-gray-400 h-px mb-6 ml-8" />
      <div className="flex flex-wrap gap-8 ml-8 mt-4 w-[100%]">
        {group_list[0] &&
          group_list.map((subj, i) => {
            return (
              <Link
                to={`/students/messagestds/chatbox/${subj.subject}`}
                key={i}
              >
                <div>
                  <div className=" border-2  px-4 py-2 text-gray-600 h-32 w-48 justify-center flex items-center font-bold text-xl rounded-lg shadow-gray-200 shadow-lg hover:border-2 hover:border-[#d2691e] hover:scale-105 hover:text-black cursor-pointer">
                    {subj.subject}
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
