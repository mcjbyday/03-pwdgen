// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  let criteriaIsGood = false;
  // include concatenation logic based on user inputs
  let randomNumber = 0;
  let pwd = [];

  let pwdL = prompt("How many characters would you like your password to have?");
  
  // error handling to make sure input is above 8
  if (pwdL < 8) {
    alert("Please try again, providing a character count greater than or equal to 8");
    return;
  }
  // error handling to make sure input is under 129
  else if (pwdL > 128) {
    alert("Please try again, providing a character count less than or equal to 128");
    return;
  }
  else if (pwdL < 129 && pwdL > 7) {
    criteriaIsGood = true;
  }
  // error handling to make sure input is a number
  else  {
    alert("Please ensure you are entering a numeric value and try again.");
    return;
  }
  
  if (criteriaIsGood = true) {
      
    let letterLowerString = "abcdefghijklmnopqrstuvwxyz";
    let letterUpperString = "ABCDEFGHIJKLMNOPQRSTYUVWXYZ";
    let numericString = "0123456789";
    //special operator \ used for string literals
    let specialString = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

    // initialize pwd character array
    let pwdCharArray = "";

    // prompt user if they want lower case
    let letterLowerBool = confirm("Do you want to include lowercase letters (abcde...) in this password?");

    if (letterLowerBool) {
      pwdCharArray += letterLowerString;
    }

    // prompt user if they want upper case, if they agree, append to pwd character array
    let letterUpperBool = confirm("Do you want to include uppercase letters (ABCDE...) in this password?");

    if (letterUpperBool) {
      pwdCharArray += letterUpperString;
    }

    // prompt user if they want numeric chars, if they agree, append to pwd character array
    let numericCharBool = confirm("Do you want to include numeric characters (01234...) in this password?");

    if (numericCharBool) {
      pwdCharArray += numericString;
    }

    // prompt user if they want special chars, if they agree, append to pwd character array
    let specialCharBool = confirm("Do you want to include special characters (#$%^&...) in this password?");

    if (specialCharBool) {
      pwdCharArray += specialString;
    }

    // TODO error handling if they didn't provide a single group of characters
    // i.e. if all false letterLowerBool && letterUpperBool && numericCharBool && specialCharBool

    console.log(pwdCharArray);

    
    // iterate for each random character per the user's specified length

    for (i = 0; i < pwdL; i++) {
      randomNumber = Math.floor(Math.random() * pwdCharArray.length);
      console.log(randomNumber);
      pwd.push(pwdCharArray[randomNumber])
      console.log(pwd); 
    }

    pwd = pwd.join("");

    console.log(pwd);
  }
  return pwd;
}


// Write password to the #password input
function writePassword() {

  let password = generatePassword();
  if (password) {
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
  } 

}


// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);
