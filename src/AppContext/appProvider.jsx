import React, { useEffect } from 'react'
import appContext from './appContext'

const appProvider = ({children}) => {
    useEffect(()=>{
        console.log("this is from classprovider")
    })
    const test = () => { 
        console.log("this is from classprovider test")
    }
  return (
    <appContext.Provider value={{test}}>
    {children}
    </appContext.Provider>
  )
}

export default appProvider
