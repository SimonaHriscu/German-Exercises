console.log("Aufgabe 1")

function even(a) { 
    if (a%2 === 0){
            console.log("true");
        }else{
    console.log("false")
   
}}
even(2);


console.log("Aufgabe 2")
function arrayZuString(arr){
    let result = "";
    for(let i = 0; i < arr.length; i++){
        result = result + " " + arr[i];
    }
    return result;
}
let fruit = ["apple", "orange", "banana"];
console.log(arrayZuString(fruit));

console.log("Aufgabe 3")

function isPositive(b) { 
    if (b >= 0) {
            console.log("true");
        }else{
    console.log("false")
   
}}
isPositive(-2);

console.log("Aufgabe 4")

function arrayString(word) {
    return word[0]
    
}
let word = "Salut"
console.log(arrayString(word));

