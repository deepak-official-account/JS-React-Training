function concat(arr){
    if(!!arr){
        var ans=[];
        for(var i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
             for(var j=0;j<arr[i].length;j++){
                ans.push(arr[i][j]);
            }}else{
                ans.push(arr[i]);
            }
        }
        console.log(ans);
    }
    else{
        console.log("Not an Array");
        return;
    }
};

concat([1,2,[3,4],5,[6,7]]);
concat([1,2,3,4,5]);
concat([1,2,[3,4],5,[6,7]]);