var str = "Mind, Power, Soul";

// Use the substring() method to extract a substring 
var part = str.substring(6, 11);
console.log(part);


// JavaScript replace()
var str = "Mind, Power, Soul";
var part = str.replace("Power", "Space");
console.log(part);


//JavaScript replaceAll()
var str = "Mind, Power, Power, Soul";

// Use the replaceAll() method to replace all occurrences
var part = str.replaceAll("Power", "Space");
console.log(part);


// JavaScript toUpperCase()
var geeks = 'stands-for-GeeksforGeeks';

// Convert the string 'geeks' to uppercase using the toUpperCase() method
console.log(geeks.toUpperCase());

//JavaScript toLowerCase()
// Define a string variable 
var geeks = 'stands-for-GeeksforGeeks';

// Convert the string 'geeks' to lowercase using the toLowerCase() method
console.log(geeks.toLowerCase());



//JavaScript concat() Method
var gfg = 'GFG ';
var geeks = 'stands for GeeksforGeeks';

console.log(gfg.concat(geeks));


// JavaScript trim() Method
var gfg = 'GFG    ';
var newGfg = gfg.trim();


// JavaScript charAt() Method
var gfg = 'GeeksforGeeks';

// As string index starts from zero
// It will return first character of string
console.log(gfg.charAt(0)); 


// JavaScript split() Method
var gfg = 'GFG '
var geeks = 'stands-for-GeeksforGeeks'

// Split string on '-'. 
console.log(geeks.split('-'));


// JavaScript includes() Method
var str = "Welcome to GeeksforGeeks.";
var check = str.includes("Geeks");
console.log(check);

