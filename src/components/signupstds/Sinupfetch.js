const Registration=async(obj,users)=>{
  // console.log(obj)
  
  let user=users.toLowerCase();
  let isRegister;
  
 const response = await fetch(`http://localhost:8080/auth/register/${user}`,{
     method:"POST",
     headers:{
   'Content-Type':'application/json'
     },
     body:JSON.stringify(obj)
   })
   //.then(res=>res.json()).then(value=>console.log(value))
   if(response.ok===true){
   await response.json()
  isRegister=true;
   }
   else{
   
    isRegister=false;
   }
   return isRegister;
}
export default Registration