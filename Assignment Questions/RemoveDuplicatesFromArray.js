function removeDuplicates(array){
    var ans=[];
    ans.push(array[0]);

    for(var i=1;i<array.length;i++){
        if(!ans.includes(array[i])){
            ans.push(array[i]);
        }
    }

    console.log(ans);
};

removeDuplicates([1,2,3,4,5,6,7,8,9,10]);
removeDuplicates(["a","b","a"]);