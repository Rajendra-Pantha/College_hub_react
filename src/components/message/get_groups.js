


const fetch_teacher_group = async () => {
    const token = localStorage.getItem('Campus_Token');
    const group_response = await fetch("http://localhost:8080/message/group" ,
    {
        method : "GET",  // or 'PUT'
        headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    }
     )
     const group_list = await group_response.json()
     console.log("group list" , group_list) 

     return group_list.filter(item => item.subject !== "")
}

export default fetch_teacher_group