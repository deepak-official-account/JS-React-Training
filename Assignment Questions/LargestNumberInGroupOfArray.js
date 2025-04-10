function getMax(arr){
    let max=-999999;
    arr.forEach((x)=>{
        max=Math.max(max,x);
    });
    return max;
}
function largestFromGroup(arr){
    var ans=[];
    for(let i=0;i<arr.length;i++){
         ans.push(getMax(arr[i]));
    }

    console.log(ans);
}

largestFromGroup([[1,2,3],[7,66,4],[78,96,33]]);