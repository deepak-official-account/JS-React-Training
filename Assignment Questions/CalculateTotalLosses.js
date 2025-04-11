function calculateTotalLoss(obj) {
    var totalLoss = 0;
    if (!!obj) {
        var keys = Object.keys(obj);
        if (keys.length == 0) {
            return "Lucky you!";
        }

        keys.forEach(function (key) {

            totalLoss += obj[key];

        });
    }
    return totalLoss;
}


console.log(calculateTotalLoss({ "A": 1, "B": 2, "C": 3 })); 