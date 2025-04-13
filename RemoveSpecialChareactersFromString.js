function isSpecialCharacter(ch) {
    return (
      ch == "(" ||
      ch == ")" ||
      ch == "!" ||
      ch == "@" ||
      ch == "#" ||
      ch == "$" ||
      ch == "%" ||
      ch == "&" ||
      ch == "*"
    );
}

function removeSpecialCharacters(str) {
    var ans = "";
    for (var i = 0; i < str.length; i++){
        if (!isSpecialCharacter(str.charAt(i))) ans += str.charAt(i);
    }
    console.log(ans);
}


removeSpecialCharacters("The quick@ $brown fox& !");