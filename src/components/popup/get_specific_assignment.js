

const get_specific_assignment = async (s_id) => {
    const token = localStorage.getItem("Campus_Token")
    const assignment_detail = await fetch(
        `http://localhost:8080/assignment/get_assignment_detail/${s_id}`,
        {
            method : "GET",
            headers : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
    )

    const detail = await assignment_detail.json()
    return detail
}


export default get_specific_assignment