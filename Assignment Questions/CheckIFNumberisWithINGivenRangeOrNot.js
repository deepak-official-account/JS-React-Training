function checkIsaWithInRange(num, obj) {
    return (obj["min"] <= num && obj["max"] >= num);
}

console.log(checkIsaWithInRange(4, { min: 0,max:2}));