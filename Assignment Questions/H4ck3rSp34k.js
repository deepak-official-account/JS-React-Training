function encode(str) {
    var ans = "";
    for (var i = 0; i < str.length; i++){
        if (str.charAt(i) == "a") ans += 4;
        else if (str.charAt(i) == "e") ans += 3;
        else if (str.charAt(i) == "i") ans += 1;
        else if (str.charAt(i) == "o") ans += 0;
        else if (str.charAt(i) == "s") ans += 5;
        else ans += str.charAt(i);
    }
    console.log(ans);
}

encode("Deepak is a good boy");