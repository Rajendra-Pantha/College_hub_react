import React from 'react'
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import { Popover } from '@headlessui/react'
const Sidebarsteacher = () => {
    let nonhide;
    let hidebar;
    const[slide,setSlide]=useState(true);
    function fun(){
       setSlide(!slide) 
      
    }
    if (slide===true){
     
        nonhide= 'h-[calc(100vh-4rem)] bg-[#D2DDF3] w-56  hidden   md:block ';
     hidebar='text-3xl absolute  px-4 -right-12 md:hidden ';
       }
       else{
   

     nonhide= 'h-[calc(100vh-4rem)] bg-[#D2DDF3] w-56 ';

     hidebar='text-3xl absolute  h-[calc(100vh-4rem)]  mr-8  px-4 -right-12 md:hidden';
       }

       //.................
    
       const DASHBOARD_SIDEBAR_LINKS = [
        {
          key: 'dashboard',
          label: 'Dashboard',
          path: 'dashboard',
          icon: <Icon icon="lucide:home" />
          
        },
        {
          key: 'classes',
          label: 'Classes',
          path: 'classes',
          icon: <Icon  icon="raphael:books" />
        },
        {
          key: 'messsage',
          label: 'Message',
          path: 'messagestds',
          icon: <Icon icon="wpf:message-outline" />
          
        },
        {
          key: 'assignments',
          label: 'Assignments',
          path: 'assignments',
          icon: <Icon icon="maki:library" />
         
        },
   
       
      ]
      
       //.................
    
  return (
    <div className='relative flex '>
    <div className= {nonhide}>
        <div className='flex  justify-center  items-center w-56 h-[calc(100vh-4rem)] '>
            <ul className=' font-bold w-56 flex flex-col '>
            {DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
        {/* <Link to="/dashboardstds">   <li className='py-4' >Dashboard</li> </Link> 
         <Link to="subjectsstds"> <li  className='py-4'>Subjects</li> </Link> 
         <Link to="messagestds"> <li  className='py-4'>Message</li> </Link> 
         <Link to="assignmentsstds">  <li  className='py-4'>Assignments</li>  </Link> 
          <Link to="settingstds"> <li  className='py-4'>Settings</li> </Link>  */}
            
            <Popover className="relative">
     
     <>
       
       <Popover.Button className='focus:outline-none'>
       
       <div className='flex items-center gap-4 py-4 w-56 px-4  hover:bg-blue-100 hover:text-green-800'><Icon className='text-4xl' icon="uiw:setting-o" /><span >Settings</span></div>
       </Popover.Button>
       <Popover.Panel className="absolute left-44  z-10 w-52 shadow-sm rounded-lg shadow-black bg-blue-50 -mt-20">

<div className='  px-4 py-3  text-sm'>
<div >
      
        <div className='block border-b-2  mb-4 p-2 border-gray-300 text-center text-sm font-semibold '>
          Change Username
        </div>

        <div className='block border-b-2   mb-4 p-2 border-gray-300 text-center text-sm font-semibold '>
          Change Password
        </div>

        <div className='block border-b-2  mb-4 p-2  border-gray-300 text-center text-sm font-semibold '>
        Terms and Conditions   </div>

        <div className='block   border-gray-300 text-center p-2 text-sm font-semibold '>
          Log Out
        </div>
      </div>
</div>
   
       </Popover.Panel>
      </>
 
 </Popover>
          </ul>
        </div>
        
    </div>
   
    <div className={hidebar} onClick={fun}><Icon icon="heroicons:bars-4-solid" /></div>
    



</div>
  )
}
function SidebarLink({ link }) {
	

	return (
		<NavLink className={({isActive})=>`py-4 w-56 px-4 ${isActive?"text-green-800 ":"text-black"} flex   items-center gap-4 hover:bg-blue-100 hover:text-green-800 `}
			to={link.path}> <div className='text-4xl'>{link.icon}</div>
<div>{link.label}</div>

		</NavLink>
	)
}

export default Sidebarsteacher