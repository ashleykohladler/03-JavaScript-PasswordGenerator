// Define variables
var generateBtn = document.querySelector("#generate");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = ["&","!","#","$","%"];

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


// function to generate password
function generatePassword() {

  var userLength = parseInt(prompt('How many characters? [8-128]'));
  
//define length of password
  if ( Number.isNaN(userLength) || userLength < 8 || userLength > 128) {
    alert("Length must be between 8 and 128")
    return
  
  }
//define which characters are allowed
  var allowedChars = [];

  var useLowerCase = prompt('Do you want lowercase letters? (Y/N)').toUpperCase();

    if (useLowerCase === 'Y') {
      allowedChars = allowedChars.concat(lowerCase)
    }
  
  var useUpperCase = prompt('Do you want uppercase letters? (Y/N)').toUpperCase();

    if (useUpperCase === 'Y') {
      allowedChars = allowedChars.concat(upperCase)
    }

  var useNumbers = prompt('Do you want numbers? (Y/N)').toUpperCase();

    if (useNumbers === 'Y') {
      allowedChars = allowedChars.concat(numbers)
    }
  
  var useSpecialChar = prompt('Do you want special characters? (Y/N)').toUpperCase();

  if (useSpecialChar === 'Y') {
    allowedChars = allowedChars.concat(specialChar)
  }

  if (allowedChars.length === 0) {
    alert("No Password.")
    return allowedChars;
  }
 
  //return password
  var password = "";

  for(var i=0; i < userLength; i++) {
    var index = Math.floor(Math.random() * allowedChars.length);
    var character = allowedChars[index];
    password = password.concat(character)
  }

  return password
  
}
 


// Write password 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


