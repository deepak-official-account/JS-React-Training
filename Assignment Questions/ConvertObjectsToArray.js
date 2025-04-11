function convertToArray(obj) {
    if (!!obj ) {
        var keys = Object.keys(obj);
        if (keys.length === 0) {
            console.log([]);
            return;
        };
        var ans = [];
        for (var i = 0; i < keys.length; i++) {
            var currArray = [keys[i].toString(), obj[keys[i]]];
            ans.push(currArray);
    
        }
        console.log(ans);
     
    }else{
        console.log("Not an Object");
        return;
    }
   
}


convertToArray({ a: 1, b: 2, c: 3 });
convertToArray({});
