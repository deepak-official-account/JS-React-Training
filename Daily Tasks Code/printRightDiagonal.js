function printRightDiagonal(arr){
    var rows=arr.length,columns=arr[0].length;
    if(rows<=0 || columns <=0 || rows!=columns) return;
    for(var i=0;i<rows;i++){
        for(var j=0;j<columns;j++){
            if(i+j==rows-1){
                console.log(arr[i][j]);
            }
        }
    }
}
