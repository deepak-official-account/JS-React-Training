function sortSocietyName(societyName){
    var charArray=societyName.split("");
    for(let i=0;i<charArray.length-1;i++){
        for(let j=i+1;j<charArray.length;j++){
  
            if(charArray[i]>charArray[j]){
                var temp=charArray[i];
                charArray[i]=charArray[j];
                charArray[j]=temp;
            }
        }
    }
    
    return charArray.toString();
}
function getSecretSocietyName(names){
    var societyName="";
    names.forEach((name)=>{
        societyName+=name.charAt(0);
    });
    
    console.log(sortSocietyName(societyName));
    
}

getSecretSocietyName(["Geetika","Zehen","Bisht"]);