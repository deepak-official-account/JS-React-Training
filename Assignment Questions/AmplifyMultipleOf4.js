function amplify(num){
    var ans=[];
    for(let i=1;i<=num;i++ ){
        if(i%4==0){
            ans.push(i*10);
        }
    }
    
    console.log(ans);
}

amplify(25);