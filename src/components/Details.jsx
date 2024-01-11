import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Data from '../data/Data';
import { Icon } from '@iconify/react';

const Details = () => {
  const { id } = useParams();
  const selectedItem = Data.find(item => item.id === parseInt(id, 10));

  if (!selectedItem) {
    return (
      <div>
        <h2 >Details not found</h2>
      </div>
    );
  }
  const [file, setFile] = useState();
  const[errormsg,setErrormsg]=useState("");

  return (
    <div className='flex ml-12'>
      <div className='pt-8 pl-4'>

        <div className='font-bold text-3xl mb-8 text-gray-800 underline'>Details about your assignment</div>
        <div className='text-gray-800 text-lg'>
          <div><strong>Subject: </strong>
            {selectedItem.Subject}</div>
          <div className='text-gray-800'>
            <strong>Assignment Type:</strong> {selectedItem.Assignmen_Type}
          </div>
          <div className='text-gray-800'>
            <strong>Topic name:</strong> {selectedItem.Topic_name}
          </div>
          <div className='text-gray-800'>
            <strong>Assignment by:</strong> {selectedItem.Assignment_by}
          </div>
          <div className='text-gray-800'>
            <strong>DeadLine:</strong> {selectedItem.Deadline}
          </div>
        </div>

        <div className='mt-8 w-full pr-10 text-lg'>
          <div className='text-gray-800'>
            <strong className='text-2xl '>Description:</strong></div>
          <div className='text-gray-800  text-justify pt-4'>
            {selectedItem.Describe}
          </div>



        </div>
        <div className='text-gray-800 text-2xl font-bold text-justify pt-4'>Submit your assignment here</div>
        <div>
          <div>

          <input
  id="input"
  className='hidden'
  type="file"
  accept="application/pdf"
  onChange={(e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      setErrormsg("**Please provide  Pdf file ")
      e.target.value = null; 
    } else {
      setFile(file);
      setErrormsg("")
    }
  }}
/>
          </div>
          <div className='mt-4 flex'>
            <button className=' cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 flex gap-2 items-center justify-center px-4 rounded' for="file" onClick={() => { document.getElementById("input").click() }} type="button" >
              <Icon className=' text-2xl' icon="material-symbols:upload" color="white" /> Upload Assignment
            </button><span className='
      ml-2 py-2 font-semibold text-green-500'>{file == null ? "" : `File uploaded: ${file.name}`}</span><span className='text-red-500 font-semibold'>{errormsg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
