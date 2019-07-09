/* 
function checkStatus() {
    var firstName = document.getElementById('yourname');
    var secondName = document.getElementById('crushname');

    var name = firstName;
    var name2 = secondName;
    var relName = name.split('');
    var relName2 = name2.split('');

    //Funtion to compare user input and extract non-recurring characters in string, which will then be store in a variable called "result"
    //... => Spread Operator
    var result = [...relName.filter(item => !relName2.includes(item)), ...relName2.filter(item => !relName.includes(item)
    )
    ];

    //Declare formula to match length of result array with flames const

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

    document.getElementById("result").innerHTML = result;
}
 */

function checkStatus() {
    var firstName = document.getElementById('yourname').value;
    var secondName = document.getElementById('hername').value;

    var name = firstName;
    var name2 = secondName;
    var relName = name.split('');
    var relName2 = name2.split('');

    //Funtion to compare user input and extract non-recurring characters in string, which will then be store in a variable called "result"
    //... => Spread Operator
    var result = [...relName.filter(item => !relName2.includes(item)), ...relName2.filter(item => !relName.includes(item)
    )
    ];

    //Declare formula to match length of result array with flames const

    var matchFormula = result.length % 6;
    if (matchFormula == 1) {
        document.getElementById("result").innerHTML = ("You are Friends :)")
    }
    else if (matchFormula == 2) {
        document.getElementById("result").innerHTML = ("You are Lovers :)")
    }
    else if (matchFormula == 3) {
        document.getElementById("result").innerHTML = ("You are Angry :)")
    }
    else if (matchFormula == 4) {
        document.getElementById("result").innerHTML = ("You are Married :)")
    }
    else if (matchFormula == 5) {
        document.getElementById("result").innerHTML = ("You are Engaged :)")
    }
    else if (matchFormula == 6) {
        document.getElementById("result").innerHTML = ("You are Soulmates :)")
    }
    
} 