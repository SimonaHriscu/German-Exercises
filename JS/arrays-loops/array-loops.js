console.log("Aufgabe1:");

let array=[2,3,4,5,6];
let sum = 0;
for (var i = 0; i < array.length; i++){
  sum = sum + array[i];
  
}
console.log(sum)

let product = 1;
for (var i = 0; i < array.length; i++){
    product = product * array[i];  
}
console.log(product)


console.log("Aufgabe2:");
let arrayFriends=["Andreea", "Ovidiu","Natalia","Constantin"];

for (var i = 0; i < arrayFriends.length; i++) {
    console.log("Hello "  + arrayFriends[i]+ "!");
    
}

for (var i = 0; i < arrayFriends.length; i++) {
    console.log(arrayFriends[i] + " is at index " + arrayFriends.indexOf(arrayFriends[i])+ " of my friends array.");
    
}

console.log("Aufgabe3:");

let euroCities=["Paris", "London", "Valletta", "Prague", "Rome"];
console.log(euroCities.join(", "));

console.log("Aufgabe4:");
let numbers=[1,2,3,4,5];
for (var i = 0; i < arrayFriends.length; i++) {
    let result=""
    if(i%2 === 0){
    
    } else{
        
    }
    }
    console.log(result)

console.log("Aufgabe5:");

names=["matt", "sara", "lara"]

for(var i = 0 ; i < names.length ; i++){
    names[i] = names[i].charAt(0).toUpperCase()+ names[i].substr(1);
}   
console.log(names)




names2=["samuel", "MARIA", "luke", "mary"]

for(var i = 0 ; i < names2.length ; i++){
    names2[i] = names2[i].toLowerCase();
    names2[i] = names2[i].charAt(0).toUpperCase()+ names2[i].substr(1);
}   
console.log(names2)









