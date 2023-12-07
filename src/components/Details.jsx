import React from 'react';
import { useParams } from 'react-router-dom';

import Data from '../data/Data';

const Details = () => {
  const { id } = useParams();
  const selectedItem = Data.find(item => item.id === parseInt(id, 10));

  if (!selectedItem) {
    return (
      <div>
        <h2>Details not found</h2>
      </div>
    );
  }

  return (
    <div className='flex justify-center w-full'>
    <div className='pt-8 pl-4'>
    
        <h1 className='font-bold text-2xl mb-6'>Details about your assignment</h1>
        <div>
        <div><strong>Subject: </strong>
             {selectedItem.Subject}</div>
          <div>
            <strong>Assignment Type:</strong> {selectedItem.Assignmen_Type}
          </div>
          <div>
            <strong>Topic name:</strong> {selectedItem.Topic_name}
          </div>
          <div>
            <strong>Assignment by:</strong> {selectedItem.Assignment_by}
          </div>
          <div>
            <strong>DeadLine:</strong> {selectedItem.Deadline}
          </div>
        </div>

        <div className='mt-8 w-full pr-10'>
          <div>
         <strong>Description:</strong></div>
         <div >
            {selectedItem.Describe}
         </div>

           
         
        </div>
        <div className='mt-8'><strong> Attached File</strong></div>
      </div>
      </div>
  );
};

export default Details;
