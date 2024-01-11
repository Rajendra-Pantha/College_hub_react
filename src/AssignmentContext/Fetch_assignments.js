

const Fetch_assignments = async() => {
    const token = localStorage.getItem("Campus_Token")
    const assignment = await fetch(
        "http://localhost:8080/dashboard/home",
        {
        method : "GET",
        headers:{
            "Authorization" : `Bearer ${token}`,
            "Content-Type" : "application/json"
        },
        })

    const assignment_list = await assignment.json()
    console.log(assignment_list)
    return assignment_list
}

export default Fetch_assignments