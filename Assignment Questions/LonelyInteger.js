function lonelyInteger(array) {
    var lonelyInteger = 0;
    array.forEach(element => {
        lonelyInteger += element;
    });
    return lonelyInteger;
};

console.log(lonelyInteger([1,-1,2,-2,-3]));
