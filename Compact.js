function compact(arr) {
  var ans = [];
  arr.forEach((element) => {
    if (!!element && element !== "" && !isNaN(element) && element != 0)
      ans.push(element);
  });
  console.log(ans);
}

compact([0, false, "", null, undefined, 4, 6]);
