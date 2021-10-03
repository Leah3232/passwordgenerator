// Assignment Code
var generateBtn = document.querySelector("#generate");

// These are the variables
var number = '1234567890';
var specialChar = '!@#$^&%*()+=-[]{}|:<>?,.';
var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// How many characters would you want your password to be?
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  // If the answer is outside parameters, it will loop. 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // This will be a repeat of how many characters a person will have 
      alert(`Your password will have ${confirmLength} characters`);

      // Parameters of password 
    var confirmSpecialCharacter = confirm("Click OK if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK if you would like to include uppercase characters");
      // If the answer is outside the parameters, then it will loop.
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK if you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK if you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK if you would like to include uppercase characters");   
    } 

    // We need to assign an action to the parameters.
    var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      // Generate a random password on a loop grabbing random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  