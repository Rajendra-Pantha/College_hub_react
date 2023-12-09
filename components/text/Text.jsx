import React from 'react'
import './Text.css'

const Text = () => {
  return (
   
    <div className='  md:relative  md:h-screen  md:bg-[#859cf176] md:w-1/3 md:flex  md:items-center   bg-[#859cf176] flex  items-center px-5  h-28	'>
     
      <div className='md:absolute md:right-0 md:-ml-0.5 md:w-0.5 md:h-5/6  md:bg-[#6DA570] '> </div>
     
      <div>
        <div className=' md:ml-0 md:px-3  lg:px-8 md:font-bold md:text-5xl md:block md:text-black font-bold text-3xl inline mr-3 camptext '>CAMPUS</div>
        <div className='md:px-3 lg:px-8 md:block md:font-bold md:text-5xl md:text-black font-bold text-3xl inline hubtext'>HUB</div>
        {/* <hr className='md:hidden divide-solid '/> */}
      </div>
    </div>
   
  )
}

export default Text