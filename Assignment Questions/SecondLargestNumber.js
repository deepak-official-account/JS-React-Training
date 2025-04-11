function secondLargestNumber(array){
   var largest=-1;
   var secondLargest=-1;
    for(var i=0;i<array.length;i++){
        if(array[i]>largest){
            secondLargest=largest;
            largest=array[i];
        }else if(array[i]>secondLargest && array[i]<largest){
            secondLargest=array[i];
        }
    }
  console.log(secondLargest);
};


secondLargestNumber([1,2,3,4,5]);