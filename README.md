# Password Generator

This JavaScript function generates passwords of various formats based on the specified options. You can customize the length and character sets included in the password.

# install
$ npm i generate-password --save

## Usage

## Function Signature
>>> function generatePassword(length, option)

## Parameters

1: length (number): The length of the password to be generated.
2: option (object): An object specifying the character sets to include in the password.

## Options Object

The options object can have the following boolean properties:

1: 'includeNumbers' (boolean): Whether to include numeric characters (e.g,'0-9').
2: 'includeAlphabet' (boolean): Whether to include alphabetic characters (e.g,'a-z, A-Z').
3: 'includeSpecial' (boolean): Whether to include special characters (e.g, '!@#$%^&*()').
4: 'includeupperCase' (boolean): Whether to include upperCase characters (e.g, 'A-Z').
5: 'includelowerCase' (boolean): Whether to include lowerCase characters (e.g, 'a-z')

## Returns

* 'password' (string): The generated password.

# Example Usage
// Import or include the function in your script

// Example 1: Generate a 10-character password with numbers, alphabet, special, upperCase and lowerCase characters
  const option1 = {
    includeNumbers: true,
    includeAlphabet: true,
    includeSpecial: true,
    includelowerCase: true,
    includeupperCase: true,
  };
  const password = generatePassword(10, option1);
  console.log(password);
  // 'H8?2IihD5*'

  

  // Example 2: Generate an 8-character password with numbers only
  const option2 = {
    includeNumbers: true,
  };
  const password = generatePassword(8, option2);
  console.log(password);
// '49076379'
  


   // Example 2: Generate an 8-character password with Alphabets only
  const option3 = {
    includeAlphabet: true,
  };
  const password = generatePassword(8, option3);
  console.log(password);
// 'lNxUYohD'



 // Example 2: Generate an 8-character password with special characters only
  const option4 = {
    includeSpecial: true,
  };
  const password = generatePassword(8, option4);
  console.log(password);
// ')%};|]@$'



 // Example 2: Generate an 8-character password with lowerCase only
  const option5 = {
    includelowerCase: true,
  };
  const password = generatePassword(8, option5);
  console.log(password);
// 'nyknlzps'



 // Example 2: Generate an 8-character password with upperCase only
  const option6 = {
    includeupperCase: true,
  };
  const password = generatePassword(8, option6);
  console.log(password);
// 'NQVJSAAB'


## License

This project is licensed under the ISC License.


This README file provides an overview of the `generatePassword` function, detailing its usage, parameters, options, and example usages.

