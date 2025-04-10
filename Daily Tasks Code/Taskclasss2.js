function getTypeOfInput(input){
    if(Array.isArray(input)){
        return "array";
    }
    else if( input === null){
        return "null";

    }
    return typeof input;
};

function getTypeOfInput1(input){
    if( input === null){
        return "null";

    }
   
    else  if(Array.isArray(input)){
        return "array";
    }
    return typeof input;
};

console.log(getTypeOfInput([[]]));
console.log(getTypeOfInput({}));
console.log(getTypeOfInput(null)); // number
console.log(getTypeOfInput(undefined)); // undefined
console.log(getTypeOfInput(0)); // number
console.log(getTypeOfInput(34.555));
console.log(getTypeOfInput(true))
console.log("-------------------------------------------------------")
console.log(getTypeOfInput1([[]]));
console.log(getTypeOfInput1({}));
console.log(getTypeOfInput1(null)); // number
console.log(getTypeOfInput1(undefined)); // undefined
console.log(getTypeOfInput1(0)); // number
console.log(getTypeOfInput1(34.555));
console.log(getTypeOfInput1(true))