const x = 45;
if ((x%3===0) && (x%5===0)){
    console.log("FizzBuzz")
}
else if(x%3===0){
    console.log("Fizz")
}
else if (x%5===0){
    console.log("Buzz")}

else console.log(x);

console.log("Option 2:")

/*switch(x){
    case ((x%3===0) && (x%5===0)):
        console.log("FizzBuzz");
    break;
    case (x%3===0):
        console.log("Fizz");
    break;
    case (x%5===0):
        console.log("Buzz")
    default: x;

}*/