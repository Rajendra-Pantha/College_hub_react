const createAssignment =async (assignmentdetails) =>{
    const token = localStorage.getItem("Campus_Token")
    const Response = await fetch("http://localhost:8080/assignment/createAssignment",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`,
      },
      body:JSON.stringify(assignmentdetails)
    });
    console.log("The response is ", Response)
    const data = await Response.json();
    return data
}
export default createAssignment;