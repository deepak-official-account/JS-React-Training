
function moveToEnd(arr, num) {
    var swapIndex = arr.length;
 for (var i = 0; i < arr.length; i++) {
     if (arr[i] == num) {
         var temp = arr[i];
         arr[i] = arr[swapIndex];
         arr[swapIndex] = temp;
         swapIndex--;
             }
    }
    console.log(arr);
}

moveToEnd([1,3,2,4,4,1],1);