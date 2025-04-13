function capitalize(arr) {
    for (var i = 0; i < arr.length; i++){
        var newStr = arr[i].charAt(0).toUpperCase();
        newStr += arr[i].slice(1);
        arr[i] = newStr;
    }
    console.log(arr);
}

capitalize(["abc", "def"]);