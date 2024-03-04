const SubjectName = async () => {
   
    const token = localStorage.getItem('Campus_Token');
    
    const response = await fetch('http://localhost:8080/message/getmessage', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    console.log(response);

    const formattedResponse = await response.json();

    console.log(formattedResponse);
};

export default SubjectName;
