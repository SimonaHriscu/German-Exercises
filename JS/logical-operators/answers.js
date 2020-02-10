
console.log("Aufgabe 1");
a=true;
b=false;
console.log(a&&b); //are a and b equal? true&false =false;
console.log(a||b); // are a or b equal? true||false = true;
console.log(!(a&&b));// are NOT a and be equal? !true&false = true;


console.log("Aufgabe 2");
x=2;
y=3;
z=4;

console.log((x>z)&&(x>y));//are false and false equal? false&&false= false;
console.log(x!==y);//are NOT x equal y? NOT false=true;
console.log((z<y)||(z>x));// are false||true? = true;
console.log((x===z)||(x!==y));//false||true? = true;
console.log((x>=10)&&(y<=10));// false&&true = false;
console.log(((x*z)<100))||(((x*y)>100));//true||true = true;