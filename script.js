// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () { 
  var length = passwordlength();
  var lowercase = passwordlowercase();
  var uppercase = passworduppercase();
  var numeric = passwordnumeric();
  var specialcharacters = passwordspecialcharacters();
  var lowercasecharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercasecharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericcharacters = "0123456789";
  var specialcharacters = "!@#$%^&*;:<>?/|";
}

// add functionality to validate input - while loop 
function passwordlength () {
  var lengthisok = false
  while (!lengthisok) {
    var length = prompt("Enter Password Length (8-128)");
    lengthisok = (length >= 8 && length <= 128)
    if (!lengthisok) {
    alert("Password must be between 8 and 128 characters - Please try again");
   }
 } 
return length;
}


function passwordlowercase () {
  var lowercase = confirm("Would you like to include lowercase letters? Press OK for yes, Cancel for no.");
  return lowercase;
}

function passworduppercase () {
  var uppercase = confirm("Would you like to include uppercase letters? Press OK for yes, Cancel for no.");
  return uppercase;
}

function passwordnumeric () {
  var numeric = confirm("Would you like to include numeric characters? Press OK for yes, Cancel for no.");
  return numeric;
}

function passwordspecialcharacters () {
  var specialcharacters = confirm("Would you like to include special characters? Press OK for yes, Cancel for no.");
  return specialcharacters;
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
