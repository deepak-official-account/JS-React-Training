function getFirstIndex(string, ch) {

    var firstIndex = -1;
    for (var i = 0; i < string.length; i++) {
        if (ch == string.charAt(i)) {
            firstIndex = i;
            break;
        }
    }

    return firstIndex;
}

function getLastIndex(string, ch) {

    var lastIndex = -1;
    for (var i = 0; i < string.length; i++) {
        if (ch == string.charAt(i)) {
            lastIndex = i;
        }
    }
    return lastIndex;
}
function getFirstAndLastIndex(string, ch) {
    var firstIndex = getFirstIndex(string, ch);
    var lastIndex = getLastIndex(string, ch);

    if (firstIndex === -1 || lastIndex === -1) return undefined;
    else return [firstIndex, lastIndex];
}


console.log(getFirstAndLastIndex("happy", "p"));