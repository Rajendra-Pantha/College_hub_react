


const get_group_members = async (subject_name) => {
    const token = localStorage.getItem("Campus_Token")
    const group_lists = await fetch(
        `http://localhost:8080/message/group_members/${subject_name}`,
        {
            method : "GET",
            headers:{
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json"
            }
        }
        )
        const group_members = await group_lists.json()
        console.log("groupmember lists",group_members)

        return group_members
}

export default get_group_members