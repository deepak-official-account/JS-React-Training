
function isSpecialArray(arr){
    for(var i=0;i<arr.length;i++){
        if(i%2==0 && arr[i]%2!=0){
            return false;
        }
        if(i%2!=0 && arr[i]%2==0){
            return false;
        }
    }
    return true;
}


console.log(isSpecialArray([1,2,3,4,5])); // false
console.log(isSpecialArray([2,7,4,9,6,1,6,3]));