console.log("Aufgabe 1:")

let findExponents = (a, b) => {
    //Check ob a und b zahlen sind
    if(typeof a !== 'number' || typeof b !== 'number'){
        console.log("Fehler: Keine Zahlen.");
    } else {
        let exponentResult = 1;
        let antwort = "";
        for (let i = 1; i <= b; i++){
            exponentResult = exponentResult * a;
            antwort = antwort + " " + exponentResult;
        }
        console.log(antwort);
    }
}
findExponents(3,5);

console.log("Aufgabe 2:")

var fruit = "cherry";
let printFavoriteFruit = () => {
  
        console.log("My favorite fruit is:"+ fruit );
    }

 printFavoriteFruit();


 
 console.log("Aufgabe 3:")

 let exponent = (x,y) => {
    result = (Math.pow(x,y)) ;
    
    console.log(result);
 }
 exponent(3,4);

 /*console.log("Aufgabe 4:")
 let w = 3;
 let z = 4;

 console.log(Math.pow (w,z));*/