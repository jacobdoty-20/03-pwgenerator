// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength;
var lowCase;
var upCase;
var numeric;
var specialChar;

function getInputs() {
  prompt()
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
