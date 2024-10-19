// Primitive

    // 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt.

// Refference (Non premitive)

    // 3 types: Arrey, Objects, Functions.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(anotherId, id);

bigNumber = 98309583983083490584998474739n;

// console.log( typeof bigNumber );

const heros = ["Superman", "Spiderman", "Batman", "Ironman"]

// let i = 0;
// while (i < heros.length) {
//     let answer = heros[i].replace("man", "");
//     console.log(answer)
//     i++
// }

// New way to do the same thing:

    // I think that is way cooler then the old one and i think i need to do it more often!
    heros.forEach(hero => {
        answer = hero.replace("man", "")
        // console.log(answer);
    });

let myObj = {
    name : heros[0],
    age : 22

}

// console.log(typeof myObj);

const type_somthing = "My name is musab!";

const myFuction = function(X){
    console.log(X + " " + "Hello World.");
}
