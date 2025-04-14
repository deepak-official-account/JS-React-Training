function checkTrue(input) {
    return ((!!input) && input != "");
}
function checkAllTrueOrNot(arr) {
    return arr.every(checkTrue);

}

console.log(checkAllTrueOrNot([true,true,"j"]));