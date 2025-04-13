function sortInDescending(arr) {
    return arr.sort((a, b) => b - a);
}
function makeMirrorArray(arr) {
    var newArray = arr.slice(0, arr.length - 1);
    newArray = sortInDescending(newArray);
    newArray.forEach((x) => {
        arr.push(x);
    })

    console.log(arr);

}

makeMirrorArray([1,2,3,4]);