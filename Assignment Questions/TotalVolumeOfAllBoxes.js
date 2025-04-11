function calculateVolume(array) {
    var volume = 1;
    for (var i = 0; i < array.length; i++) {
        volume *= array[i];
    }
    return volume;
}
function getTotalVolume(arr){

    var totalVolume = 0;
    for (var i = 0; i < arr.length; i++) {
        totalVolume += calculateVolume(arr[i]);
    }
    return totalVolume;
}

console.log(getTotalVolume([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); 
console.log(getTotalVolume([[1, 2], [3, 4], [5, 6]])); 