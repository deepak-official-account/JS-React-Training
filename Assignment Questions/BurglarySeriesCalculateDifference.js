function calculateDifference(obj, limit) {
    var sumOfItemsPrice = 0;
    var keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        sumOfItemsPrice += obj[keys[i]];
    }

    return sumOfItemsPrice - limit;

    
}

console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));