

const get_specific_assignment_student_lists = async (s_id) => {

    const token = localStorage.getItem("Campus_Token")
    const assignment_detail = await fetch(
        `http://localhost:8080/assignment/get_list_students/${s_id}`,
        {
            method : "GET",
            headers : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
    )

    const student_list = await assignment_detail.json()
    console.log("student list is got as" , student_list)
    return student_list
}

export default get_specific_assignment_student_lists