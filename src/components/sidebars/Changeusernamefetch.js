const UsernameChange=async (usernamedetail)=>{
    console.log(usernamedetail)
    const token = localStorage.getItem('Campus_Token')
const response = await fetch('http://localhost:8080/setting/changeUsername',{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`,
    },
    body:JSON.stringify(usernamedetail),
});
console.log(response)
const formattedResponse = await response.json();
console.log(formattedResponse)
}
export default UsernameChange;