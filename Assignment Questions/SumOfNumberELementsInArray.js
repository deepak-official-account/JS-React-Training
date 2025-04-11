
function numbersSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
        }
    }
    console.log(sum);
}
numbersSum([1,2,"45",true,undefined]);