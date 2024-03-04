import React , {useState , useEffect} from "react";
import db from "../../data/subject_db.json";
const Subjects = () => {

  const  [subject, setSubject] = useState([])


  const set_subject_lists_state = (subjects_array) => {
    console.log("got inside the function" , subjects_array)


setSubject(subjects_array)

  }

  const fetch_subject_subjects = async () => {
    const token = localStorage.getItem('Campus_Token');
    const subject_response = await fetch("http://localhost:8080/subject/mysubjectDashboard" ,
    {
        method : "GET",  // or 'PUT'
        headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })

    const subject_lists = await subject_response.json()
    set_subject_lists_state(subject_lists)
  }



useEffect( () => {
 fetch_subject_subjects()

} , [])

  return (
    <div className="flex flex-wrap gap-6 mt-40 w-[80%] ml-5">
      {subject && subject.map((subj, i) => {
        return (
          <div key={i}>
            <div className=" border-2  px-4 py-2 text-gray-600 h-52 w-52 justify-center flex items-center font-bold text-xl rounded-lg shadow-gray-200 shadow-lg hover:border-2 hover:border-[#d2691e] hover:scale-105 hover:text-black cursor-pointer">
              {subj}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Subjects;
