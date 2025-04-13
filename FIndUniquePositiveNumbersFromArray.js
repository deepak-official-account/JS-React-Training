function uniquePositive(arr) {
  if (arr.length == 0) return [];
  var ans = [];
  arr.forEach((x) => {
    if (x > 0 && !ans.includes(x)) ans.push(x);
  });
  console.log(ans);
}

uniquePositive([-1, -4, 6, 3, 5, 3, -5, -8]);
