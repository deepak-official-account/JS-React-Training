var obj = {
    1: "circle",
    2: "semi-circle",
    3: "triangle",
    4: "square",
    5: "pentagon",
    6: "hexagon",
    7: "heptagon",
    8: "octagon",
    9: "nonagon",
    10: "decagon"
};

function getShape(num) {
    return obj[num];
}

console.log(getShape(1));
console.log(getShape(4));