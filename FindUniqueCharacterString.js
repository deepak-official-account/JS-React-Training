function areUniqueCharacters(str) {
    var temp = {};
    for (var i = 0; i < str.length; i++){
        temp[str.charAt(i)] = (temp[str.charAt(i)] || 0) + 1;

    }

    var keys = Object.keys(temp);
    for (var i = 0; i < keys.length; i++){
        if (temp[keys[i]] > 1) return false;
    }
    return true;
}
function filterUnique(arr) {
    var ans = [];
    arr.forEach((x) => {
        if (areUniqueCharacters(x)) ans.push(x);
    });
    console.log(ans);
};

filterUnique(["abc", "aab", "gfd", "hht"]);