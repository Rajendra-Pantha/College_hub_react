import { React, useState, useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import handle_send_message from "./Handle_send_message.js";
import load_chat_messages from "./load_messages.js";
import appContext from "../AppContext/appContext";
import ClassContext from "../ClassContext/CreateClass";
import { Popover } from "@headlessui/react";
import  {encrypt , decrypt} from "./Cryptography.js"
import get_group_members from "./get_group_members.js"
import Typing from "../Typing.jsx";
import sound from "./ting.mp3"
 const Chatbox = () => {
  const playSound = () => {

    const audio = new Audio(sound);
    audio.autoplay = true
    audio.loop = false
    audio.play();
  };
  
  const socket = useRef(null);
  const { detail, setDetail } = useContext(ClassContext);
  const { i } = useParams();
  // console.log("the chat name is " , i)

  const user_uuid = localStorage.getItem("current_id");
  // let socket
  const { initilize_socket } = useContext(appContext);
  const message_ref = useRef(null);
  const input_ref = useRef(null)
  const [currentMessage, setCurrentMessage] = useState("");
  const [is_admin , setAdmin] = useState(false)
  const [studentlist, setStudentlist] = useState([]);
  const [typing , setTyping] = useState(false)
  
  const load_message_from_server = async () => {

    const messages = await load_chat_messages(i)

  messages.forEach(message => {
   
    append_received_message(message)
  })
  }

  const handle_receive_message = (data) => {
   
    playSound()
      setTimeout(() => {
       
        append_received_message(data);
      }, 300);
    

    
  };


  const manage_group_memebers = (members) => {
    // console.log(members[0].collaborators)
    members.forEach((member) => {
      setStudentlist(prevData => ([...prevData , member]))
    })
  }

  const d = async () => {

    // window.location.reload()
    socket.current = await initilize_socket();
    socket.current.on("connect", () => {
      socket.current.emit("join_room", i);
      socket.current.on("receive_message", handle_receive_message);
      socket.current.on("user_typing" , (data) => {
        // console.log("someone is typing n scroll down div")
        // message_ref.current.scrollTop = message_ref.current.scrollHeight;
        handle_typing_message(data)
      })
      socket.current.on("user_sent_message" , handle_typing_message)
    });
   const {admin , members} = await  get_group_members(i)
   setAdmin(admin)
   manage_group_memebers(members)
  };
  useEffect(() => {
    setCurrentMessage("")
    input_ref.current.focus()
    d();
    load_message_from_server()


    return () =>{
      socket.current.disconnect()
    }

  }, []);

  const sendMessage = () => {
    socket.current.emit("message_sent" , {subject : i , typing : false})

    setCurrentMessage("");

    if (currentMessage !== "") {

      const encrypted_message = encrypt(currentMessage , 3)

      const messageData = {
        author: detail.groupName,
        subjectName: i,
        from: user_uuid,
        time: new Date().getTime(),
        message: encrypted_message,
      };


      if (socket.current) {
        socket.current.emit("send_message", messageData);
        setCurrentMessage("")
        // console.log("this is ecrypted sent mesage " , messageData)
        handle_send_message(messageData)
        append_sent_message(messageData.message);

        }

    }
    // message_ref.current = null
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
      "rounded-tl-none rounded-bl-lg rounded-tr-lg rounded-br-lg  rounded-md bg-green-700 p-1 ml-1 rounded-md  text-white"
    );

     const  decrypted_messsage = decrypt(message , 3)
    
    message_box.textContent = decrypted_messsage;

    message_outer_box.appendChild(message_box);
    message_ref.current.appendChild(message_outer_box);
    message_ref.current.scrollTop = message_ref.current.scrollHeight;
  };

  const append_received_message = (message) => {
    // console.log("this is received encrypted  mesage " , message)
    if (message.from == user_uuid || message.self == true) {
      append_sent_message(message.message , "R");
    } else {
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
      const decrypted_messsage = decrypt(message.message , 3)
      // console.log("this is decrypted received message " , decrypted_messsage)
      message_box.textContent = decrypted_messsage;
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




  const set_message = (e) => {
    e.preventDefault()    
    setCurrentMessage(e.target.value);
  };


  window.onkeydown = (e) => {
    if(e.code == "Enter"){
      sendMessage()
      setTyping(false)
    }
  }
const emit_typing_message = (e) => {
 

  if(e.target.value.length > 0 ){
    // message_ref.current.scrollTop = message_ref.current.scrollHeight;
    socket.current.emit("typing" , {subject : i , typing : true})
  }else{
    socket.current.emit("message_sent" , {subject : i , typing : false})
  }
  
  
  
}


const handle_typing_message = (is_user_typing) => {
  // console.log(is_user_typing)
  
  message_ref.current.scrollTop = message_ref.current.scrollHeight;
 
  setTyping(is_user_typing.typing)
}
  return (
    <>
      <div className="">
        <div className=" w-[calc(100vw-15rem)]   bg-slate-100 flex justify-center items-center md:pt-0 md:pl-0">
          <div className="w-[98%] h-[98%]  flex rounded-t-lg overflow-hidden">
            {/* chatbox */}
            <div className="flex flex-col mt-2 w-[100%] h-[calc(87vh)]">
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
                
                <Popover className="relative">
                <Popover.Button className="outline-none font-extrabold text-3xl text-white mr-4">...</Popover.Button>
                <Popover.Panel className="bg-gray-200 absolute w-[250px] right-4 top-12 rounded-md shadow-lg">
               <div className="p-4">
              <p className="font-bold text-gray-700 border-b-2 border-black mb-4 text-lg">Group Members</p>
             <ul>

             {/* <li className="flex justify-between text-red-600 text-md font-bold cursor-pointer w-[100%]">
             {<div>studentlist[0] &&  <span> { studentlist[0].teacher.t_name} </span> <span className="text-sm text-orange-500"> Admin </span> </div>}
              </li> */}
              {studentlist[0] && <li className="flex justify-between text-red-600 text-md font-bold cursor-pointer w-[100%]"><span> { studentlist[0].teacher.t_name} </span> <span className="text-sm text-orange-500"> Admin </span>  </li>}
            {/* {studentlist && studentlist[0].collaborators.length == 0 ? <div>No Students</div> :
              studentlist[0].collaborators.map((student, i) => (
             <li key={i} className="flex justify-between items-center mb-2 cursor-pointer">
             <span className="font-semibold text-blue-600">{student.s_name}</span>
             {is_admin && <span className="text-red-600 text-xs cursor-pointer hover:underline transition duration-300"> Remove </span>}
          </li>
        ))} */}

        {studentlist[0] && (studentlist[0].collaborators.length == 0 ? <div>No Students</div>
         : studentlist[0].collaborators.map((student, i) => (
             <li key={i} className="flex justify-between items-center mb-2 cursor-pointer">
             <span className="font-semibold text-blue-600">{student.s_name}</span>
             {is_admin && <span className="text-red-600 text-xs cursor-pointer hover:underline transition duration-300"> Remove </span>}
          </li>
         
          )))}
      </ul>
    </div>
  </Popover.Panel>
</Popover>

              </div>

              {/* chatbox body  */}
              <div
                ref={message_ref}
                className="bg-teal-900 h-[calc(73vh)] flex  flex-col  w-[calc(100%)] p-2  overflow-auto pb-5"
              >
                {typing && <Typing />}
              </div>
              
              
              {/* message input */}
              
              <div className="bg-teal-900 w-[98.7%]  p-2">
              
              {/* <Typing /> */}
                <div className=" flex items-center justify-between   ">
                <input
                ref={input_ref}
                value={currentMessage}
                  className="h-12 w-[96%] placeholder:p-2 pl-4 focus:outline-none
                    border-white-500 border-2 bg-green-800 text-white rounded-2xl outline-4"
                  type="text"
                  placeholder="Write something here..."
                  onChange={(e) => { 
                    set_message(e);
                  }}
                  onKeyUp={emit_typing_message}
                />
                <Icon icon="iconoir:send-solid" className="text-4xl mb-1 text-white cursor-pointer" onClick={sendMessage}/>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbox;
