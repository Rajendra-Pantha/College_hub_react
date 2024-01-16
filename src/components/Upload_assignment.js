

const Upload_assignment = async ( file ,  assignmen_id)=>{
    const token = localStorage.getItem("Campus_Token")
    const obj = new FormData();
    obj.append("file", file);
    const list = await fetch(
        `http://localhost:8080/assignment/submitAssignment/${assignmen_id}`,
        {
          method: "Post",
          headers:{
            "Authorization" : `Bearer ${token}`
        },
        body : obj
        }
      )

    const response = await list.json()
    console.log("the got response after submit" , response)
    return response
    // console.log("file and id got " , file , assignmen_id)
}

export default Upload_assignment