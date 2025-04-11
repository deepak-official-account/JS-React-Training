function arrayOfMultiples(num1,num2){
    var ans=[];
    for(var i=1;i<=num2;i++){
        ans.push(num1*i);
    }
    console.log(ans);

}


arrayOfMultiples(7,5);