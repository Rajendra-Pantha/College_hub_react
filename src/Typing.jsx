import React from 'react'
import "./typing.css"
const Typing = () => {
  return (
  <>
  <div className='animation'>
    {/* <div className='user'></div> */}
    <img src='https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=1024x1024&w=is&k=20&c=iX0adGZVKv9wS5yrs0-hpFsJBnRAacZa1DcDZ0I9Bqk=' className='user' />
    <div className="typing-indicator">
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </div>
  </div>
    
  </>
  )
}

export default Typing
