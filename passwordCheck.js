function StringChallenge(str) { 
  // one capital letter, at least one number, one symbol, between 7 and 31 characters, 
  // cannot have password word
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