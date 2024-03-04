const Logins =async(obj,users)=>{
console.log(obj);
let user=users.toLowerCase();
console.log(user)
let islogins;
try {
    const response = await fetch(`http://localhost:8080/auth/login/${user}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    console.log("this is data",response)
    if (response.ok===true) {
   
      const data = await response.json();
   
      console.log(data)

     islogins=true;
    
    } else {
      console.error('Login failed:', response.statusText);
     islogins= false;
    }
  
  } catch (error) {
  
    console.error('Login failed:', error);
    
  }
  return islogins;
}

export default Logins