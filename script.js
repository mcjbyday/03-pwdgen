// Assignment Code
var generateBtn = document.querySelector("#generate");

// pseusdo code
// 1) get preferred length
// 2) get input to build possibility space of availability characters
// 3) randomly select characters from the built array and assemble the password
let pwdL = prompt("How many characters would you like your password to have?");

let letterLowerString = "abcdefghijklmnopqrstuvwxyz";
let letterUpperString = "ABCDEFGHIJKLMNOPQRSTYUVWXYZ";
let numericString = "0123456789";
//special operators used for string literals
let specialString = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


// TODO error handling to make sure input is under 129
// TODO error handling to make sure input can be converted into a number




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
