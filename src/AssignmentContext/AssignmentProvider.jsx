import React, { useEffect } from 'react'
import assignmentdata from '../data/Assignment'
import AssignmentContext from './AssignmentContext'
import { useState } from 'react'
const AssignmentProvider = ({children}) => {

    const[data,setData]=useState([]);
    
        const addAssignment=(newValue)=>{
            setData((preValue)=>[...preValue, newValue]);
        }
        useEffect(() => {
            
            setData(assignmentdata);
        }, []);
    
  return (
    <AssignmentContext.Provider value={{data,addAssignment}}>
        {children}
    </AssignmentContext.Provider>
  )
}

export default AssignmentProvider