function is25Miles(array){
    var totalMiles = 0;
    for(var i = 0; i < array.length; i++){
        totalMiles += array[i];
    }
    return totalMiles == 25;
}

console.log(is25Miles([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
console.log(is25Miles([1, 2, 3, 4, 5])); 
console.log(is25Miles([10,10,5]));