
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
