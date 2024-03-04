import React, { useContext , useEffect , useRef} from "react";
import { Icon } from "@iconify/react";
import { Popover } from "@headlessui/react";
import { useState } from "react";

// import socket_io from "../../socket";
// import initializeSocket from "../../socket";
import ClassContext from "../../ClassContext/CreateClass";
import AssignmentContext from "../../AssignmentContext/AssignmentContext";
import ClassGroup from "./Classfetch";
import appContext from "../../AppContext/appContext";


const Class = () => {
  const socket = useRef(null)
  const {initilize_socket} = useContext(appContext)

  useEffect(()=>{
    const d = async () =>{
      socket.current = await initilize_socket()
    }
    d()
  } ,[])
  

   const { detail , addDetail } = useContext(ClassContext);
  const [tempdata, setTempdata] = useState({
    groupName: "",
    subjectName: "",
  });

  const joinroom = async () => {
    if (tempdata.groupName !== "" && tempdata.subjectName !== "") {
      addDetail(tempdata);
   await ClassGroup(tempdata);
   setTempdata({
    groupName: "",
    subjectName: "",
   })
  }
    }
    

  return (
    <div className=" pt-8 pl-2">
      <Popover>
        <Popover.Button>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <span className="flex items-center">
              <Icon icon="bi:plus" className="mr-2" />
              Create Group
            </span>
          </div>
        </Popover.Button>
        <Popover.Panel className="p-4 border-2 border-gray-300 rounded-lg mt-4">
          {/* <form onSubmit={handleSubmit}> */}
          {/* <form> */}
         <label className="font-semibold ">Group Name :</label>  <input
            value={tempdata.groupName}
            onChange={(e) =>
              setTempdata((pre) => ({ ...pre, groupName: e.target.value }))
            }
            className="block mb-4 mt-2 text-lg shadow appearance-none border rounded w-[90%] py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter group name"
          />
         <label className="font-semibold ">Subject Name :</label> <input
            value={tempdata.subjectName}
            onChange={(e) =>
              setTempdata((pre) => ({ ...pre, subjectName: e.target.value }))
            }
            className="block mb-4 mt-2 text-lg shadow appearance-none border rounded w-[90%] py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter subject name"
          />

          <Popover.Button
          type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={joinroom}
          >
            Create
          </Popover.Button>
          {/* </form> */}
        </Popover.Panel>
      </Popover>


    </div>
  );
};

export default Class;
