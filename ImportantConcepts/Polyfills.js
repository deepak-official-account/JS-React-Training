Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

var ans = [1, 2, 3, 4].myMap((x) => x * 6);
console.log(ans);

console.log("--------------------------------------");
Array.prototype.myfilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

var ans = [1, 2, 3, 4].myfilter((x) => x % 2 == 0);
console.log(ans);
console.log("--------------------------------------");

Array.prototype.mysome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) return true;
  }
  return false;
};

console.log([1, 3, 5].mysome((x) => x % 2 == 0));

console.log("--------------------------------------");
Array.prototype.myevery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) return false;
  }
  return true;
};

console.log([2, 4].myevery((x) => x % 2 == 0));

console.log("--------------------------------------");
Array.prototype.myreducer = function (callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;
  if (accumulator == undefined) {
    accumulator = this[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

// console.log([1, 2, 3, 4].myreducer());

console.log("--------------------------------------");

function getKeys(obj) {
  let keys = [];

  for (let i in obj) {
    // if (obj.hasOwnProperty(i))
    keys.push(i);
  }
  return keys;
}

let obj = {
  name: "Deepak",
  address: {
    city: "Noida",
      state: "Up",
      pincode: [12345, { key: 54566 }, 65788],
      person: {
          name:"Geetika"
      }
  },
  age: 23,
};
console.log(getKeys(obj));


console.log("--------------------------------------");
function getType(input) {
    if (input == null) return input;
    else if (Array.isArray(input)) return "array";
    else if (typeof input === "object") return "object";
    else return "primitive";
   }
function deepClone(obj) {
    if (getType(obj) == null || getType(obj) === "primitive") return obj;

    if (getType(obj) === "array")
        return obj.map(x => deepClone(x));

    const clonedObj = {};
    for (let i in obj) {
        if(obj.hasOwnProperty)
        clonedObj[i] = deepClone(obj[i]);
    }
    return clonedObj;
}

const o = deepClone(obj);
console.log(JSON.stringify(deepClone(obj)));

console.log(obj == o);

console.log("--------------------------------------");

// check it out
function deepEqualCheck(obj1, obj2) {
    // same reference or value
    if (obj1 == obj2) return true;

    // if keys length not same
    if (Object.keys(obj1).length != Object.keys(obj2).length) return false;

    // one or both are null or one or both are object
    if (obj1 === null || obj2 === null || typeof obj1 !== "object" || typeof obj2 !== "object") return false;


    // if any key of
    for (let key in obj1) {
        if (!obj2.hasOwnProperty(key) || !deepEqualCheck(obj1[key], obj2[key])) return false;
    }
    return true;
}


let obj2 = {
  name: "Deepak",
  address: {
    city: "Noida",
    state: "Up",
    pincode: [12345, { key: 54566 }, 65788],
    person: {
      name: "Geetika",
    },
  },
  age: 23,
};

console.log(deepEqualCheck(obj,obj2));