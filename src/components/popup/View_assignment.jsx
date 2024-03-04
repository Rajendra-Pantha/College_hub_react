

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
  //   setFileContent([])
  // const data =  await view_student_submitted_assignment(assignId_studentId)
  // console.log("gt data here too" , data)
  // set_file_content(data)

  }
  run_function()

 } , [])
return (
  

  <div className='w-full'>
  <iframe src={`${pdf}#zoom=100`} className=" w-[100%] h-[100%] no-scrollbar"></iframe>
  </div>
)}


export default View_assignment

{/* <div>
  {file_content[0] && <div className='flex justify-center'> <p className='w-[50%] text-justify'>{file_content[0].content}</p>
  <a href={'C:\\Users\\Aashis\\Desktop\\AllFiles\\Project\\CampusHub\\pdf\\65a2174dfb459f6e40993eed_65a15f467c6207f832e9389e.pdf'} download className='btn bg-red-700'>Download CV</a>


  </div>}
</div>  */}


  {/* <div className=' w-full justify-center'>

  <PDFViewer className='w-[100%] h-[500px] flex justify-center overflow-y-scroll no-scrollbar' showToolbar={true}>
  {
    file_content[0] &&
    
    <MyDocument contents = {file_content[0]}/>

  }
  </PDFViewer>
  </div>
  <div className='w-full h-[50%] bg-gray-500 test'>
 
     <Document file={pdf} className='w-full p-30 bf-red-500'>
      <Page pageNumber={1}  orientation='landscape'  size="A4" className='w-full page' renderAnnotationLayer={false} renderTextLayer={false}/>
     </Document>
  </div> */}