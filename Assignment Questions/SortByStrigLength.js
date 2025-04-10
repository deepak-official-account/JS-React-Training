function sortByStringLength(array) {
    if(array.length<=1) {console.log( array); return;}
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i].length > array[j].length) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  console.log(array);
}

sortByStringLength(["a", "ddd", "eeeee", "cc"]);
sortByStringLength([])
sortByStringLength(["a"]);
