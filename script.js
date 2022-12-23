// Assignment Code

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
  var passwordstring = ""
  var password = ""
  var i = 0

  if (lowercase) {
   passwordstring += lowercasecharacters[Math.floor(Math.random() * lowercasecharacters.length)]
   i = i + 1
  }
  if (uppercase) {
    passwordstring += uppercasecharacters[Math.floor(Math.random() * uppercasecharacters.length)]
    i = i + 1
  }
  if (numeric) {
    passwordstring += numericcharacters[Math.floor(Math.random() * numericcharacters.length)]
   i = i + 1
  }
  if (special) {
    passwordstring += specialcharacters[Math.floor(Math.random() * specialcharacters.length)]
   i = i + 1
  }
  alert (passwordstring)
  while (i < charcount){
    
    // password = password.concat(c) // taking  those charactes out of  the created substrings and  adding them onto the password (final product)
     passwordstring = passwordstring.concat(passworddomain[Math.floor(Math.random() * passworddomain.length)])
    i = i + 1
 
  }

  //password string contains all of  the characters selected by the user but now we need to randomize order so it doesnt always start with the same character types and is truly random
  i = 0
  alert (passwordstring)
  while (passwordstring.length > 0) {
    var randomindex = Math.floor(Math.random() * passwordstring.length)
    var c = passwordstring[randomindex]
    password = password.concat(c)
    passwordstring = passwordstring.slice(0, randomindex).concat(passwordstring.slice(randomindex + 1))
    alert (passwordstring + ":" + password)
  }

  return password;
}

 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// mainline code
 // event listener for generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
