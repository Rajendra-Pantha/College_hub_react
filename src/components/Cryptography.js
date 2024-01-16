
const encrypt = (str, key) => {
    console.log("got string" , str)
    let encrypted = "";
    for (let i = 0; i < str.length; i++) {
      let ascii = str[i].charCodeAt();
      if (ascii >= 65 && ascii <= 90) {
        encrypted += String.fromCharCode(((ascii + key - 65 + 26) % 26) + 65);
      } else if (ascii >= 97 && ascii <= 122) {
        encrypted += String.fromCharCode(((ascii + key - 97 + 26) % 26) + 97);
      } else {
        encrypted += str[i];
      }
    }
  
    return encrypted;
  }

  const decrypt = (str, key) => {
    let decrypted = "";
    for (let i = 0; i < str.length; i++) {
      let ascii = str[i].charCodeAt();
      if (ascii >= 65 && ascii <= 90) {
        decrypted += String.fromCharCode(((ascii - key - 65 + 26) % 26) + 65);
      } else if (ascii >= 97 && ascii <= 122) {
        decrypted += String.fromCharCode(((ascii - key - 97 + 26) % 26) + 97);
      } else {
        decrypted += str[i];
      }
    }
  
    return decrypted;
  };

  export {encrypt , decrypt}

// const a =encrypt("thIs is some message" , 3)
// console.log("Encryted " , a)
// const b = decrypt(a , 3)
// console.log("decrypted" , b)