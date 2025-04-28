// the closure contains the reference not the value
// var are not blocked scoped but let and const are
function outer() {
  let x = 20;
  function inner() {
    console.log(x);
  }

  return inner;
}
var a = outer;
console.log(a);
var fn = outer();
fn();

console.log("-----------------------------------------------------------");
function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

var mul = multiplier(2); //value of x
console.log(mul(5)); // value of y

// the inner anonymous function will hold the access of parameter x of its outer function

console.log("-----------------------------------------------------------");

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("value is", i);
  }, 10);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("value=", i);
  }, 10);
}

console.log("-----------------------------------------------------------");

function Adder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = Adder(5);
const add7 = Adder(7);

console.log(add5(2));
console.log(add7(2));

console.log("-----------------------------------------------------------");
var arr = [];
for (var i = 0; i < 3; i++) {
  arr[i] = function () {
    console.log(i);
  };
}

arr[0]();
arr[1]();
arr[2]();

var arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = function () {
    console.log(i);
  };
}

arr[0]();
arr[1]();
arr[2]();

console.log("-----------------------------------------------------------");

// in case of let also the output remain same as the inner function will hold the reference of the variable x
function Outer() {
  var x = 10;

  function Inner() {
    x = 44;
    console.log(x);
  }
  Inner();
  console.log(x);
}

Outer();

console.log("-----------------------------------------------------------");

function createGame() {
  let score = 0;
  return function () {
    score++;
    return score;
  };
}

const play = createGame();
console.log(play());
console.log(play());

console.log("-----------------------------------------------------------");
// !
var modules = (function () {
  var privateVar = "private";
  function privateMethod() {
    return privateVar;
  }
  return {
    publicMethod: function () {
      return privateMethod(); // returning the calling of function , it will simply pass the execution or return variable
    },
  };
})();

console.log(modules.publicMethod());
console.log(modules.privateVar);
console.log(modules.privateMethod); // parenthesis giving error and i am getting undefined for 2 and 3 statement
// why we cannot access private variable directly
console.log(
  "-------------------------------------------------------------------"
);


// ! doubt
var x = 20;

function foo() {
    console.log(x);
    var x = 40;
    console.log(x);
};
foo();
