import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import get_specific_assignment from "../components/popup/get_specific_assignment";
import { useParams } from "react-router-dom";
import Upload_assignment from "./Upload_assignment.js"
const Details = () => {
  const { id } = useParams();
  const [allowed , setAllowed] = useState("not-allowed")
  const [assignment, setAssignment] = useState([]);
  const [file, setFile] = useState();
  const [errormsg, setErrormsg] = useState("");
  const [button_disabled , setDisabled] = useState(true)
  const update_assignment_ref = (data) => {
    setAssignment([...assignment, data]);
  };

  useEffect(() => {
    console.log("the id is " , id)
    const load_specific_data = async () => {
      const data = await get_specific_assignment(id);

      update_assignment_ref(data[0]);
    };
    load_specific_data();
  }, []);

  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log("selected file" , file)
    if (file && file.type !== "application/pdf") {
      setErrormsg("Please provide  Pdf file ");
      e.target.value = null;
    } else {
      setFile(file);
      setAllowed("allowed")
      setDisabled(false)
      console.log("the state is " , allowed)
      setErrormsg("");
    }
  };
  const submitFile = async () =>{
   const res = await Upload_assignment(file , id)
   console.log("The response is " , res)
  if(res.err){
    alert(res.err)
  }else{
    alert(res.message)
  }
  }
  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
      }}
      className="flex   w-[90%]  my-14 mx-8"
    >
      {assignment[0] && (
        <div className="pt-8 pl-4">
          <div className="font-bold text-3xl mb-8 text-[#3490dc] underline">
            Details about your assignment
          </div>
          <div className="text-[#3490dc] text-lg">
            <div>
              <strong>Subject: </strong>
              <span className="text-gray-700"> {assignment[0].subject}</span>
            </div>

            <div className="text-[#3490dc]">
              <strong>Topic name:</strong>{" "}
              <span className="text-gray-700">{assignment[0].title}</span>
            </div>

            <div className="text-[#3490dc]">
              <strong>DeadLine:</strong>{" "}
              <span className="text-gray-700">{assignment[0].deadline}</span>
            </div>
          </div>

          <div className="mt-8 w-full pr-10 text-lg">
            <div className="text-[#3490dc]">
              <strong className="text-2xl underline">Description:</strong>
            </div>
            <div className="text-gray-700 text-justify pt-4">
              {assignment[0].description}
            </div>
          </div>
          <div className="text-[#3490dc] text-2xl font-bold text-justify pt-4 underline">
            Submit your assignment here
          </div>
          <div>
            <div className="mb-4">
              <input
                id="input"
                className="hidden"
                type="file"
                accept="application/pdf"
                onChange={handleChange}
              />
            </div>
            <span
              className=" 
      py-2 font-semibold text-green-500"
            >
              {file == null ? "" : `File Selected: ${file.name}`}
            </span>
            <span className="text-red-500 font-semibold">{errormsg}</span>
            <div className="mt-4 flex gap-4">
              <button
                className=" cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 flex gap-2 items-center justify-center px-14 rounded"
                htmlFor="file"
                onClick={() => {
                  document.getElementById("input").click();
                }}
                type="button"
              >
                <Icon
                  className=" text-2xl"
                  icon="iconoir:submit-document"
                  color="white"
                />
                Select File
              </button>
              <button className={`cursor-pointer  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 flex gap-2 items-center justify-center px-20 rounded`}
               onClick={submitFile}>
                Upload <Icon
                  className=" text-2xl"
                  icon="material-symbols:upload"
                  color="white"
                />

              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
