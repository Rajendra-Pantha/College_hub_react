

const load_chat_messages = async (subject) =>{
    const token = localStorage.getItem("Campus_Token")
    const message_response = await fetch(
        "http://localhost:8080/message/getmessage",
        {
            method : "POST",
            headers:{
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({subjectName:subject})
        }
        )
        const messages = await message_response.json()
        console.log(messages)
        return messages
}

export default load_chat_messages
