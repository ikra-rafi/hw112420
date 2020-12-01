// Assignment Code
var generateBtn = document.querySelector("#generate");
    console.log('generate')

//custom code from here
//Generate password function

function generatePassword() {
    console.log('generate button prompt')


//Creating and defining variables for characters and length of password
//Adding in a join() array. W3 schools!
var alpha = "abcdefghijklmnopqrstuvwxyz";
var caps = alpha.toUpperCase("");
var numeric = "0123456789".split("").join("");
var special = "!$^&*-=+_?".split("").join("");

// Characters and Empty Array
var passwd = "";
var userInput = [];

caps [1]
//Questions, defining variables with prompt and confirm
var characterCount = prompt("Please choose your password between 8 to 128 characters");
if (characterCount < 8 || characterCount > 128) { characterCount = prompt ("Please choose your password between 8 to 128 characters. Thank you")};
var numbers = confirm ("Would you like numbers in your password?");
var uc = confirm ("Would you like uppercase characters in your password?");
var lc = confirm ("Would you like lowercase characters in your password?");
var characters = confirm ("Would you like special characters in your password?");


//concat used to merge two or more arrays. This is where the user inputs his/her info.

if (numbers){
    passwd = passwd.concat(numeric);
  console.log("numbers");
  
}

if (uc){
  passwd = passwd.concat(caps);
  console.log ("uppercases")

}

if (lc){
  passwd = passwd.concat(alpha);
  console.log ("lowercases")

}

if (characters){
  passwd = passwd.concat(special);
  console.log ("characters")
}

  console.log(passwd)


for (var i = 0; i < characterCount; i++) {
      //string does have a function, array does.
    userInput.push (passwd[Math.floor(Math.random() * passwd.length)]); 
  }

  return userInput.join("") ;
}

//Given, leave alone and use at the end
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
