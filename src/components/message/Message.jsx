import { useEffect, useState } from "react";
import React  from "react";
import db from "../../data/subject_db.json";
import { Icon } from "@iconify/react";
import { Link , useNavigate} from "react-router-dom";
// import SubjectName from "./Messagefetch";
import fetch_teacher_group from "./get_groups";
const Message = ({ socket, groupName, subjectName , a }) => {

  const[list , setList] = useState([])
  const navigate =useNavigate();
  
  useEffect(()=>{
  if(localStorage.getItem("Campus_Token")===null){
    navigate("/");
  }
  const fetch_group_list = async ()=>{
    const group_list = await fetch_teacher_group()
    setList([])

    for(let i = 0; i < group_list.length; i++){
      if(group_list[i].subject !== ""){
        setList(prevData => [...prevData , group_list[i]])
      }
    }
    console.log("list",list);
    
  }
  fetch_group_list()
  
  },[])

  return (
    <div className="  ml-3 mt-14 w-screen">
      <div className="font-bold text-5xl  justify-center flex mb-8 text-stone-800  ">
        Welcome To Class Group
      </div>
      <div className="ml-28 cursor-pointer mr-28">
        <div className="bg-[#DB1F48] font-semibold  rounded-t-lg text-4xl h-14 flex items-center justify-center text-white w-[100%]">
          Chat Groups
        </div>
        <div>
          <div className="  h-fit  w-[100%]  border-l-2 border-r-2 border-gray-300   font-bold text-xl rounded-b-lg   cursor-pointer">
            {list.length !== 0 ? list.map((subj, i) => {
              return (
                <Link to={`/${a}/messagestds/chatbox/${subj.subject}`} key={i}>
                  <div
                    className=" border-b-2 rounded-lg   border-gray-300 p-4 text-gray-700 hover:text-[21px]"
                    key={i}
                  >
                    {subj.subject}
                    <Icon
                      className="inline  "
                      icon="fluent:ios-arrow-24-regular"
                      hFlip={true}
                    />
                  </div>
                </Link>
              );
            }) : <div className="p-10">You havent created group yet...</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
