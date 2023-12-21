import React from 'react';
import { useParams } from 'react-router-dom';

import Data from '../data/Data';

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
       
      </div>
      </div>
  );
};

export default Details;
