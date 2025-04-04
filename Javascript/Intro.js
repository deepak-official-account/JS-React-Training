// all negative and positive values are true
//! Js Returns undefined when no return keyword is used inside a method
//! - symbol not works in case of operator overloading 
// ! we can use (!) Symbol to convert any data type to boolean
//? All browsers uses V8 engine for js
//? Js is not a compiled language
//? Js is a interpreted language
// hoisting works for only var 
//! Null is an object in js

//todo: Variables
var _name="Deepak";
var $company="thinksys";
// var 1role=".Net Developer"; // error
console.log(_name);
console.log($company);
// console.log(1role); // error


function checkTypeOfInput(value){
    return (typeof value);  
}

console.log(checkTypeOfInput(1));
console.log(checkTypeOfInput("Deepak"));
console.log(checkTypeOfInput(true));            
console.log(checkTypeOfInput(null));
console.log(checkTypeOfInput(undefined));   
console.log(checkTypeOfInput({}));
console.log(checkTypeOfInput([]));  
console.log(checkTypeOfInput(function(){}));
