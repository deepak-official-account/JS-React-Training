// Unary Plus (+) Operator
//The unary plus (+) converts an operand into a number
console.log(1 + +"1");

// Unary Minus (-) Operator
//The Unary Negation (-) operator is used to convert its operand to a negative number
console.log(1 + -"-1");

// typeof Operator
console.log(typeof 18);
console.log(typeof "Vivek Badola");
console.log(typeof true);
console.log(typeof { name: "Aman", age: 21 });
console.log(typeof [1, 2, 3, 4, 5]);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof function temp() { })
console.log('check array', Array.isArray([1,2])) //important

console.log()

// delete Operator
var obj = {
    name: 'vivek',
    company: 'thinksys',
    age: '30',
    salary: 50000
}

delete obj.company;

console.log(obj);

var arr = ['vivek', 'arun', 'shivam', 'rahul'];
delete arr[1];

console.log(arr.length);


