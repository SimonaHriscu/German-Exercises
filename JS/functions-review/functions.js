console.log("Aufgabe 1:")

let tellFortune = (children, partner, location, job) =>{
    

return("You will be " + job + " in " + location +" ,and married to " + partner + " with " + children + " kids. ");

}
let a = tellFortune (3, "Simon", "Berlin", "teacher");
console.log(a);
//"You will be a X in Y, and married to Z with N kids."


console.log("Aufgabe 2:")


function calculateDogAge(dogAge){
    let humanAge = dogAge * 7;
    console.log(`Your doggie is ${humanAge} years old in dog years!`)
}

calculateDogAge(3);
calculateDogAge(7);
calculateDogAge(10);

function calculateHumanAge(humanAge) {
    let age = humanAge / 7;
    console.log(`Your doggie is ${age} years old in calendar years!`);
}

calculateHumanAge(70); 

/*let calculateDogAge=(age) =>{
    return(age*7)
}

console.log("Your doggie is " + calculateDogAge(3) + " years old in dog years!");

console.log("Your doggie is " + calculateDogAge(15) + " years old in dog years!");

console.log("Your doggie is " + calculateDogAge(1) + " years old in dog years!");
*/

console.log("Aufgabe 3:")

let calculateSupply = (age, amount) =>{
    let rest=((age*amount)*365);
    console.log('You will need ' + rest + ' to last you until the ripe old age of ' + age )
}
calculateSupply(28, 2);


console.log("Aufgabe 4:")

let calcCircumference=(radius) => {
    let circumference = Math.PI*2*radius;
    console.log('The circumference is ' + circumference +' cm.');

}
calcCircumference(12);
//piR2
let calcArea=(R) =>{
    let area = Math.PI*(R*R)
    console.log('The area is ' + area +' cm.');
}
calcArea(12);



console.log("Aufgabe 5:") //subtract 32 and multiply by .5556
let celsiusToFahrenheit=(b) => {
    let  celsius = ((b - 32) *0.5556);
    console.log(celsius + '°C is '+b +'°F');

}
celsiusToFahrenheit(170);
//F = 1.8 C + 32
let fahrenheitToCelsius=(c) => {
    let  fahrenheit = ((c * 1.8)+ 32);
    console.log(fahrenheit + '°F is ' + c + '°C ');

}
fahrenheitToCelsius(10);