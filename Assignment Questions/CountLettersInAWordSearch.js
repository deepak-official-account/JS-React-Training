function letterCount(arr,ch) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[0].length; j++){
            if (arr[i][j] == ch) count++;
        }
    }
    console.log(count);
}

letterCount([["d","a",'a','g'],["r","r","y","o"],["o","p","f","d"]],"d");