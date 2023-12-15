import React, { useState } from 'react';

function Hello() {
 const [selectedFile, setSelectedFile] = useState(null);

// const handleFileChange = (event) => {
//  setSelectedFile(event.target.files[0]);
//  console.log(selectedFile);

//  };
 async function uploads(){
const obj = new FormData();
const list = await fetch("http://localhost:8080/assignment/submitAssignment",{method:"Post",body:obj})

const item = await list.json();
console.log(item)
 }

return (
    <>
 <input type="file" onChange={(event)=>{setSelectedFile(event.target.files[0])}} />
 <button onClick={uploads}>Click</button>
 </>
 );
}
export default Hello;