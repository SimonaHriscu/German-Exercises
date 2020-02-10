console.log("Aufgabe1");

let x = 50;
let y = 10;
if (((50 <= x) && (x <= 99)) || ((50 <= y) && (y <= 99))) {
    console.log("true");
}  //true||false

console.log("Aufgabe2");

let a = 70;
let b = 99;
let c = 51;
if (((50 <= a) && (a <= 99)) || ((50 <= b) && (b <= 99)) || ((50 <= c) && (c <= 99))) {
    console.log("true");
}
   


//true||false||true =>true

console.log("Aufgabe3");

//console.log(Math.max(70, 3, 51));

if(( a>b ) && ( a>c )){ //false
    console.log("a is the biggest one")
}
else if((b>a) && (b>c)){
    console.log("b is bigger")
}
else if ((c>a) && (c>b)){
    console.log("c is bigger")
}

console.log("Aufgabe4");

let string = "Thon";
let newString = "PyThon";

if(newString.includes ("Py")){
    console.log(string);
}
else{(console.log= newString)}

console.log("Aufgabe5");

let int1=10;
let int2=41;
let sum = int1+int2;
if(( sum <= 80 ) && ( sum >= 50 )){
    console.log(65);
}
else{console.log(80);

}

console.log("Aufgabe6");

let a1=12;
let a2=4;
sumA1A2= a1+a2;
diffA1A2 = Math.max(a1,a2) - Math.min(a1,a2);

if(sumA1A2 === 8){
    console.log(true)
}else if(diffA1A2 === 8){
    console.log(true)
}else{
    console.log("false")
}



console.log("Aufgabe7");
if((a1===15) || (a2===15) || ((a1+a2)===15)) {
    console.log("true")
}
else {(console.log("false"))}

console.log("Aufgabe8");
if(((a1%7)===0) || ((a1%11)===0) || ((a2%7)===0) || ((a2%11)===0)) {
    console.log("true")
}
else {(console.log("false"))}



console.log("Aufgabe9");

let x1 = 13;
let x2 = 13;

summe = (x1+x2);

if( x1===x2) {
   console.log(summe * 3)
}

console.log("Aufgabe10");
 
diff = (x-19);

if (diff>19) {
    console.log(diff * 2);
}

console.log("Aufgabe11")

let firstName = "Simona";
let age = 13;

if (age<13) {
    console.log(firstName + " is a child")
}
else if ((age >= 13) && (age<20)) {
    console.log(firstName + " is a teenager")
}
else if((age===20)&&(age<30)) {
    console.log (firstName + " is a young adult")
}
else (console.log(firstName + " is an adult"));