// Finish these Functions

console.log("---1---");
// Write a function that replaces all "z" elements with "0" in an array.
const replacer = (array) => {
    for (let i = 0; i < 1; i++){ // Edit this line
        if(array[i] === "z"){
            array[i] = 0;// Edit this line
        }
    }
    return array;
}
console.log(replacer(["z","e", "r", "o"])); // should return [0, "e", "r", "o"]


console.log("---2---");
// Write a function that multiplies a number by itself n amount of times.
// in other words return number to the power of n. But use a for loop. 
const multiplier = (number, n) => {
    result = number;
    for(let i = 1; i < n; i++){
        result = result * number; // edit this line
    }
    return result; 
}

console.log(multiplier(2, 3)); // Should return 8
console.log(multiplier(3, 1)); // Should return 3





console.log("---3---");
// Write a function that takes in two arguments and checks if they are the same.

const isSame = (arg1, arg2) => {
    if(arg1 === arg2){
        return true;
    }else{
        return false;
    }
    
    //Write multiple lines here
}

console.log(isSame(0,0)); // Should return true
console.log(isSame("abc", "abc")); // Should return true
console.log(isSame("a", "b")); // Should return false






console.log("---4---"); 
// Write a function that takes in three arguments and checks if they are the same.

const areSame = (arg1, arg2, arg3) => {
    if((arg1 === arg2) && (arg2===arg3)){
        return true;
    }else{
        return false;
    }
      //Write multiple lines here
}

console.log(areSame(0,0, 0)); // Should return true
console.log(areSame("abc", "abc", "abc")); // Should return true
console.log(areSame("a", "b", "c")); // Should return false
console.log(areSame(0, 1, 0)); // Should return false
console.log(areSame(1, 1, 0)); // Should return false
console.log(areSame(0, 1, 1)); // Should return false
console.log(areSame(1, 0, 1)); // Should return false

console.log("---5---");
// Write a function that takes in 2 arguments and returns the multiplication product.

const mult = (a,b) => { //Edit this line
        return a*b}// Add code here.


console.log(mult(2,3)); // Should return 6
console.log(mult(4,7)); // Should return 28




console.log("---6---");
// Change this function.
// It should call mult() from above and check if the result is greater than zero.
const isResultGreaterThanZero = (number1, number2) => {
    if (mult(number1, number2) >= 0){
        return true;
    } else {
        return false;
    }
}

console.log(isResultGreaterThanZero(-2, 5)); // Should return false
console.log(isResultGreaterThanZero(2, 5)); // Should return true

/* Bonus:
    1. Write a function that makes all numbers in an array negative.
        [1, 2, -3, 4] should return [-1, -2, -3 , -4]
    2. Write a function that prints out all words in an array beginning with "a".
        ["hello", "world", "alright", "all"] should return ["alright", "all"]
    3. write a function that checks if argument 1 is divisible by argument 2
        div(9, 3) should return true
        div(12, 5) should return false
*/

console.log("Bonus 1");

const negativeArray = (numbers) => {
    let resultArrey = [];

   for(let i = 0; i<=numbers.length; i++){
       if (i>0){
       resultArrey.push(i* -1)}
    
    }
    
    return resultArrey;
}

  let numbers = [1, 2, -3, 4];
  console.log(negativeArray(numbers)); 


  console.log("Bonus 2");

  
