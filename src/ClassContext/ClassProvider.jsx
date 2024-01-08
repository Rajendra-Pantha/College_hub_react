import { React, useEffect, useState } from "react";
import io from "socket.io-client";
// import socket from "../socket";
import ClassContext from "./CreateClass";
const ClassProvider = ({ children }) => {
  const [detail, setDetail] = useState({
    groupName: "",
    subjectName: "",
  });
  // console.log("wetq:", detail);
  const addDetail = (newValue) => {
    console.log(newValue);
    // setDetail({
    //   ...detail,
    //   groupName: newValue.groupName,
    //   subjectName: newValue.subjectName,
    // });
    setDetail((prevDetail) => ({
      ...prevDetail,
      groupName: newValue.groupName,
      subjectName: newValue.subjectName,
    }));
  };
  useEffect(() => {
    // Log the updated detail state when it changes
    console.log("fromprov: ", detail);
  }, [detail]);
  return (
    <ClassContext.Provider value={{ detail, addDetail }}>
      {children}
    </ClassContext.Provider>
  );
};

export default ClassProvider;

// import React, { useState } from "react";
// import ClassContext from "./CreateClass";

// const ClassProvider = ({ children }) => {
//   const [detail, setDetail] = useState({
//     groupName: "",
//     subjectName: "",
//   });

//   const addDetail = (newValue) => {
//     // Update the state by providing a new object
//     setDetail((prevDetail) => ({
//       ...prevDetail, // Spread the existing properties of the detail state
//       ...newValue, // Spread the properties of the new value
//     }));

//     // Note: Since setDetail is asynchronous, the updated state may not be immediately reflected in the console.log below.
//     console.log("fromprov: ", detail);
//   };

//   return (
//     <ClassContext.Provider value={{ detail, addDetail }}>
//       {children}
//     </ClassContext.Provider>
//   );
// };

// export default ClassProvider;
