"use strict" // treat all JS code as newer version

// alert(3 + 3) we are using nodejs not browser

// console.log(3 + 3); // code readability should be high

// console.log("Musab");


let name = "Musab Khan"
let age = "23"
let isLoggedIn = false 
let getData = null;
let un_defined = undefined

// Number  => 2 to power 
// bogint
// sting => ""
// boolean => true / false 
// null => Standalone value that is nothing! 
// undefined =>
// symbol => unique


// object 

console.table({
    name: typeof name, 
    age: typeof age, 
    isLoggedIn: typeof isLoggedIn,
    getData: typeof getData,
    un_defined: typeof un_defined
});
