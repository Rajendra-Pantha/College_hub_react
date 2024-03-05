

import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import "./style.css"
import MyDocument from './MyDocument';
import view_student_submitted_assignment from "./student_submitted_assignment.js"
import { PDFViewer } from '@react-pdf/renderer';

import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const View_assignment = () => {
  const {assignId_studentId} = useParams()
  const [file_content , setFileContent] = useState([])
  const [pdf , setPdf] = useState("")
  const set_file_content = (contents) => {
    
    contents.forEach((content) => {
      setFileContent(prevData => ([...prevData , content]))
    })
  }

  const load_pdf = (assignId_studentId) => {
    setPdf(`http://localhost:8080/pdf/${assignId_studentId}.pdf`)
  }



 useEffect(() => {
  load_pdf(assignId_studentId)
  const run_function = async () => {


  }
  run_function()

 } , [])
return (
  

  <div className='w-full'>
  <iframe src={`${pdf}#zoom=100`} className=" w-[100%] h-[100%] no-scrollbar"></iframe>
  </div>
)}


export default View_assignment
