import React , {useContext , useState , useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Sidebarsteacher from './components/sidebars/sidebarsteacher'
import AssignmentContext from './AssignmentContext/AssignmentContext'
import Slice_username from "./Slice_username.js"
const Layout3 = () => {
const {initilize_teacher_default_detail} = useContext(AssignmentContext)
const [username , setUsername] = useState("AP")
useEffect(() => {
  const get_teacher_data = async () => {
    const data = await initilize_teacher_default_detail()
    const sliced_data = Slice_username(data)
    setUsername(sliced_data)
  }
  get_teacher_data()
} , [])
  return (
    <>
    <Header username={username}/>
    
    <div className='flex '>
    <Sidebarsteacher/>
    <Outlet/>
    </div>
   
    </>
  )
}

export default Layout3