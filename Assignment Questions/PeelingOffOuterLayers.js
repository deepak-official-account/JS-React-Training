
function peelLayerOff(arr) {
    var ans = [];
    for (var i = 0; i < arr.length; i++){
        var temp = [];
        for (var j = 0; j < arr[0].length; j++){
            if (i != 0 && j != 0 && i!=arr.length-1 && j!=arr.length-1 ) temp.push(arr[i][j]);
        }
        ans.push(temp);
    }
    console.log(ans);
}

peelLayerOff([[1, 2],[1, 2]]);
peelLayerOff([
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
]);