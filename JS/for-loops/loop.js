console.log("Aufgabe 1")

// Write a program to add up the numbers 1 to 20.
let summe = 0;
for (let x = 1; x<=20; x++){
    summe = summe +x;
}
console.log(summe);


console.log("Aufgabe 2")

/*for (let x = 1; x <= 5; x++){
    let howMany = "one";
    if (x ===1) {
        console.log("There is one bottle of beer on the wall.");
        continue;
    }
    if (x ===2) howMany = "two";
    if (x ===3) howMany = "three";
    if (x ===4) howMany = "four"
    if (x ===5) howMany = "five"
    let line = "There are " + howMany + " bottles of beer on the wall"
    console.log(line);
    
  

}*/

// SWITCH

let howMany = "";
for (let x = 1; x <= 5; x++){
    switch(x){
        case 1:
            console.log("There is one bottle of beer on the wall");
            continue;
            break;
        case 2:
            howMany = "two";
            break;    
        case 3:
           howMany = "three";
           break;
        case 4:
            howMany = "four";
            break;
        case 5:
            howMany = "five";
            break;
    }
    console.log(`There are ${howMany} Bottles of Beer on the wall`);
}



console.log("Aufgabe 3")

for( let i=0; i<=20; i++){
    if (i === 0) {
        console.log(i +  " is even");
}
else if (i % 2 === 0) {
        console.log(i + " is even");   
}
else {
        console.log(i + " is odd");
}
}

console.log("Aufgabe 4")



for(let a = 0; a<10; a++){
    console.log(a * 9);
}


console.log("Aufgabe 5")


for(let b = 1; b<=100; b++){
     if((b%3 === 0)&&(b%5 === 0)){
        console.log("FizzBuzz")
} 
    else if (b%3 === 0){
        console.log("Fizz")
    }
   else  if(b%5 === 0){
        console.log("Buzz")
    }
    else  (
    console.log(b))
}


console.log("Aufgabe 6")

let sum = 0;
let c= 1;
for ( c; c<=1000; c++){
    
    if((c%3 === 0)||(c%5 === 0)){
        sum = sum + c;
        
    }
}
console.log(c)
console.log(sum)

console.log("Aufgabe 7a")



for(y = 0; y<1000;){
    y=y +100;
    console.log(y);
}

console.log("Aufgabe 7b")



for(e = 1; e<=128; e*=2 ){
    
    console.log(e);
} 

console.log("Aufgabe 7c")

for(d = 0; d<=10; d++){
    if (d%2 ===0){
    console.log(d)};
}

console.log("Aufgabe 7d")



for(z = 1; z<15; z++){
    z=z+2;
    console.log(z);
}

console.log("Aufgabe 7e")



for(f = 9; f>0; f--){
    console.log(f);
}

console.log("Aufgabe 7f")


for(g = 1; g<=4; g++){
    for( m =1; m<=3; m++){
    console.log(g);
}}


console.log("Aufgabe 7g")



for(h = 0; h<=4; h++ ){
    for(h1 = 0; h1<=4; h1++)
    console.log(h1);
}
console.log("Aufgabe 8:")
// write a program to check whether a word is a palindrome or not.
// lol, anna, level, madam
let wort = "madam";
let antwort = "this is a palindrome";

for(let x = 0; x < wort.length; x++){
    let forward = wort[x];
    let backward = wort[wort.length-1-x];
    if (forward !== backward) {
        antwort = "this is not a palindrome!";
        break;
    }
}

console.log(antwort); 

     