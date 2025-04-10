function filterArray(arr){
    var ans=[];
    for(let i=0;i<arr.length;i++){
        if(!isNaN(arr[i])){
            ans.push(arr[i]);
        }
    }
console.log(ans);    
}

filterArray([1,"a",2,3,"b"]);
