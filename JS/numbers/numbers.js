//Aufgabe1

console.log("Aufgabe1");

let sentence = "My name is Simona and I am ";
let age = 25;
let concatString = sentence + age;
console.log(concatString);

// The + sign is adding the two strings together with no space;


//Aufgabe2

console.log("Aufgabe2");

var pointNum = parseInt("1005");
console.log(pointNum);

var pointNum2 = parseFloat("10.05");
console.log(pointNum2);


//Aufgabe3

console.log("Aufgabe3");


let number = 30;
function isEven(number) {
	if (number%2 === 0) {
		return number +' is even';
    }
	else {
        return number +' is odd';
    }
}
console.log(isEven(number));
console.log(isEven(939));
console.log(isEven(40.9));

//Aufgabe3  OPTION 2

console.log("Aufgabe3 OPTION 2");

// (condition) ? wenn condition is true : wenn condition is false
// 12%2 ===0

let a = 30;
let antwort = (a % 2 === 0)? a + " ist gerade " : a + " ist ungerade ";
console.log(antwort);
