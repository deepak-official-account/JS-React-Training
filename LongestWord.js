function getLongestWord(str) {
    var charArray = str.split(" ");
    var biggestWord = charArray[0];

    for (var i = 1; i < charArray.length; i++){
        if (biggestWord.length < charArray[i].length) {
            biggestWord = charArray[i];
        }
    }
    console.log(biggestWord);
}
getLongestWord("Hello My name is deepak Bisht");