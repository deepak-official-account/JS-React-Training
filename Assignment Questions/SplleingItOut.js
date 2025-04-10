function spellingItOut(str) {
    var ans = [];
    var currentWord = "";
    for (var i = 0; i < str.length; i++) {
        currentWord += str.charAt(i);
        ans.push(currentWord);
    }
    console.log(ans);
}

spellingItOut("bee");