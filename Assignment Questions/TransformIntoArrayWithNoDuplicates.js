function sort (arr){
    return arr.sort((a,b)=>a-b);
}

function removeDuplicates(arr){
    var ans=[];
    arr.forEach((x)=>{
        if(!ans.includes(x)){
            ans.push(x);
        }
    })
    return ans;
}
function transform(arr){
   arr=removeDuplicates(arr);
   arr=sort(arr);
   console.log(arr);
}

transform([67,2,23,4,5,54,7,8,4,10,11,1,13,14,15]);