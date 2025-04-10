var arr=[];

function tuckInArray(arr1,arr2){
    var ans=[];
    ans.push(arr1[0]);
    for(let i=0;i<arr2.length;i++){
        ans.push(arr2[i]);
    }
    ans.push(arr1[1]);
    console.log(ans);
}


tuckInArray([1,10],[2,3,4,5]);

//? last test case not handled