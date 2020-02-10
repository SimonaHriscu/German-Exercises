console.log("Aufgabe 1:");

let euroCities=["Paris", "London", "Valletta", "Prague", "Rome"];
let englishCity = euroCities[1];

console.log(euroCities);
console.log(englishCity);

console.log("Aufgabe 2:");
euroCities[0]= "Berlin";
console.log(euroCities);

console.log("Aufgabe 3:");
console.log(euroCities.length);

console.log("Aufgabe 4:");
euroCities.pop();
console.log(euroCities);

console.log("Aufgabe 5:");
euroCities.push("Budapest");
console.log(euroCities);

console.log("Aufgabe 6:");
euroCities.splice(1,2);
console.log(euroCities);

console.log("Aufgabe 7:");
let asianCities = ["Bangkok","HongKong", "Shanghai", "Seoul", "Manila"];
console.log(asianCities);

console.log("Aufgabe 8:");
let extraCities = asianCities.slice(2,4);
console.log(extraCities);
console.log(asianCities);

console.log("Aufgabe 9:");
let worldCities= euroCities.concat(asianCities);
console.log(worldCities);

console.log("Aufgabe 10:");
worldCities.reverse();
console.log(worldCities);

console.log("Aufgabe 11:");
worldCities[2]="Toronto";
console.log(worldCities);

console.log("Aufgabe 12:");
worldCities.splice(1, 0, "Washington");
console.log(worldCities);

 console.log("Aufgabe 13:");

 
console.log(worldCities.join(", "));
console.log(worldCities.join("+"));


console.log("Bonus");
let string = "Hello World!";

var reverseString="";
 for(var i=string.length -1; i>=0; i--){
    reverseString = reverseString+ string[i];
 }
 console.log(reverseString);

 console.log("Extra 1");

 let array1=["Ovidiu", "Breakfast at Tiffany's", "Men in black ", "Avatar"];
 let array2=["mama","tata"];
 let combinedArray= array1.concat(array2);
 console.log(combinedArray);

 combinedArray.push("Grivei", "Lizuca");
 console.log(combinedArray);

 combinedArray.reverse();
 console.log(combinedArray);

 var name = combinedArray[2] 
 console.log(name);

 combinedArray[2]="Constantin";
 console.log(combinedArray);





















