var ans = {};
var input = {
  name: "Deepak",
  age: 12,
  isMarried: false,
  hasGf: null,
  address: {
    state: "UP",
    city: "Noida",
  },
};
function deepClone(input, ans, keys, i) {
  if (i == keys.length) {
    // console.log(ans);
    return;
  }
  if (input[keys[i]] == null) {
    deepClone(input, ans, keys, i + 1);
  }
  if (getType(input[keys[i]]) == "array") {
    ans[keys[i]] = [];
    deepClone(input[keys[i]], ans[keys[i]], Object.keys(input[keys[i]]), 0);
  } else if (getType(input[keys[i]]) == "object") {
    ans[keys[i]] = {};
    deepClone(input[keys[i]], ans[keys[i]], Object.keys(input[keys[i]]), 0);
  } else {
    ans[keys[i]] = input[keys[i]];
      deepClone(input, ans, keys, i + 1);
  }

}
function getType(input) {
  if (input == null) {
    return null;
  } else if (Array.isArray(input)) return "array";
  else if (typeof input === "object") return "object";
  // return "primitive";
}
var keys = Object.keys(input);
deepClone(input, ans, keys, 0);
console.log(ans);


// -------------------------------------

// var ans = {};
// var input = {
//   name: "Deepak",
//   age: 12,
//   isMarried: false  ,
//   address: {
//     state: "UP",
//     city: "Noida",
//     pincode: [12, 45, 67],
//     county: {
//         name:"india"
//     }
//   }
// };

// function deepClone(input, ans, keys, i) {
//   if (i == keys.length) {
//     return;
//   }

//   const key = keys[i];
//   const value = input[key];
//   const type = getType(value);

//   if (type == "array") {
//     ans[key] = [];
//     deepClone(value, ans[key], Object.keys(value), 0);
//   } else if (type == "object") {
//     ans[key] = {};
//     deepClone(value, ans[key], Object.keys(value), 0);
//   } else {
//     ans[key] = value;
//   }

//   deepClone(input, ans, keys, i + 1);
// }

// function getType(input) {
//   if (input === null) return "null";
//   if (Array.isArray(input)) return "array";
//   if (typeof input === "object") return "object";
//   return "primitive";
// }

// var keys = Object.keys(input);
// deepClone(input, ans, keys, 0);
// console.log(ans);
// // console.log(object);
// console.log(ans===input);

// var a = [1, 2, 4];
// var k = Object.keys(a);
// console.log(k);
