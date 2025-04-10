function getTotalInsults(obj) {
    return Object.keys(obj).length;
}

console.log(getTotalInsults({
    a: "moron", b:"idiot"
}));