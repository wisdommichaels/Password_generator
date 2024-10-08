module.exports.generatePassword = function (length, option) {
    const numericChars = '0123456789';
    const alphabeticChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const  lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    // initialize all characters in a variable call characters

    let characters = '';

     // check the condition of each option to return a boolean base on the value
     
    if (!option) {
      characters+= numericChars + alphabeticChars + specialChars + upperCaseChars + lowerCaseChars
    } else { 
      if (option.includeNumbers) {
        characters += numericChars;
      }
      if (option.includeAlphabet) {
        characters += alphabeticChars;
      }
      if (option.includeSpecial) {
        characters += specialChars;
      }
      if (option.includeupperCase) {
        characters += upperCaseChars;
      }
      
      if (option.includelowerCase) {
        characters += lowerCaseChars;
      }
    }
      
      if (characters.length === 0) {
        throw new Error('At least one character set should be included');
      }
      
      // create a variable to get the generated password

      let password = '';

      // loop through the length of the password

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }
  
    return password;
  }

  const password = generatePassword(10);
  console.log(password);