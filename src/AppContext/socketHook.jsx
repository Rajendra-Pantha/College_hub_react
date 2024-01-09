
// import io from "socket.io-client";
// let socket_ref 
// const Initilize_socket = () => {
//     console.log("called")
//  socket_ref = io.connect("http://localhost:8080", {
//   transports: ["websocket"],
//   cors: {
//     origin: "http://127.0.0.1:5173",
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });
// socket_ref.on("connection" , () => {
//     console.log("connected with" , socket_ref.id)
// })
// }
// const get_socket = () => {
//     return socket_ref
// }
// export {Initilize_socket , get_socket}

import { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const useSocket = (serverUrl) => {
    console.log("called")
  const socketRef = useRef();
useEffect(()=>{
    // Create a new socket connection
    socketRef.current = io(serverUrl , {
        transports: ["websocket"],
        cors: {
          origin: "http://127.0.0.1:5173",
          methods: ["GET", "POST"],
          credentials: true,
        }
  })
socketRef.current.on("connect" , () =>{
  console.log("connected",socketRef.current.id)
})
} , [socketRef])
  return socketRef;
};

export default useSocket;