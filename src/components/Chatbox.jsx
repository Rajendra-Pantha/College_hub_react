import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import db from "../data/subject_db.json";

const Chatbox = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const { i } = useParams();
  const selectedSubject = db["Sem_1"][parseInt(i, 10)];

  if (!selectedSubject) {
    return (
      <div key={i}>
        <h2>Details not found</h2>
      </div>
    );
  }

  return (
    <>
      <div>
        <div className=" w-screen h-[calc(100vh)] bg-slate-100 flex justify-center items-center md:pt-0 md:pl-0">
          <div className="w-[98%] h-[98%]  flex rounded-t-lg overflow-hidden">
            {/* chatbox */}
            <div className="flex flex-col  w-[calc(100%)] ">
              {/* chatbox header */}
              <div className="h-14 pl-2 w-[calc(100%)] bg-purple-500 flex justify-between">
                <div className="text-white h-full text-lg  flex items-center font-semibold ml-4">
                  <Icon
                    onClick={() => handleBack()}
                    className="text-white   text-2xl h-full flex items-center mr-4"
                    icon="ep:back"
                  />
                  {selectedSubject}
                </div>

                <div>
                  {/* icon="basil:other-1-solid"  */}
                  <Icon
                    className="text-white text-3xl font-bold p-2 m-2 mr-6 h-9 w-9  hover:bg-[#606f617a]   hover:rounded-full rounded-full bg-[#606f6155]"
                    icon="material-symbols:info-i"
                  />
                </div>
              </div>
              {/* chatbox body  */}
              <div className="bg-white  h-[calc(100%-5rem)]  w-[calc(100%)]  p-4   ">
                <div className="flex pb-6 ">
                  <div>
                    <img
                      className="h-14 w-14 rounded-full object-cover"
                      src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=1024x1024&w=is&k=20&c=iX0adGZVKv9wS5yrs0-hpFsJBnRAacZa1DcDZ0I9Bqk="
                    />
                    <span className=" text-sm text-gray-500 font-semibold">
                      just now
                    </span>
                  </div>
                  <div className=" max-w-md flex flex-col">
                    <p className="bg-[#f9cdd6bb] rounded-tl-none rounded-bl-lg rounded-tr-lg rounded-br-l ml-4 px-3 py-1 text-2xl">
                      hello
                    </p>
                    <img />
                  </div>
                </div>

                <div className="flex pb-6 flex-row-reverse">
                  <div>
                    <img
                      className="h-14 w-14 rounded-full object-cover"
                      src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=1024x1024&w=is&k=20&c=iX0adGZVKv9wS5yrs0-hpFsJBnRAacZa1DcDZ0I9Bqk="
                    />
                    <span className=" text-sm text-gray-500 font-semibold">
                      just now
                    </span>
                  </div>
                  <div className=" max-w-md flex flex-col">
                    <p className="bg-indigo-100 rounded-tl-none rounded-bl-lg rounded-tr-lg rounded-br-l mr-4 px-3 py-1 text-2xl">
                      hello
                    </p>
                    <img />
                  </div>
                </div>
              </div>
              {/* message input */}
              <div className="w-[100%] flex shadow-gray-600 shadow-2xl">
                <input
                  className="h-12 w-[90%] focus:outline-none placeholder:p-2 p-2 "
                  type="text"
                  placeholder="Write something here..."
                />
                <button className="w-[10%] text-white p-2  font-bold text-lg  bg-[#902bf5] h-12 hover:bg-[#6e0fcd] ">
                  Send
                </button>
              </div>
            </div>
<<<<<<< HEAD
=======


            <div className='flex pb-6 flex-row-reverse'>
              <div>
                <img className='h-14 w-14 rounded-full object-cover' src='https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=1024x1024&w=is&k=20&c=iX0adGZVKv9wS5yrs0-hpFsJBnRAacZa1DcDZ0I9Bqk=' />
                <span className=' text-sm text-gray-500 font-semibold'>just now</span>
              </div>
              <div className=' max-w-md flex flex-col'>
                <p className='bg-indigo-100 rounded-tl-none rounded-bl-lg rounded-tr-lg rounded-br-l mr-4 px-3 py-1 text-2xl'>hello</p>
                <img />
              </div>
            </div>

          </div>
          {/* message input */}
          <div className='w-[100%] flex shadow-gray-600 border-2 shadow-2xl'>
            <input className='h-12 w-[90%] focus:outline-none placeholder:p-2 p-2 placeholder:text-gray-600 ' type="text" placeholder='Write something here...' />
            <button className='w-[10%] text-white p-2  font-bold text-lg  bg-[#902bf5] h-12 hover:bg-[#6e0fcd] '>Send</button>

>>>>>>> ef2ba76eb487e9e8cde9a8eb9b1a3f805fd6993f
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbox;
