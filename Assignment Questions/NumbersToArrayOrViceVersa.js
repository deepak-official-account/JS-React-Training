function convert(input){
    if(typeof input == "number") return Array.of(input); // toArray not working

    if(Array.isArray(input)) return Number(input);
}
console.log(convert([123]));
console.log(convert(1290));
