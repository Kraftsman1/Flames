/*
var firstName = new Array();
firstName[0] = prompt("Name 1");

var secondName = new Array();
secondName[0] = prompt("Name 2");
*/

//Declare variables to prompt user(s) to enter two names for comparison.

var firstName;
var secondName;

function getInput() {
   var firstName = document.getElementById('yourname').value;
   var secondName = document.getElementById('crushname').value;
}

/* var firstName = prompt("Enter first Player\'s name");
var secondName = prompt("Enter second Player\'s name");

function getInput() {
   var firstName = document.getElementById('yourname').value;
   var secondName = document.getElementById('crushname').value;
}

//var name = firstName;
//var name2 = secondName;
let relName = name.split('');
let relName2 = name2.split('');

//Funtion to compare user input and extract non-recurring characters in string, which will then be store in a variable called "result"
var result = [...relName.filter(item => !relName2.includes(item)),...relName2.filter(item => !relName.includes(item)
    )
];


//console.log(result);

//let nameChar = result.length;

//console.log(nameChar);

//Declare formula to match length of result array with flames const
/* 
var matchFormula = result.length % 6;
 if (matchFormula == 0) {
     console.log("You are Friends :)")
 } 
 else if (matchFormula == 1) {
     console.log("You are Lovers :)")
 }
 else if (matchFormula == 2) {
    console.log("You are Angry :)")
}
else if (matchFormula == 3) {
    console.log("You are Married :)")
}
else if (matchFormula == 4) {
    console.log("You are Engaged :)")
}
else if (matchFormula == 5) {
    console.log("You are Soulmates :)")
}
 */

function matchFormula() {
    result.length % 6;
    if (matchFormula == 0) {
        console.log("You are Friends :)")
    }
    else if (matchFormula == 1) {
        console.log("You are Lovers :)")
    }
    else if (matchFormula == 2) {
        console.log("You are Angry :)")
    }
    else if (matchFormula == 3) {
        console.log("You are Married :)")
    }
    else if (matchFormula == 4) {
        console.log("You are Engaged :)")
    }
    else if (matchFormula == 5) {
        console.log("You are Soulmates :)")
    }

}

console.log(secondName);