var relation ={
    "Darth":"Mother",
    "Leia":"Father",
    "Han":"BrotherInLaw",
    "Jack":"Uncle",

}

function findRelation(name){
 
        return relation[name];

        
};


console.log("Luke I am your " + findRelation("Darth"));