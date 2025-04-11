function isNemoPresent(str){
    var charArray=str.split(" ");
      for(var i=0;i<charArray.length;i++){
        if(charArray[i]==="Nemo"){
            return "I found Nemo at "+(i+1)+"!";
        }
}
    return "I can't find Nemo :(";
}
console.log(isNemoPresent("I am Nemo1 !"));