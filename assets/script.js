// Assignment Code
var generateBtn = document.querySelector("#generate");
var specials = "!@#$%^&*()";
var lowerCases = "abcdefghijklmnopqrstuvwxyz";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  /*var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];
*/
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompts
function generatePassword () {
  var passwordLength = window.prompt ("Please enter the number of characters you want. Passwords must contain more than 7 and less than 129 characters.");
  if (passwordLength < 8) {
    window.alert ("Your password must contain more than 7 characters.");
    return
  } else if (passwordLength > 128) {
    window.alert ("Your password must contain less than 129 characters.");
    return
  } else {
    window.alert ("Your password will be " + passwordLength + " characters long.");
  }

  var numbers = window.confirm ("Do you want numbers in your password?");
  if (numbers === true) {
    window.alert ("Your password will contain numbers.");
  } else {
    window.alert ("Your password will not contain numbers.");
  }

  var lowerCases = window.confirm ("Do you want lowercase letters in your password?");
  if (lowerCases === true) {
    window.alert ("Your password will contain lowercase letters.");
  } else {
    window.alert ("Your password will not contain lowercase letters.");
  }

  var upperCases = window.confirm ("Do you want uppercase letters in your password?");
  if (upperCases === true) {
    window.alert ("Your password will contain uppercase letters.");
  } else {
    window.alert ("Your password will not contain uppercase letters.");
  }

  var specials = window.confirm ("Do you want special characters in your password?");
  if (specials === true) {
    window.alert ("Your password will contain special characters.");
  } else {
    window.alert ("Your password will not contain special characters.");
  }

}


//"Enter a number of characters greater than 7 and less than 129"

//var options = []

/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.
*/