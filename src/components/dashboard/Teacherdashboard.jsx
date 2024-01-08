import React, { useContext, useState , useEffect} from 'react';
import Popup from '../popup/Popup';
import AssignmentContext from '../../AssignmentContext/AssignmentContext';
import { Icon } from '@iconify/react';
import db from "../../data/subject_db.json";
import { Link , useNavigate} from 'react-router-dom';
const Teacherdashboard = () => {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const {data}= useContext(AssignmentContext);
  // const handleCardClick = (item) => {
  //   setSelectedItem(item);
  //   setPopupVisibility(!isPopupVisible);
  // };
  const navigate =useNavigate();
  useEffect(()=>{
  if(localStorage.getItem("Campus_Token")===null){
    navigate("/");
  }
  },[])
  return (
    <div className=' mt-8 pl-2 w-screen relative'>
       {isPopupVisible  && (
        <div
          className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 -z-1'
          // onClick={() => setPopupVisibility(false)} 
        />
      )}
       <div className='text-3xl font-semibold text-gray-600 ml-8 mb-2 '> Recent Assignment</div>
      <div className='bg-gray-400 h-px mb-6 mx-8'/>
      <div className='flex flex-wrap gap-8   mb-12 ml-8 '>
        {data.map((item) => (
          <Link to={`/teacher/assignments/popup/${item.id}`}
            className="bg-[#FAFAFA]  -z-1 cursor-pointer hover:scale-105 w-[22%] rounded-lg  p-4 shadow-gray-400 shadow-md"
            key={item.id}
          
          >
            <div className="relative text-[18px] text-[#435585] font-bold ">
              {item.subject}
            </div>

            <div className="  p-4 rounded-lg">
              <div className="flex gap-2">
                <div>
                  <Icon className=" h-32 w-44 text-[#d2691e]" icon="bx:file" />
                </div>
              </div>
            </div>

            <div className="mt-2 flex gap-4">
              <div className=" h-10 w-14 rounded-full bg-[#008080] flex justify-center items-center">
                <Icon
                  className="  text-xl "
                  icon="mingcute:user-2-fill"
                  color="white"
                />
              </div>

              <div className="flex gap-2 bg-[#008080] rounded-lg w-full ml-0.5 justify-center items-center">
                <div className="text-white font-bold">Bhuwan Panthi</div>
              
              </div>
               
       
      
            </div>
          </Link>
        ))}
      </div>
        {/* {isPopupVisible && selectedItem && <Popup item={selectedItem} onClose={() => setPopupVisibility(false)} />} */}
         
        <div className='text-3xl font-semibold text-gray-600 ml-8 mb-2 mt-8'>Messages</div>
      <div className='bg-gray-400 h-px mb-6 mx-8'/>
      <div className='flex flex-wrap gap-8 ml-8 mt-4 '>
    {
     
    db["Sem_1"].map((subj,i)=>
     {
    
      return(
        
        <Link  to={`/teacher/messagestds/chatbox/${i}`}> 
        <div key={i}>
          
          <div className=' border-2  px-4 py-2 text-gray-600 h-32 w-48 justify-center flex items-center font-bold text-xl rounded-lg shadow-gray-200 shadow-lg hover:border-2 hover:border-[#d2691e] hover:scale-105 hover:text-black cursor-pointer'>{subj}</div>
          </div>
          </Link>
      )
      
    }
      )
  }
     
      </div>
    </div>
  
  )

}

export default Teacherdashboard