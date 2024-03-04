// import {useNavigate} from "react-router-dom"

const ClassGroup= async (detail)=>{
// const navigate = useNavigate()
console.log(detail)
const token = localStorage.getItem('Campus_Token')
console.log(token)
const response = await fetch('http://localhost:8080/message/creategroup',{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`,
    },
    body:JSON.stringify(detail),
});

const data = await response.json();
if(data._id){
    alert( `Group created as ${data.subject}`)
    // navigate("http://localhost:5173/teacher/messagestds")
    window.location.href = "http://localhost:5173/teacher/messagestds"
}
else if(data.err){
    alert( `Group already exists`)
}
else if(data.msg){
    alert(data.msg)
}
}
export default ClassGroup