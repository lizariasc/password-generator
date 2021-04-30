
var randomTypes = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};



// When I click the button to generate a password, I am presented with a prompt to select password length
var generateBtn = document.querySelector("#generate").addEventListener('click', askLength)

function askLength() {
  var length = prompt("Choose a length between 8 and 128 characteres:");
  alert(length);
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