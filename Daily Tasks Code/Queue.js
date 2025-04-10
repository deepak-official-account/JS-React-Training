var arr=["Java","C++","java"];
function enqueue(input,arr){
    (!!input && !!arr) ? arr.push(input) : console.log("Invalid array or input" );
}

function dequeue(arr){
    (!!arr && arr.length>0) ? arr.shift(): console.log("Array is either empty or Invalid");
}


enqueue("python",arr);
console.log(arr);
enqueue(null,arr);
// console.log(arr);
enqueue(undefined,arr);
// console.log(arr);

dequeue(arr);
console.log(arr);
dequeue(null);
dequeue(undefined);
dequeue([]);