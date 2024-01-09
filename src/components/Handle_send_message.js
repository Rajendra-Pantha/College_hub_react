

const handle_sent_message = async(message_body) => {
    const token = localStorage.getItem("Campus_Token")
    const message_request = await fetch(
        "http://localhost:8080/message/savemessage",
        {
            method : "POST",
            headers:{
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json"
            },
            body :JSON.stringify(message_body)
        }
        )
        const res = await message_request.json()
        console.log("sent message is " , res)

}

export default handle_sent_message

