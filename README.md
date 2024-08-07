# Password Generator

This JavaScript function generates passwords of various formats based on the specified options. You can customize the length and character sets included in the password.

# install
> $ npm i generate-password --save

## Usage
### Function Signature 
> function generatePassword(length, option)

## Parameters

. length (number): The length of the password to be generated.

. option (object): An object specifying the character sets to include in the password.

## Options Object

### The options object can have the following boolean properties:

. 'includeNumbers' (boolean): Whether to include numeric characters (e.g,'0-9')

. 'includeAlphabet' (boolean): Whether to include alphabetic characters (e.g,'a-z, A-Z')

. 'includeSpecial' (boolean): Whether to include special characters (e.g, '!@#$%^&*()')

. 'includeupperCase' (boolean): Whether to include upperCase characters (e.g, 'A-Z')

. 'includelowerCase' (boolean): Whether to include lowerCase characters (e.g, 'a-z')

## Returns
> 'password' (string): The generated password.

# Example Usage
> Import or include the function in your script

### Example 1: Generate a 10-character password with numbers, alphabet, special, upperCase and lowerCase characters
```javascript
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
```

  

  ### Example 2: Generate an 8-character password with numbers 
  
  ```javascript
  const option2 = {
    includeNumbers: true,
  };
  const password = generatePassword(8, option2);
  console.log(password);
// '49076379'
```
  


 ### Example 3: Generate an 8-character password with Alphabets only
 ```javascript
  const option3 = {
    includeAlphabet: true,
  };
  const password = generatePassword(8, option3);
  console.log(password);
// 'lNxUYohD'
```


 ### Example 4: Generate an 8-character password with special characters only
 ```javascript
  const option4 = {
    includeSpecial: true,
  };
  const password = generatePassword(8, option4);
  console.log(password);
// ')%};|]@$'
```



 ### Example 5: Generate an 8-character password with lowerCase only
 ```javascript
  const option5 = {
    includelowerCase: true,
  };
  const password = generatePassword(8, option5);
  console.log(password);
// 'nyknlzps'
```



 ### Example 6: Generate an 8-character password with upperCase only
 ```javascript
  const option6 = {
    includeupperCase: true,
  };
  const password = generatePassword(8, option6);
  console.log(password);
// 'NQVJSAAB'
```


## License

This project is licensed under the ISC License.


> This README file provides an overview of the `generatePassword` function, detailing its usage, parameters, options, and example usages.

## Contact
If you have any questions or feedback, please feel free to contact me at ijarwisdom@gmail.com or send a dm on linkedIn: http://linkedin.com/in/ijar-wisdom-320a99321.

## Github 
This link bellow will redirect you to my Github page if you want to read more about this package.
> https://github.com/wisdommichaels/Password_generator
