const Otpfun=async (otp,type)=>{
 //  console.log(type)
console.log(otp)
let  got_otp = false

const response =await fetch(`http://localhost:8080/auth/${type}/otp`,{
    method:'POST',
    
     headers:   {
        'Content-Type':'application/json'
     },
     body:JSON.stringify({value:otp}),
    
})
const response_token=await response.json();
console.log(response_token)
   if(response_token.token){
      console.log("got opt")
      localStorage.setItem("Campus_Token" , response_token.token)
      got_otp = true
   }else{
      got_otp = false 
   }

   
   return got_otp

}
export default Otpfun