function squarePatch(num) {
    if (num == 0) return [];
    var ans = [];
    for (var i = 0; i < num; i++){
        var tempArray=[]
        for (var j = 0; j < num; j++){

            tempArray[j] = num;

        }
              ans.push(tempArray);
    }
    return ans;
}

console.log(squarePatch(3));