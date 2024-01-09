import { React, useState, useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import db from "../data/subject_db.json";
import handle_send_message from "./Handle_send_message.js"
import load_chat_messages from "./load_messages.js"
import appContext from "../AppContext/appContext";
import ClassContext from "../ClassContext/CreateClass";
const Chatbox = () => {
  const socket = useRef(null)
  // let socket
  const {initilize_socket} = useContext(appContext);
  const message_ref = useRef(null);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const { detail, setDetail } = useContext(ClassContext);
  const { i } = useParams();

  
 const user_uuid = localStorage.getItem("current_id")



  useEffect(() => {

    const load_message_from_server = async () => {
      const messages = await load_chat_messages(i)
      // setMessageList([])

    // for(let i = 0; i < messages.length; i++){ 
    //   setMessageList(prevData => [...prevData , messages[i]]) 
    // }
    // console.log("the message list is" , messageList)
    
    messages.forEach(message => {
     
      append_received_message(message)
    })
    }
    load_message_from_server()
    const d = async () =>{
 
      // window.location.reload()
      socket.current = await initilize_socket()
      socket.current.on("connect" , () => {
      
        socket.current.emit("join_room" , i)
        socket.current.on("receive_message", handle_receive_message);
      })
   
      
    }
    d()
    const handle_receive_message = (data) => {
      append_received_message(data);
    };
    
  }, []);

 

    

  const sendMessage = () => {
    setCurrentMessage("aaaa")
    if (currentMessage !== "") {
      // console.log("this is author: ", detail.groupName);

      const messageData = {
        author: detail.groupName,
        subjectName: i,
        from : user_uuid,
        time:new Date().getTime(),
        message: currentMessage,
      };

      
      
      // setMessageList((prevlist) => [...prevlist, messageData]);
      if (socket.current) {
        socket.current.emit("send_message", messageData);
        
        handle_send_message(messageData)
        append_sent_message(messageData.message);
        

        // append_received_message(messageData.message)
      }
    }
  };
  const append_sent_message = (message) => {
    const message_outer_box = document.createElement("div");
    message_outer_box.setAttribute(
      "class",
      "flex justify-end mt-2  h-auto self-end  w-2/4 "
    );

    const message_box = document.createElement("p");
    message_box.setAttribute(
      "class",
      "rounded-tl-none rounded-bl-lg rounded-tr-lg rounded-br-lg  rounded-md bg-green-700 p-1 ml-1 rounded-md w-auto text-white"
    );
    message_box.textContent = message;

    message_outer_box.appendChild(message_box);
    message_ref.current.appendChild(message_outer_box);
    message_ref.current.scrollTop = message_ref.current.scrollHeight;
  };

  const append_received_message = (message) => {
    if(message.from == user_uuid || message.self == true){
      append_sent_message(message.message)
    }else{
      const message_outer_box = document.createElement("div");
      message_outer_box.setAttribute("class", "flex items-center mt-2 w-2/4");
      const image = document.createElement("img");
      image.setAttribute(
        "src",
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=1024x1024&w=is&k=20&c=iX0adGZVKv9wS5yrs0-hpFsJBnRAacZa1DcDZ0I9Bqk="
      );
      image.setAttribute("class", "h-8 w-8 rounded-full object-cover");
      const message_box = document.createElement("p");
      message_box.setAttribute(
        "class",
        "rounded-tl-none rounded-bl-lg rounded-tr-lg rounded-br-lg  rounded-md bg-green-700 p-1 ml-1 rounded-md w-auto text-white"
      );
      message_box.textContent = message.message;
      message_outer_box.appendChild(image);
      message_outer_box.appendChild(message_box);
      if (message_ref.current) {
        message_ref.current.appendChild(message_outer_box);
      message_ref.current.scrollTop = message_ref.current.scrollHeight;
  
      }
    }
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };



  // if (!selectedSubject) {
  //   return (
  //     <div key={i}>
  //       <h2>Details not found</h2>
  //     </div>
  //   );
  // }
  const set_message = (e) => {
    e.preventDefault();
    setCurrentMessage(e.target.value);
  };
  return (
    <>
      <div>
        <div className=" w-[calc(100vw-15rem)]   bg-slate-100 flex justify-center items-center md:pt-0 md:pl-0">
          <div className="w-[98%] h-[98%]  flex rounded-t-lg overflow-hidden">
            {/* chatbox */}
            <div className="flex flex-col mt-2 w-[calc(100%)] h-[calc(100vh-5.5rem)]">
              {/* chatbox header */}
              <div className="h-14 pl-2 w-[calc(100%)] rounded-t-md bg-purple-500 flex justify-between ">
                <div className="text-white h-full text-lg  flex items-center font-semibold ml-4">
                  <Icon
                    onClick={() => handleBack()}
                    className="text-white   text-2xl h-full flex items-center mr-4"
                    icon="ep:back"
                  />
                  {i}
                </div>
              </div>

              {/* chatbox body  */}
              <div
                ref={message_ref}
                className="bg-teal-900 h-[calc(73vh)] flex flex-col  w-[calc(100%)] p-2  overflow-auto pb-5"
              ></div>
              
              {/* message input */}
              <div className="w-[100%] flex shadow-gray-600 shadow-2xl">
                <input
                  className="h-12 w-[90%] focus:outline-none placeholder:p-2 p-2 border-black border-2"
                  type="text"
                  placeholder="Write something here..."
                  onChange={(e) => {
                    set_message(e);
                  }}
                />
                <button
                  className="w-[10%] text-white p-2  font-bold text-lg  bg-[#902bf5] h-12 hover:bg-[#6e0fcd] "
                  onClick={sendMessage }>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbox;
