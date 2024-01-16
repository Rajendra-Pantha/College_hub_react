import React , {useState , useContext , useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Sidebars from './components/sidebars/Sidebars'
import AssignmentContext from './AssignmentContext/AssignmentContext'
import Slice_username from "./Slice_username.js"
const Layout2 = () => {
  const {initilize_student_default_detail} = useContext(AssignmentContext)
  const [username , setUsername] = useState("RP")
  useEffect(() => {
    const get_student_data = async () => {
      const data = await initilize_student_default_detail()
      const sliced_data = Slice_username(data)
      setUsername(sliced_data)
    }
    get_student_data()
  },[])
  return (
    <>
    <Header username = {username}/>
    
    <div className='flex '>
    <Sidebars/>
    <Outlet/>
    </div>
   
    </>
  )
}

export default Layout2