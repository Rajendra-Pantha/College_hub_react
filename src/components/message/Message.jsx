import React from "react";
import db from "../../data/subject_db.json";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const Message = ({ socket, groupName, subjectName }) => {
  return (
<<<<<<< HEAD
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
            {db["Sem_1"].map((subj, i) => {
              return (
                <Link to={`/teacher/messagestds/chatbox/${i}`}>
                  <div
                    className=" border-b-2 rounded-lg   border-gray-300 p-4 text-gray-700 hover:text-[21px]"
                    key={i}
                  >
                    {subj}
                    <Icon
                      className="inline  "
                      icon="fluent:ios-arrow-24-regular"
                      hFlip={true}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
=======
<div className='  ml-3 mt-14 w-screen'>
  <div className='font-bold text-5xl  justify-center flex mb-8 text-stone-800  '>Welcome To Class Group</div>
  <div className='ml-28 cursor-pointer mr-28'>
<div className='bg-[#DB1F48] font-semibold  rounded-t-lg text-4xl h-14 flex items-center justify-center text-white w-[100%]'>Chat Groups</div>
<div>
  <div className='  h-fit  w-[100%]  border-l-2 border-r-2 border-gray-300   font-bold text-xl rounded-b-lg   cursor-pointer'>
 
    {db['Sem_1'].map((subj,i)=>{
      return(
   <Link  to={`/teacher/messagestds/chatbox/${i}`}> 
    <div className=' border-b-2 rounded-lg   border-gray-300 p-4 text-gray-700 hover:text-[21px]' key={i} >{subj}<Icon className='inline  ' icon="fluent:ios-arrow-24-regular" hFlip={true} /></div>
   </Link>   
      )
    }
    )
    }
  </div>
  </div>
  </div>
</div>
>>>>>>> b61791de63d6cd262a02d4655b24f0f584dc4c0c

export default Message;
