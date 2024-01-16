import React, { useContext, useState, useEffect, useRef } from "react";
import Popup from "../popup/Popup";
import AssignmentContext from "../../AssignmentContext/AssignmentContext";
import { Icon } from "@iconify/react";
import db from "../../data/subject_db.json";
import { Link, useNavigate } from "react-router-dom";
// import fetch_assignments from "./Fetch_assignments.js"
import appContext from "../../AppContext/appContext";
import { v4 as uuidv4 } from "uuid";
import fetch_teacher_group from "../message/get_groups.js";


const Teacherdashboard = () => {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { initilize_teacher_default_detail } = useContext(AssignmentContext);
 
  const { initilize_socket } = useContext(appContext);
  const navigate = useNavigate();
  const [assignment_list, setAssignmentList] = useState([]);
  const socket = useRef(null);
  const current_user_uuid_ref = useRef(null);
  const teachers = useRef(null);
  const [teacher_group, setGroupList] = useState([]);

  const update_group_list = (lists) => {
    // console.log("update group list" , lists)  ;
    lists.forEach((list) => {
      setGroupList((prev) => [...prev, list]);
    });
    // for(let i = 0; i < lists.length; i++){
    //   setGroupList(prev => [...prev , lists[i]])
    // }

    console.log("Teacher Group List : ", teacher_group);
  };

  const teacher_group_list = async () => {
    const group_list = await fetch_teacher_group();
    update_group_list(group_list);
  };

  useEffect(() => {
    current_user_uuid_ref.current = uuidv4();
    localStorage.setItem("current_id", current_user_uuid_ref.current);

    teacher_group_list();
    setAssignmentList([])
    setGroupList([])

    const d = async () => {
      const { data, teacher } = await initilize_teacher_default_detail(true);

      teachers.current = teacher.t_name;
      console.log("teacher name is " , teacher.t_name)
     

      for (let i = 0; i < data.length; i++) {
        setAssignmentList((prevData) => [...prevData, data[i]]);
      }

      socket.current = await initilize_socket();
      socket.current.on("connect", () => {
        console.log("connected from dashboard");
      });
    };
    d();

    if (localStorage.getItem("Campus_Token") === null) {
      navigate("/");
    }
  }, []);

  return (
    <div className=" mt-8 pl-2 w-screen relative">
      {isPopupVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 -z-1"
          // onClick={() => setPopupVisibility(false)}
        />
      )}
      <div className="text-3xl font-semibold text-gray-600 ml-8 mb-2 ">
        {" "}
        Recent Assignment
      </div>
      <div className="bg-gray-400 h-px mb-6 mx-8" />
      <div className="flex flex-wrap gap-8   mb-12 ml-8 ">
        {assignment_list &&
          assignment_list.map((item, i) => (
            <Link
              to={`/teacher/assignments/popup/${item._id}`}
              key={i}
              className="bg-[#FAFAFA]  -z-1 cursor-pointer hover:scale-105 w-[22%] rounded-lg  p-4 shadow-gray-400 shadow-md flex flex-col justify-between"
            >
              <div className="relative text-[18px] text-[#435585] font-bold ">
                {item.subject}
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
                  <div className="text-white font-bold">{teachers.current}</div>
                </div>
              </div>
            </Link>
          ))}
      </div>

      {/* {isPopupVisible && selectedItem && <Popup item={selectedItem} onClose={() => setPopupVisibility(false)} />} */}

      <div className="text-3xl font-semibold text-gray-600 ml-8 mb-2 mt-8">
        Messages
      </div>
      <div className="bg-gray-400 h-px mb-6 mx-8" />
      <div className="flex flex-wrap gap-8 ml-8 mt-4 ">
        {teacher_group[0] &&
          teacher_group.map((subj) => {
            return (
              <Link to={`/teacher/messagestds/chatbox/${subj.subject}`} key={subj._id}>
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

export default Teacherdashboard;
