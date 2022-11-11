// Assignment Code
var generateBtn = document.querySelector("#generate");
var specials = ['!','@','#','$','%','^','&','*','(',')'];
var lowerCases = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCases = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var passwordContent = [''];
var passwordContentStart = [''];
var scopeNumbers = ['8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','120','121','122','123','124','125','126','127','128']

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts, choices, and defining passwordContent
function generatePassword () {
  var passwordLength = window.prompt ("Please enter the number of characters you want. Passwords must contain more than 7 and less than 129 characters.");
  console.log(passwordLength);
  if (passwordLength < 8) {
    window.alert ("Your password must contain more than 7 characters.");
    return
  } else if (passwordLength > 128) {
    window.alert ("Your password must contain less than 129 characters.");
    return
  } else if (passwordLength != scopeNumbers) {
    window.alert ("You must select a numeric value greater than 7 and less than 129.");
    return
  } else {
    window.alert ("Your password will be " + passwordLength + " characters long.");
  }

  var hasNumbers = window.confirm ("Do you want numbers in your password?");
  if (hasNumbers === true) {
    window.alert ("Your password will contain numbers.");
    console.log ("numbers-yes");
    var passwordContent = passwordContentStart.concat (numbers);
  } else {
    window.alert ("Your password will not contain numbers.");
  }

  var hasLowerCases = window.confirm ("Do you want lowercase letters in your password?");
  if (hasLowerCases === true) {
    window.alert ("Your password will contain lowercase letters.");
    console.log ("lowerCases-yes");
    var passwordContent = passwordContentStart.concat (lowerCases);
  } else {
    window.alert ("Your password will not contain lowercase letters.");
  }

  var hasUpperCases = window.confirm ("Do you want uppercase letters in your password?");
  if (hasUpperCases === true) {
    window.alert ("Your password will contain uppercase letters.");
    console.log ("upperCases-yes");
  } else {
    window.alert ("Your password will not contain uppercase letters.");
  }

  var hasSpecials = window.confirm ("Do you want special characters in your password?");
  if (hasSpecials === true) {
    window.alert ("Your password will contain special characters.");
    console.log ("specials-yes");
  } else {
    window.alert ("Your password will not contain special characters.");
  }

  if (hasNumbers === true && hasLowerCases === true && hasUpperCases === true && hasSpecials === true) {
    var passwordContent = passwordContentStart.concat (numbers, lowerCases, upperCases, specials)
  }

  if (hasNumbers === true && hasLowerCases === true && hasUpperCases === true && hasSpecials === false) {
    var passwordContent = passwordContentStart.concat (numbers, lowerCases, upperCases)
  }

  if (hasNumbers === true && hasLowerCases === true && hasUpperCases === false && hasSpecials === false) {
    var passwordContent = passwordContentStart.concat (numbers, lowerCases)
  }

  if (hasNumbers === true && hasLowerCases === false && hasUpperCases === false && hasSpecials === false) {
    var passwordContent = passwordContentStart.concat (numbers)
  }

  if (hasNumbers === false && hasLowerCases === true && hasUpperCases === true && hasSpecials === true) {
    var passwordContent = passwordContentStart.concat (lowerCases, upperCases, specials)
  }

  if (hasNumbers === false && hasLowerCases === false && hasUpperCases === true && hasSpecials === true) {
    var passwordContent = passwordContentStart.concat (upperCases, specials)
  }

  if (hasNumbers === false && hasLowerCases === false && hasUpperCases === false && hasSpecials === true) {
    var passwordContent = passwordContentStart.concat (specials)
  }

  if (hasNumbers === false && hasLowerCases === true && hasUpperCases === false && hasSpecials === false) {
    var passwordContent = passwordContentStart.concat (lowerCases)
  }

  if (hasNumbers === false && hasLowerCases === false && hasUpperCases === true && hasSpecials === false) {
    var passwordContent = passwordContentStart.concat (upperCases)
  }

  if (hasNumbers === true && hasLowerCases === false && hasUpperCases === true && hasSpecials === false) {
    var passwordContent = passwordContentStart.concat (numbers, upperCases)
  }

  if (hasNumbers === true && hasLowerCases === false && hasUpperCases === false && hasSpecials === true) {
    var passwordContent = passwordContentStart.concat (numbers, specials)
  }

  if (hasNumbers === false && hasLowerCases === true && hasUpperCases === true && hasSpecials === false) {
    var passwordContent = passwordContentStart.concat (lowerCases, upperCases)
  }

  if (hasNumbers === false && hasLowerCases === true && hasUpperCases === false && hasSpecials === true) {
    var passwordContent = passwordContentStart.concat (lowerCases, specials)
  }

  if (hasNumbers === true && hasLowerCases === true && hasUpperCases === false && hasSpecials === true) {
    var passwordContent = passwordContentStart.concat (numbers, lowerCases, specials)
  }

  if (hasNumbers === true && hasLowerCases === false && hasUpperCases === true && hasSpecials === true) {
    var passwordContent = passwordContentStart.concat (numbers, upperCases, specials)
  }

  if (!numbers && !lowerCases && !upperCases && !specials) {
    window.alert ("You must select at least one variable.")
    return
  }
 
  // Generate the password
  function makePassword () {
    var p = '';
    for (var x = 0; x < passwordLength; x++) {
      p += passwordContent[Math.floor(Math.random() * passwordContent.length)];
      console.log (p);
    }
    // Log the password and it's type
    console.log ("Password String: " + p);
    return p;
  }
  // Notify user of new password
  var newPassword = makePassword();
  window.alert ("Your new password is: " + newPassword);
  return newPassword;

}
