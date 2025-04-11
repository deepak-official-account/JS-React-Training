
function matchLastItem(arr) {
    if (arr.length < 2) {
        return false; 
    }
    var concatenatedString="";
    for(var i=0;i<arr.length-1;i++){
        concatenatedString+=arr[i];
    }

    return concatenatedString == arr[arr.length-1];
  
}


console.log(matchLastItem(["hello", "world", "helloworld1"])); 