// Finish these Functions

console.log("---1---")
// Write a function that finds out how many elements are in an array
const fruits = ["Banana", "Apple", "Orange"];

const fruitCounter = (someArray) => {
    
    return fruits.length; // edit this line

}
console.log(fruitCounter(fruits)); //Should return 3 
fruits.push("Kiwi");
console.log(fruitCounter(fruits)); //Should return 4



console.log("---2---");
// Write a function that returns the second element of an array.arr
const instruments = ["Guitar", "Piano", "Drums", "Trumpet"];
const secondElement = (someArray) => {
    return instruments[1]; // edit this line
}

console.log(secondElement(instruments)); // Should return Piano


console.log("---3---");
// Write a function that takes a string and
// returns "Oh no" on a weekday and "Oh yes" on a weekend.
const dayChecker = (dayOfTheWeek) => {
    if((dayOfTheWeek === "saturday") || (dayOfTheWeek === "sunday")) { // Edit this line
        return "Oh Yes!";
    } else {
        return "Oh No!";
    }
}

console.log(dayChecker("sunday")); // Should return "Oh Yes!"
console.log(dayChecker("monday")); // Should return "Oh No!"




console.log("---4---");
// Write a function that loops through an array and returns all indexes of numbers greater than 10
const numbers = [0, 10, 11, 200, -39, 23];
const greaterThanTen = (numArray) => {
    let allIndexes = "";
    for(let i = 0; i<=numArray.length-1; i++){
        if(numArray[i] > 10) {
            allIndexes = allIndexes + i ; //edit this line 
        }
    }
    return allIndexes ; // edit this line
}
console.log(greaterThanTen(numbers)); // Should return 2, 3, 5



console.log("---5---");
// Write a function that adds all numbers between 0 and 100
const adder = () => {
    let result = 0;
    for (let i = 0; i <= 100; i++){
        result += i; // edit this line
    }
    return result; // edit this line
}
const additionResult = adder();
console.log(additionResult); // Should return 5050



console.log("---6---");
//Write a function that adds all even numbers between 0 and 100;
const evenAdder = () => {
    let result = 0;
    for(let i = 0; i<=100; i++){ // Edit this line
        if(i%2===0){ // Edit this line
            result += i;
        }
    }
    return result;
}

console.log(evenAdder()); // Should return 2550



console.log("---7---");
// Write a function that checks if an array contains the element "hello".
// Hint: Use google.
const array1 = ["hello", "world"];
const array2 = ["hi", "word"];
const containsHello = (wordArray) => {
    if (wordArray.includes("hello")) { // edit this line
        return true;
    } else {
        return false;
    }
}

console.log(containsHello(array1)); // Should return true
console.log(containsHello(array2)); // Should return false

/* Extra:
1. Write a function that returns all numbers divisible by 3 between -1000 and 1000.
2. Write a function that deletes all whitespace from a given string
3. Write a function which reverses an array. Bonus: Do not use array.reverse() */


console.log("Bonus 1");

for(a=-1000; a<=1000; a++){
    if(a%3 ===0){
        console.log(a);

    }
}


console.log("Bonus 3");


 arr = [5, "two", 3, "today"];
 var reverseArr="";
 for(var i=arr.length -1; i>=0; i--){
    reverseArr = reverseArr+ arr[i];
 }
 console.log(reverseArr);


 arr = [5, "two", 3, "today"];
 
 for(i<arr.length/2; i=0; i++){
    reverseArr = arr[i];
    arr[i]=i[arr.length-(1+i)];
    arr[arr.length-(1+i)] = reverseArr;
 }
 console.log(reverseArr);
 
  




