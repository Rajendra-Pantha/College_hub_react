import React, { useEffect } from 'react'
// import assignmentdata from '../data/Assignment'
import AssignmentContext from './AssignmentContext'
import { useState } from 'react'
import Fetch_assignments from "./Fetch_assignments.js"
const AssignmentProvider = ({children}) => {


        const initilize_teacher_default_detail = async (dashboard) => {
          const all_assignments = await Fetch_assignments()
          console.log("allllll ",all_assignments)
          if(dashboard == true){
            const data = all_assignments.data.reverse().slice(0,4)
            const teacher = all_assignments.teacher
            return {data , teacher}
          }
          else{
            return all_assignments
          }
           
        }
        useEffect(() => {
            
            // setData(assignmentdata);
        }, []);
    
  return (
    <AssignmentContext.Provider value={{initilize_teacher_default_detail}}>
        {children}
    </AssignmentContext.Provider>
  )
}

export default AssignmentProvider