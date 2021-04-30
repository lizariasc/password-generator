

var randomTypes = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};



// When I click the button to generate a password, I am presented with a prompt to select password length
var generateBtn = document.querySelector("#generate").addEventListener('click', askLength)

function askLength() {
  var length = Number(prompt("Choose a length between 8 and 128 characteres:"));
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

  if (isNaN(length) || length > 8 || length <= 128) {
    var uppercase = confirm("Would you like to use uppercase letters?")
    var lowercase = confirm("Would you like to use lowercase letters?")
    var numbers = confirm("Would you like to use numbers?")
    var symbols = confirm("Would you like to use special characters?")
} 

  while (!uppercase && !lowercase && !numbers && !symbols) {
    alert("You must select at least one character type!");
    uppercase = confirm("Would you like to use uppercase letters?");
    lowercase = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");
  }

  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Functions

// Lowercase 
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // fromCharCode lowercase letters are from 97 - 122
}

// Uppercase
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // fromCharCode uppercase letters are from 65 - 90
}

// Numbers
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48); // fromCharCode numbers are from 48 - 57
}

// Symbols
function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/'.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}