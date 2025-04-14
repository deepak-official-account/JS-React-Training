function backToHome(str) {
    var frequency = {};

    for (var i = 0; i < str.length; i++) {
        frequency[str.charAt(i)] = (frequency[str.charAt(i)] || 0) + 1;
    }

    var keys = Object.keys(frequency);
    var value = frequency[keys[0]];
    for (var i = 1; i < keys.length; i++){
        if (frequency[keys[i]] != value) return false;
    }
    return true;

}

console.log(backToHome("EWWN"));
