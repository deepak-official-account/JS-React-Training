function getSum(arr,n){
    if(n==0) {
        console.log(0);
        return ;
    }
    var sum=0;
    for(var i=0;i<n;i++){
        sum+=arr[i];
    }
    console.log(sum);
}

getSum([1,2,3,4,5],0);