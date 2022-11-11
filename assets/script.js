// Assignment Code
var generateBtn = document.querySelector("#generate");
var specials = ['!','@','#','$','%','^','&','*','(',')'];
var lowerCases = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCases = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var passwordContent = '';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompts
function generatePassword () {
  var passwordLength = window.prompt ("Please enter the number of characters you want. Passwords must contain more than 7 and less than 129 characters.");
  console.log(passwordLength);
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
    console.log ("numbers-yes");
  } else {
    window.alert ("Your password will not contain numbers.");
  }

  var lowerCases = window.confirm ("Do you want lowercase letters in your password?");
  if (lowerCases === true) {
    window.alert ("Your password will contain lowercase letters.");
    console.log ("lowerCases-yes");
    if ("lowerCases-yes") {
    }
  } else {
    window.alert ("Your password will not contain lowercase letters.");
  }

  var upperCases = window.confirm ("Do you want uppercase letters in your password?");
  if (upperCases === true) {
    window.alert ("Your password will contain uppercase letters.");
    console.log ("upperCases-yes");
    if ("upperCases-yes") {
    }
  } else {
    window.alert ("Your password will not contain uppercase letters.");
  }

  var specials = window.confirm ("Do you want special characters in your password?");
  if (specials === true) {
    window.alert ("Your password will contain special characters.");
    console.log ("specials-yes");
    if ("specials-yes") {
    }
  } else {
    window.alert ("Your password will not contain special characters.");
  }

  if (!numbers && !lowerCases && !upperCases && !specials) {
    window.alert ("You must select at least one variable.")
    return
  }
  // Log the type of password
  console.log (passwordContent);
  console.log (typeof passwordContent);
  // Generate the password
  function makePassword () {
    var p = '';
    for (var x = 0; x < passwordLength; x++) {
      p += passwordContent[Math.floor(Math.random() * passwordContent.length)];
      console.log (p);
    }
    console.log ("Password String: " + p);
    console.log (typeof p);
    return p;
  }
  // Notify user of new password
  var newPassword = makePassword();
  window.alert ("Your new password is: " + newPassword);
  console.log (makePassword());
  return newPassword;

}
