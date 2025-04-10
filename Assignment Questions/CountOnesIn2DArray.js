function countOnes(arr){
    var count=0;
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[0].length;j++){
            if(arr[i][j]==1) count++;
        }
    }
    console.log(count);
}

countOnes([[0,1,1],[0,0,0],[1,1,1]]);