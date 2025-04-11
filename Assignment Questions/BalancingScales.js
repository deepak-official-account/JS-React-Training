function calculateSum(array, start, end) {
    var sum = 0;
    for(var i=start;i<end;i++){
 sum+=array[i];
    }
    return sum;
}
function scaleTip(array){
    var mid =Math.floor(array.length/2);
   var leftSum = calculateSum(array,0,mid);
    var rightSum = calculateSum(array,mid,array.length);
    if(leftSum>rightSum) return "Left";
    else if(leftSum<rightSum) return "Right";
    else return "Balanced";

}

console.log(scaleTip([0,0,1,1]));