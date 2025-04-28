var courses = ["HTML", "CSS", "JS"];
console.log(courses);
console.log(courses.toString());
console.log(courses.toString().split(","));
console.log(courses.join("-"));
console.log(courses.join("->"));

console.log(delete courses["HTML"]);
console.log(delete courses[0]);
console.log(courses);

// splice

// slice
var arr = [1, 4, 66, 77, 33, 22, 99, 22, 45, 75, 9, 67, 4375, 2];
console.log(arr.slice(3));
console.log(arr.slice(0, 5));
console.log(arr.slice(-5));
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(-5, -3));
console.log(arr.slice(-1, 5));
console.log(arr.slice(2, -3));
console.log(arr.slice(-20, -15));
console.log(arr.slice(30, 40));

// find
console.log(arr.find((x) => {
    return x > 1000;
}));

// includes
console.log(arr.includes(33));

console.log(arr.reverse());


let array = [[1, 2, 3, 5],
[54, 22, 33, 57],
[91, 23, 37, 55],
    [16, 82, 34, 56]];


function printLeftDiagonal(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[0].length; j++){
            if (i == j) {
                console.log(srr[i][j]);
            }
        }
    }
};


printLeftDiagonal(array);