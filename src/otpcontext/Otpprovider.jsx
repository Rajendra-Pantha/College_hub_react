import React, { useState } from 'react'
import OtpContext from './OtpContext'

const Otpprovider = ({children}) => {
    const[isLogin,setIslogin]=useState(true)
   // const[identity,setIdentity]=useState("")
   const[isredirecedfromregistration, setRegistration]=useState(false)
   const[isredirecedfromlogin, setLogin]=useState(false)
   
  return (
    <OtpContext.Provider value={{isLogin,setIslogin,isredirecedfromregistration, setRegistration}}>{children}</OtpContext.Provider>
  )
}

export default Otpprovider