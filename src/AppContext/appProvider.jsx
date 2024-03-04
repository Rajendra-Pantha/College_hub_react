import React, { useEffect , useRef } from 'react'
import appContext from './appContext'
import socket_io from "../../src/socket.jsx"

const AppProvider = ({children}) => {
  // const token = localStorage.getItem("Campus_Token")
  let socket 
      const initilize_socket = async () => {
        socket = socket_io()
        return socket
      } 
      
  return (
    <appContext.Provider value={{initilize_socket}}>
    {children}
    </appContext.Provider>
  )
}

export default AppProvider
