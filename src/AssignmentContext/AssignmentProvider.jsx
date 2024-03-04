import React, { useEffect } from 'react'
// import assignmentdata from '../data/Assignment'
import AssignmentContext from './AssignmentContext'
import { useState } from 'react'
import Fetch_assignments from "./Fetch_assignments.js"
import Student_dashboard from "./Student_dashboard.js"
const AssignmentProvider = ({children}) => {


        const initilize_teacher_default_detail = async (dashboard) => {
          const all_assignments = await Fetch_assignments()
          console.log("allllll ",all_assignments)
          if(dashboard == true){
            const data = all_assignments.data.reverse().slice(0,4)
            const teacher = all_assignments.teacher
            return {data , teacher}
          }
          else if(dashboard == false){
            return all_assignments
          }
          else{
            return (all_assignments.teacher.t_name)
          }
           
        }
        const initilize_student_default_detail = async(dashboard) =>{
          const student_dashboard_assignment_data = await Student_dashboard()
          if(dashboard == true){
            const datas = student_dashboard_assignment_data.data.reverse().slice(0,4)
            return datas
          }
          else if(dashboard == false){
            return student_dashboard_assignment_data.data
          }else{
            return student_dashboard_assignment_data.s_name
          }

        }
        useEffect(() => {
            
            // setData(assignmentdata);
        }, []);
       
    
  return (
    <AssignmentContext.Provider value={
      {initilize_teacher_default_detail ,
      initilize_student_default_detail}}>
        {children}
    </AssignmentContext.Provider>
  )
}

export default AssignmentProvider