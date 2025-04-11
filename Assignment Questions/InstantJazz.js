
function jazzify(arr){
    if(arr.length == 0)
        return [];
     for(var i=0;i<arr.length;i++){
         if(arr[i].indexOf("7")==-1){
             arr[i] += "7";
         }
     }
     return arr;
}

console.log(jazzify(["G","F","C"])); 
console.log(jazzify(["G7","F","C"]));
