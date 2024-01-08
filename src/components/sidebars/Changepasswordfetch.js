const passwordChangefun=async (passwordDetail)=>{
    console.log(passwordDetail)
    const token = localStorage.getItem('Campus_Token')
const response = await fetch('http://localhost:8080/setting/changePassword',{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`,
    },
    body:JSON.stringify(passwordDetail),
});
console.log(response)
const formattedResponse = await response.json();
console.log(formattedResponse)
}
export default passwordChangefun;