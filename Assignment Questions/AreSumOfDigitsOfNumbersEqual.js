function getDigitSum(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
function checkIsDigitSumEqual(num1, num2) {
          var sum1 = getDigitSum(num1);
          var sum2 = getDigitSum(num2);
        
          return sum1 === sum2;
  };



console.log(checkIsDigitSumEqual(105, 42)); 