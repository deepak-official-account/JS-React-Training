function factorChain(arr) {
    for (var i = 0; i < arr.length - 1; i++){
        if (arr[i + 1] % arr[i] != 0) return false;
    }
    return true;
}


console.log(factorChain([3, 6, 12, 23]));