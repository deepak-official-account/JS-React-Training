function isAverageWholeNum(array){
    var sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    
    return (sum/array.length)%1==0;
}

console.log(isAverageWholeNum([1,5,6]));