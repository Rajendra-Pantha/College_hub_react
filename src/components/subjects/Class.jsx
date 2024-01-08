import React, { useContext , useEffect , useRef} from "react";
import { Icon } from "@iconify/react";
import { Popover } from "@headlessui/react";
import { useState } from "react";

import socket_io from "../../socket";
// import initializeSocket from "../../socket";
import ClassContext from "../../ClassContext/CreateClass";
import AssignmentContext from "../../AssignmentContext/AssignmentContext";
import ClassGroup from "./Classfetch";

// import Chatbox from "../Chatbox";
// const socket = io.connect("http://localhost:8080", {
//   transports: ["websocket"],
//   cors: {
//     origin: "http://127.0.0.1:5173",
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });
const Class = () => {
   const { detail , addDetail } = useContext(ClassContext);
  const [tempdata, setTempdata] = useState({
    groupName: "",
    subjectName: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // if (detail.groupName !== "" && detail.subjectName !== "") {
  //   //   socket.emit("join_room", detail.subjectName);
  //   // }

  // };

  const joinroom = async () => {
    if (tempdata.groupName !== "" && tempdata.subjectName !== "") {
      socket.emit("join_room", tempdata.subjectName);
      addDetail(tempdata);
   await ClassGroup(tempdata);
  };
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
          <input
            value={tempdata.groupName}
            onChange={(e) =>
              setTempdata((pre) => ({ ...pre, groupName: e.target.value }))
            }
            className="block mb-4 text-lg shadow appearance-none border rounded w-[90%] py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter group name"
          />
          <input
            value={tempdata.subjectName}
            onChange={(e) =>
              setTempdata((pre) => ({ ...pre, subjectName: e.target.value }))
            }
            className="block mb-4 text-lg shadow appearance-none border rounded w-[90%] py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter subject name"
          />

          <button
          type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={joinroom}
          >
            Create
          </button>
          {/* </form> */}
        </Popover.Panel>
      </Popover>
      {/* <Chatbox
        socket={socket}
        groupName={detail.groupName}
        subjectName={detail.subjectName}
      /> */}
      {/* <Message
        socket={socket}
        groupName={detail.groupName}
        subjectName={detail.subjectName}
      /> */}
    </div>
  );
};

export default Class;
