import React, { useEffect , useContext , useState , useRef} from 'react';
import AssignmentContext from '../../AssignmentContext/AssignmentContext';
import { Link , useNavigate} from 'react-router-dom';
import { Icon } from '@iconify/react';
const Assignments = () => {
  const teachers = useRef(null)
  const navigate =useNavigate();
  const [assignment_list, setAssignmentList] = useState([]);
  const { initilize_teacher_default_detail } = useContext(AssignmentContext);
  useEffect(()=>{
    const assignmentFetch=async()=>{
      const { data, teacher } = await initilize_teacher_default_detail(false);
      
      teachers.current = teacher.t_name
      setAssignmentList([]);
      for (let i = 0; i < data.length; i++) {
        setAssignmentList((prevData) => [...prevData, data[i]]);
      }
      
    }
  if(localStorage.getItem("Campus_Token")===null){
    navigate("/");
  }
  assignmentFetch();
  },[])
  return (
    <div className=' pt-8 ml-8 mt-20'>
      
      <div className='flex flex-wrap gap-10 '>
        {assignment_list[0] && assignment_list.reverse().map((item) => <div className='bg-[#FAFAFA] cursor-pointer hover:scale-105 w-[22%] rounded-lg  p-4 shadow-gray-400 shadow-md flex flex-col justify-evenly' key={item._id}>
          <Link to={`details/${item._id}`}><button className='text-[18px] text-[#435585] font-bold '>{item.subject}</button></Link>
          <div className='  p-4 rounded-lg'>
            <div className='flex gap-2'>
              <div>
              <Icon className=' h-32 w-44 text-[#d2691e]' icon="bx:file" />
              </div>
       
            </div>


          
             

           
          </div>

          

          <div className='mt-2 flex gap-4'>
            <div className=' h-10 w-14 rounded-full bg-[#008080] flex justify-center items-center'><Icon className="  text-xl " icon="mingcute:user-2-fill" color='white' /></div>
            <div className='flex gap-2 bg-[#008080] rounded-lg w-full ml-0.5 justify-center items-center'>
             
              <div className='text-white font-bold'>{teachers.current}</div>
            </div>
          </div>

        </div>)
        }
      </div>
    </div>
  )
}

export default Assignments