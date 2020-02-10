console.log("Aufgabe 1");

console.log(3==3); //Both are numbers, and both share the same value of 3.
console.log(3===3);

//we should generally use the strict comparison operator;
//console.log(3=3); - syntax error

console.log("Aufgabe 2");
let x=true;
console.log(!x ? true : false);

console.log("Aufgabe 3");
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);//Stacey

//undefined||Stacey||"John"