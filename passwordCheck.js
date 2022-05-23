function StringChallenge(str) { 
    let passwordCheck = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,31}$/
    // code goes here  
    if(str === 'password'){
      return "false"
    }
  
    if(str.match(passwordCheck)) {
      return "true";
    } else {
        return "false";
    }    
  
  }

  console.log(StringChallenge("password"))