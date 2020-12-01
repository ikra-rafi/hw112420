//Testing Active Status//
console.log("Generator is Active")


// Assignment Code
var generateBtn = document.querySelector("#generate");


//Var Characters. I have split them and added an additional string to eliminate commas//
var specialSymbols = "~!@#$%^&*()_+".split("").join("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase("")
lowerCase.split("").join("")
upperCase.split("").join("")
var number = "123456789".split("").join("");

//Gabe mentioned this like 3 classes ago... To be able to find a way to combine//
var chosenChars = ""

//Range of Password Length//
var passwordlength = { from: 8, to: 128 }

//Var Definitions to minimize usage of 'var'//
var chooseSymbols
var chooselowerCase
var chooseupperCase
var chooseNumber
// String to collecte the and store the random selection to guarantee choicees. 
var finalOpts = ""


// Write password to the #password input//
//DO NOT TOUCH. Separate from rest//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


  function generatePassword() {
    //Beging Loops until the correct amount (a number between 8-128) is added. Additional prompts to confirm Character Preference//
    passwordlength = (prompt("How many characters would you like your Password to be? Must be betweem 8 to 128 characters and WHOLE NUMBERS only")); {
      //Happened to find out the usage of 'while' by chance. I was stuck on this part for awhile because I wanted my prompts to continue even if a value wasn't correctly added. Instructor was reviewing a JS CheatSheet and as he scrolled through loops, I found 'while.'
      while (isNaN(passwordlength) || (passwordlength < 8) || (passwordlength > 128)) {
        passwordlength = prompt("Please make sure you put a NUMBER that is between 8 and 128")
      } console.log(passwordlength)

      //begin combo choices with IF statements.
      passwordText = ""

      chooseSymbols = confirm("Do you want Symbols?")
      console.log(chooseSymbols)
      if (chooseSymbols === true) {
        chosenChars += specialSymbols;
        // Collecting random selections from Special Symsbols
        finalOpts += specialSymbols[(Math.floor(Math.random() * specialSymbols.length))]
      }

      chooselowerCase = confirm("Do you want Lower Case letters?")
      console.log(chooselowerCase)
      if (chooselowerCase === true) {
        chosenChars += lowerCase;
        //Collecting random selectinos from lowercase 
        finalOpts += lowerCase[(Math.floor(Math.random() * lowerCase.length))]
      }

      chooseupperCase = confirm("Do you want Upper Case letters?")
      console.log(chooseupperCase)
      if (chooseupperCase === true) {
        chosenChars += upperCase
        //Collecting random selections from Uppercase
        finalOpts += upperCase[(Math.floor(Math.random() * upperCase.length))]
      }

      chooseNumber = confirm("Do you want numbers?")
      console.log(chooseNumber)
      if (chooseNumber === true) {
        chosenChars += number
        //Collecting random selection from Number
        finalOpts += number[(Math.floor(Math.random() * number.length))]

      }
      //Shows that random characters selected per chosen selection
      console.log(finalOpts)

      if (chosenChars.length === 0) {
        chosenChars = alert("No options selected. Please select ONE")
      } else { 
        for (var i = 0; i < passwordlength; i++) {
          passwordText += chosenChars.charAt(Math.floor(Math.random() * chosenChars.length))  ;
          console.log(passwordText)
        }
      }
      //Combining the chosen Options+guaranteed random selections into PasswordText
      passwordText = finalOpts + passwordText
      //This is to make sure that the final outcome of the chosen options+guaranteed random selection is extracted to the correct length 
      passwordText = passwordText.slice(0, passwordlength) 
      return passwordText
    }
  }
  //Empty Arrays to clear
  finalOpts = []
  chosenChars = []
  console.log(chosenChars)
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
}