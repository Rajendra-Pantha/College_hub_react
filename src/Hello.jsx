// import React, { useState } from "react";

// function Hello() {
//   const [selectedFile, setSelectedFile] = useState(null);



//   async function uploads() {
//     const obj = new FormData();
//     obj.append("f1", selectedFile);
//     console.log(obj);
//     const list = await fetch(
//       "http://localhost:8080/assignment/submitAssignment",
//       {
//         method: "Post",
//         body: obj,
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     const item = await list.json();
//   }

//   return (
//     <>
//       <input
//         type="file"
//         onChange={(event) => {
//           setSelectedFile(event.target.files);
//         }}
//       />
//       <button onClick={uploads}>Click</button>
//     </>
//   );
// }
// export default Hello;

import React, { useState, useEffect } from "react";

function Hello() {
  const [file, setFile] = useState();

  useEffect(() => {
    // console.log("this is from react", selectedFile);
  }, [file]);

  async function upload() {
    console.log("function called");
    const obj = new FormData();
    obj.append("file", file);
    console.log(file.type);
    if (file.type == "application/pdf") {
      const list = await fetch(
        "http://localhost:8080/assignment/submitAssignment/6582ddf560dab9c8f8abc539",
        {
          method: "Post",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiNjU3ZWVkZWUxZmRhMzI2NDIwNzkxNmU1IiwidXNlclR5cGUiOiJTdHVkZW50IiwiaWF0IjoxNzAyODE3MjYyfQ.Qvm24xdGQZfRw4YqQ4MkpoBmF2x5B1BmgDqRxeDAC4s",
          },
          body: obj,
        }
      )
        .then((res) => {})
        .catch((er) => console.log(er));
    } else {
      console.log("you cannot upload this");
    }
  }

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="button" onClick={upload}>
        Upload
      </button>
    </div>
  );
}

export default Hello;

