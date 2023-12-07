import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({asa,user,img}) => {
  return (
    <Link to={asa}>
       
          <div className='text-center text-black rounded-3xl border-2  shadow-slate-600 shadow-lg border-[#6DA570]  bg-white px-9 py-2 font-semibold hover:-translate-y-1'>
           
              <img className='rounded-2xl md:w-10  md:h-10 md:mx-1 md:my-1 w-24 h-16' src={img} alt='student' />
              {user}
          </div>
          </Link>
  )
}

export default Card