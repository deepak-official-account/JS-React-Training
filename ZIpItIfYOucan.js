function zipIt(arr1, arr2) {
    if (arr1.length != arr2.length) return "sizes don't match";
    var ans = [];
    for (var i = 0; i < arr1.length; i++){
        var tempArray = [];
        tempArray.push(arr1[i]);
        tempArray.push(arr2[i]);
        ans.push(tempArray);
    }
console.log(ans);

}
zipIt(["a","b"],["c","d"]);