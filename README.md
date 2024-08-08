# Generate Password

This JavaScript function generates passwords of various formats based on the specified options. You can customize the length and character sets included in the password.

# install
> $ npm i easy_random_password --save

## Usage
### Function Signature 
> function generatePassword(length, option)

## Parameters

* length (number): The length of the password to be generated.

* option (object): An object specifying the character sets to include in the password.

## Options Object

### The options object can have the following boolean properties:

* 'includeNumbers' (boolean): Whether to include numeric characters (e.g,'0-9')

* 'includeAlphabet' (boolean): Whether to include alphabetic characters (e.g,'a-z, A-Z')

* 'includeSpecial' (boolean): Whether to include special characters (e.g, '!@#$%^&*()')

* 'includeupperCase' (boolean): Whether to include upperCase characters (e.g, 'A-Z')

* 'includelowerCase' (boolean): Whether to include lowerCase characters (e.g, 'a-z')

## Returns
> 'password' (string): The generated password.

# Example Usage
> Import or include the function in your script
### CommonJS (Node.js) 
```javascript
  const generatePassword = require('easy_random_password');
```
### ES Module (ES6+) 
```javascript
  import { generatePassword } from 'easy_random_password';
```

### Example 1: This example Generate a random password by just specifying the length of the character to be included.
```javascript
  const password = generatePassword(10);
  console.log(password);
  // 'H8?2IihD5*'
```
#### Note: If the option parameter is not included, it generates a password using a default value of true for all options 
  

### Example 2: Generate a 10-character password with numbers, alphabet, special, upperCase and lowerCase characters
```javascript
  const option = {
    includeNumbers: true,
    includeAlphabet: true,
    includeSpecial: true,
    includelowerCase: true,
    includeupperCase: true,
  };
  const password = generatePassword(10, option);
  console.log(password);
  // 'H8?2IihD5*'
```

  ### Example 3: Generate an 8-character password with numbers 
  
  ```javascript
  const option = {
    includeNumbers: true,
  };
  const password = generatePassword(8, option);
  console.log(password);
// '49076379'
```
  


 ### Example 4: Generate an 8-character password with Alphabets only
 ```javascript
  const option = {
    includeAlphabet: true,
  };
  const password = generatePassword(8, option);
  console.log(password);
// 'lNxUYohD'
```


 ### Example 5: Generate an 8-character password with special characters only
 ```javascript
  const option = {
    includeSpecial: true,
  };
  const password = generatePassword(8, option);
  console.log(password);
// ')%};|]@$'
```



 ### Example 6: Generate an 8-character password with lowerCase only
 ```javascript
  const option = {
    includelowerCase: true,
  };
  const password = generatePassword(8, option);
  console.log(password);
// 'nyknlzps'
```



 ### Example 7: Generate an 8-character password with upperCase only
 ```javascript
  const option = {
    includeupperCase: true,
  };
  const password = generatePassword(8, option);
  console.log(password);
// 'NQVJSAAB'
```


## License

This project is licensed under the ISC License.


> This README file provides an overview of the `generatePassword` function, detailing its usage, parameters, options, and example usages.

## Contact
If you have any questions or feedback, please feel free to contact me at ijarwisdom@gmail.com or send a dm on linkedIn: http://linkedin.com/in/wisdom-michaels-320a99321.

## Github 
This link bellow will redirect you to my Github page if you want to read more about this package.
> https://github.com/wisdommichaels/Password_generator
