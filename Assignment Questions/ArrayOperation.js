function performOperation(start, end, divisor) {
    var ans = [];
    for (var i = start; i <= end; i++) {
        if (i % divisor == 0) {
            ans.push(i);
        }
    }

    console.log(ans);
}

performOperation(7, 9, 2);