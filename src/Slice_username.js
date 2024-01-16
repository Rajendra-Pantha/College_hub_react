


const Slice_username = (person_name) => {
    console.log("got username asssed" , person_name)
    const user = person_name.match(/\b\w/g )
    if(user.length == 2){
        console.log("first if clled")
        return (user.join('').toUpperCase())
    }
    else if(user.length > 2){
        const temp = person_name.match(/\b\w/g )
        const temp_user = `${temp[0]}${temp[temp.length-1]}`
        return (temp_user.toUpperCase())
    }else {
        console.log("last else clled")
        return (person_name[0].toUpperCase())
       
        
    }
}

export default Slice_username