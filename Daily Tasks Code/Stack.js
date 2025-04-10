var arr=["Java","C++","java"];

function push (arr,input){

    (!!arr&&!!input) ? arr.unshift(input) : console.log("Invalid array or input" );

    console.log(arr);    

}

function pop(arr){
    (!!arr && arr.length>0) ? arr.shift(): console.log("Array is either empty or Invalid");

}

push(arr,"python");
push(arr,null); 
push(arr,undefined);
  
pop(arr);
console.log(arr);
pop(arr);
console.log(arr);
pop(arr);
console.log(arr);
pop(arr);
console.log(arr);
pop(arr);
console.log(arr);
pop(null);
pop(undefined);