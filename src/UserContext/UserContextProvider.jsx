import React , {useState , useRef , useEffect } from 'react'

import User_context from './User_context'

const UserContextProvider = ({children}) => {
    const [username , setUsername] = useState("A")
    


    useEffect(() => {
        // const val = set_username("Arjun Khatri")
        // setUsername(val)
    } , [username])

  return (
    <User_context.Provider value={{ username , setUsername }}>
    {children}
    </User_context.Provider>
  )
}

export default UserContextProvider
