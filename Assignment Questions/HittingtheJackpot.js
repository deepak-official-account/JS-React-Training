function hittingJackpot(array){
    var curr= array[0];
    var isSame=false;
    for(var i=1;i<array.length;i++){
        if(array[i]===curr){
            isSame=true;
        }else{
            return false;
        }
    }
    return true;
}

console.log(hittingJackpot(["@","@","@","@"])); 
console.log(hittingJackpot(["#","#","%","#"])); 