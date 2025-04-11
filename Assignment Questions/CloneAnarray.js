function cloneArray(array) {
    var ans = [];

    for (var i = 0; i < array.length; i++) {
        ans.push(array[i]);
    }
    ans.push(array);
    
    console.log(ans);
};

cloneArray([1, 2, 3, 4, 5]);