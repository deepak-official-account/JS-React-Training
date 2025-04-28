let data=[
    {
        name: "Deepak",
        age: 56,
        college: "Hitech",
        Course: "MCA",
           print: () => {
            console.log("Raja");
        }
    },
    {
        name: "Manish",
        age: 56,
        college: "JIms",
        Course: "BCA",
           print: () => {
            console.log("Jitesh");
        }
    },
    {
        name: "Ram",
        age: 26,
        college: "IIT",
        Course: "Btech",
        print: () => {
            console.log("Hlo");
        }
    },
    {
        name: "Harish",
        age: 36,
        college: "VIT",
        Course: "MCA",
        print: () => {
            console.log("Hi");
        }
    },
];

data.forEach((d) => {
    console.log(d["name"]);
})

for (let i = 0; i < data.length; i++){
    console.log(data[i]["print"]());
}




function getTypeOfInput(input) {
    if (Array.isArray(input)) {
        return "array";
    } else if (input === null) {
        return "null";
    } else {
        return typeof input;
    }
}


console.log(getTypeOfInput(null));
console.log(getTypeOfInput([]));
console.log(getTypeOfInput({}));
console.log(getTypeOfInput([[]]));
console.log(getTypeOfInput(true));
console.log(getTypeOfInput(1));