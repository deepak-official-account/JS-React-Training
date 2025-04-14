function puzzlePieces(arr1, arr2) {
    var ans = [];
    for (var i = 0; i < arr1.length; i++){
        ans.push(arr1[i] + arr2[i]);
    }

    var x = ans[0];
    return ans.every((e) => e==x);
}
console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 6]));
