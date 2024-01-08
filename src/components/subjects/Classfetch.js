const ClassGroup= async (detail)=>{
console.log(detail)
const token = localStorage.getItem('Campus_Token')
const response = await fetch('http://localhost:8080/message/creategroup',{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiNjU5NmNjNmZkNWFmMGJmNGJkMWQ2YTAzIiwidXNlclR5cGUiOiJUZWFjaGVyIiwiaWF0IjoxNzA0MzgxNTUxfQ.pMB9QW1amCUk9Q8nAq_AZiOHqrW5SgQxD4Gjem8F0uY`,
    },
    body:JSON.stringify(detail),
});
if (response.ok) {
    const data = await response.json();
    console.log(data);
} else {
    console.error('Error:', response.status, response.statusText);
}
}
export default ClassGroup