function isEven(num) {
    return num % 2 == 0;
}

function changingMixedTypes(arr) {

    var ans = [];
    for (var i = 0; i < arr.length; i++){
        if (isEven(arr[i])) {
            ans.push(arr[i] + 1);
        } else if (typeof arr[i] == "boolean") {
            ans.push(!arr[i]);
        }
        else if (typeof arr[i] == "string") {
            var curr = arr[i];
            var str = "";
            str += curr.charAt(0).toUpperCase();
            str += curr.slice(1);
            str += "!";
            ans.push(str);
        }
        else {
            ans.push(arr[i]);
        }
    }

    console.log(ans);

}

changingMixedTypes([true, false, "deepak", 12, 13]);