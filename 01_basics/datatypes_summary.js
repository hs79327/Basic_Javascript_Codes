// Primitive

// 7 types : String, Number, boolean, null, undefined, symbol, BigInt

const score = 100;
const score1 = 100.20;

let id = Symbol('123');
let id1 = Symbol('123');
// console.log(id === id1); // output => False

// Non-Primitive or Reference

// Types : Array, Objects, Functions

let names = ["harshal", "sharma"]; // Array

let myObj = {
    name : "harshal",
    age : 25
} // Object

const myFunction = function(){
    console.log("Hello");
}