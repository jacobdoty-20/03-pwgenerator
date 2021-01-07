// Assignment Code
var generateBtn = document.querySelector("#generate");

// 
// function getInputs() {
  var pwLength = prompt("How long would you like your password? (choose a number from 8 to 128");
  var lowCase = confirm("Would you like it to include lowercase letters?");
  var upCase = confirm("Uppercase letters?");
  var numeric = confirm("Numbers?");
  var specialChar = confirm("Special characters?");
// }
console.log(pwLength);
// function genRandUp() {
//   if (document.getElementById(upCase == true)) {
//     return String.fromCharCode(Math.floor(Math.random()*26) + 65);

//   } else {
//       return ('');
//   }
// }
// getInputs();
// console.log(pwLength);
// function generatePassword() {
//   return pwlength;
// }

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
