function miniPeaks(arr) {
    var ans = [];

    for (var i = 1; i < arr.length - 1; i++){
        if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) ans.push(arr[i]);
    }
    console.log(ans);
}

miniPeaks([4,5,2,1,4,9,7,2]);