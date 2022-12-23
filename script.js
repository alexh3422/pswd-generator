// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () { 
  var charcount = passwordlength();
  var chartypecount = false 
  // Code below verifies that at least one character type is selected
  while (!chartypecount){
    var lowercase = passwordlowercase();
    var uppercase = passworduppercase();
    var numeric = passwordnumeric();
    var special = passwordspecialcharacters();
    chartypecount = lowercase || uppercase || numeric || special
    if (!chartypecount) {
      alert("Please select at least one  character  type")
    }
  }
  // variables below define what characters will be used for password
  var lowercasecharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercasecharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericcharacters = "0123456789";
  var specialcharacters = "!@#$%^&*";
  var passworddomain = ""
  if (lowercase) {
    passworddomain = passworddomain.concat(lowercasecharacters)
  }
  if (uppercase) {
    passworddomain = passworddomain.concat(uppercasecharacters)
  }
  if (numeric) {
    passworddomain = passworddomain.concat(numericcharacters)
  }
  if (special) {
    passworddomain = passworddomain.concat(specialcharacters)
  }

// passworddomanin contains all allowed password characters

  var password = ""
  var i = 0

  while (i < charcount){
    
    // password = password.concat(c) // taking  those charactes out of  the created substrings and  adding them onto the password (final product)
     password = password.concat(passworddomain[Math.floor(Math.random() * passworddomain.length)])
    i = i + 1
 
  }
  return password;
}

//function below allows the user to select how long their password will be. If they select anys number below 8 or above 128
//Then they will be prompted to try again 
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

// functions below take the user through the prompts selecting character types to create their password
function passwordlowercase () {
  var lowercase = confirm("Must password include lowercase letters? Press OK for yes, Cancel for no.");
  return lowercase;
}

function passworduppercase () {
  var uppercase = confirm("Must password include uppercase letters? Press OK for yes, Cancel for no.");
  return uppercase;
}

function passwordnumeric () {
  var numeric = confirm("Must password include numeric characters? Press OK for yes, Cancel for no.");
  return numeric;
}

function passwordspecialcharacters () {
  var specialcharacters = confirm("Must password include special characters? Press OK for yes, Cancel for no.");
  return specialcharacters;
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
