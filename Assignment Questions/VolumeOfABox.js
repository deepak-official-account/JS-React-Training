function getVolume(obj) {
    if (!!obj)
        return (obj["width"] * obj["length"] * obj["height"]);
    else
        return "Invalid Object";
}

console.log(getVolume({ width: 2, length: 5, height: 3 }));
console.log(getVolume(null));