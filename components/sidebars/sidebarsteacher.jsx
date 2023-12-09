import React from 'react'
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const Sidebarsteacher = () => {
    let nonhide;
    let hidebar;
    const[slide,setSlide]=useState(true);
    function fun(){
       setSlide(!slide) 
      
    }
    if (slide===true){
     
        nonhide= 'h-[calc(100vh-4rem)] bg-[#D2DDF3] w-40  hidden   md:block ';
     hidebar='text-3xl absolute  px-4 -right-12 md:hidden ';
       }
       else{
   

     nonhide= 'h-[calc(100vh-4rem)] bg-[#D2DDF3] w-40 ';

     hidebar='text-3xl absolute  h-[calc(100vh-4rem)]  mr-8  px-4 -right-12 md:hidden';
       }

       //.................
    
       const DASHBOARD_SIDEBAR_LINKS = [
        {
          key: 'dashboard',
          label: 'Dashboard',
          path: '/teacher',
          
        },
        {
          key: 'classes',
          label: 'Classes',
          path: 'classes',
          
        },
        {
          key: 'messsage',
          label: 'Message',
          path: 'messagestds',
          
        },
        {
          key: 'assignments',
          label: 'Assignments',
          path: 'assignments',
         
        },
   
        {
          key: 'settings',
          label: 'Settings',
          path: 'setting',
          
        }
      ]
      
       //.................
    
  return (
    <div className='relative flex '>
    <div className= {nonhide}>
        <div className='flex  justify-center  items-center w-40 h-[calc(100vh-4rem)] '>
            <ul className=' font-bold w-40 flex flex-col '>
            {DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
        {/* <Link to="/dashboardstds">   <li className='py-4' >Dashboard</li> </Link> 
         <Link to="subjectsstds"> <li  className='py-4'>Subjects</li> </Link> 
         <Link to="messagestds"> <li  className='py-4'>Message</li> </Link> 
         <Link to="assignmentsstds">  <li  className='py-4'>Assignments</li>  </Link> 
          <Link to="settingstds"> <li  className='py-4'>Settings</li> </Link>  */}
              
          </ul>
        </div>
        
    </div>
   
    <div className={hidebar} onClick={fun}><Icon icon="heroicons:bars-4-solid" /></div>
    



</div>
  )
}
function SidebarLink({ link }) {
	

	return (
		<Link className='py-4 w-40 px-4 hover:bg-blue-100 '
			to={link.path}>
{link.label}
		</Link>
	)
}

export default Sidebarsteacher