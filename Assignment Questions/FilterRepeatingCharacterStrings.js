function isSingleCharacter(str) {
    var temp = {};
    for (var i = 0; i < str.length; i++){
        temp[str.charAt(i)] = (temp[str.charAt(i)] || 0) + 1;
    }
    var keys = Object.keys(temp);
    return keys.length == 1;
}
function identicalFilter(arr) {
    var ans = [];
    for (var i = 0; i < arr.length; i++){
        if (isSingleCharacter(arr[i])) ans.push(arr[i]);
    }
    console.log(ans);
}

identicalFilter(["aaaa","aba","gg","j","gde"]);