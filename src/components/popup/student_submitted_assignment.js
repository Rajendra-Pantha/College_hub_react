

const view_student_submitted_assignment = async (assign_student) =>{
    const token = localStorage.getItem("Campus_Token")
    const assignment_detail = await fetch(
        `http://localhost:8080/assignment/view_student_submitted_assignment/${assign_student}`,
        {
            method : "GET",
            headers : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
    )
    // view_student_submitted_assignment/:assignId_studentId
    const student_submitted_assignment = await assignment_detail.json()
    console.log("got valued " , student_submitted_assignment)
    return student_submitted_assignment
}

export default view_student_submitted_assignment