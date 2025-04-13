function removeDuplicates(arr) {
    var ans = [];
    arr.forEach((x) => {
        if (!ans.includes(x)) ans.push(x);
    });

    return ans;
}

function sortInAscending(arr) {
    return arr.sort((a, b) => a - b);
}

function uniqueSort(arr) {
    arr = removeDuplicates(arr);
    arr = sortInAscending(arr);
    console.log(arr);
}

uniqueSort([9, 5, 5, 2, 2, 2, 3, 4, 5,]);