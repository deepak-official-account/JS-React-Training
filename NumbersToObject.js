function numToObject(array) {
  var ans = [];

  array.forEach((element) => {
    var tempObj = {};
    tempObj[element.toString()] = String.fromCharCode(element);
    ans.push(tempObj);
  });

  console.log(ans);
}

numToObject([118, 117, 120]);


