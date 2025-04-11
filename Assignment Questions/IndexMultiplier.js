function indexMultiplier(arr) {
  var ans=0;
  for(var i=0;i<arr.length;i++){
    ans+=arr[i]*i;
  }
  console.log(ans);
};

indexMultiplier([1,2,3,4,5]); 