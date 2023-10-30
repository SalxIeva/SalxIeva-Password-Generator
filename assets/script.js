// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Generate a password when the button is clicked.

// Length of password:

// At least 8 characters but no more than 128.

// Character types:

// Lowercase

// Uppercase

// Numeric

// Special characters ($@%&*, etc.)

// Code should validate for each input and at least one character type should be selected.

// Once all prompts are answered, the password should be generated and displayed in an alert or written to the page.


// A series of prompts created for password criteria: 8 to 128 characters, lowercase, uppercase, numeric, special characters

// var passwordLength = prompt("Enter password length from 8 to 128 characters: ")
// passwordLength prompt raised for user
var passwordLength;
// while loop to make sure that user enters the number between 8 to 128
while(true) {
  var number = prompt("Enter password length from 8 to 128 characters: ");
   {
    // check if user entered not a valid number
    if (number === null || isNaN(number)) {
      alert("Please enter a number between 8 to 128")
    } else {
      passwordLength = parseInt(number);
  // check if the number is valid
      if (passwordLength >= 8 && passwordLength <= 128) {
        // number is valid break to exit the loop   
      break;
      } else {
        // if the number doesn't meet criteria show alert: "Number must be between 8 to 128"
        alert("Number must be between 8 and 128");
      }
    }
  }
}
var charLowercase = confirm("Press 'OK' to add Lowercase characters: ");
var charUppercase = confirm("Press 'OK' to add Uppercase characters: ");
var charNumeric = confirm("Press 'OK 'to add Numeric characters: ");
var charSpecial = confirm("Press 'OK' to add Special ($@%&*, etc.) characters: ");



// Function to prompt user for password options
function getPasswordOptions() {
  // password options/prompts have been console logged in getPasswordOptions to present it to the user
      console.log(passwordLength);
      console.log(charLowercase);
      console.log(charUppercase);
      console.log(charNumeric);
      console.log(charSpecial);
      return
}
// getPasswordOptions function is called
getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {}
//   oneArray = lowerCasedCharacters.concat(upperCasedCharacters + numericCharacters + specialCharacters);
//   oneArray.getRandom 
//   // console.log(oneArray);
//   // return
// }
// getRandom();


// check if at least one character has been selected
if (!(charLowercase || charUppercase || charNumeric || charSpecial)) 
{ // alert the user if he hasn't selected any of the options
  alert("You  must select at least one character type for the password")
} else {
// Function to generate password with user input
function generatePassword() {
// var validChars added to validate users selection
    var validChars = '';
    if (charLowercase) validChars += lowerCasedCharacters;
    if (charUppercase) validChars += upperCasedCharacters;
    if (charNumeric) validChars += numericCharacters;
    if (charSpecial) validChars += specialCharacters;
    // generate password 
    var password = '';
    for (var i = 0; i < passwordLength; i++) {
      var randomChar = Math.floor(Math.random() * validChars.length);
      password += validChars.charAt(randomChar);
    }
    return password;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);