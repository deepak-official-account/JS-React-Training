function convertToArray(obj) {
    if (!!obj) return;
    var keys = Object.keys(obj);
    if (keys.length == 0) return [];
    var ans = [];
    for (var i = 0; i < keys; i++){
        var newArray = [keys[i].toString(), obj[keys[i]]];
           console.log(newArray);
        ans.push(newArray);
    }
    console.log(ans);
}

convertToArray({ a: 1, b: 2 });
convertToArray({});