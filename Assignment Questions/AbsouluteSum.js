function getAbsoluteSum(arr) {
    var sum = 0;
    arr.forEach((x)=>{
      sum+=Math.abs(x);
    });
    console.log(sum);
}

getAbsoluteSum([-1, 2, -3, 4, -5]);