function getFormattedNumber(input) {
    if (input.length == 10) {
        // var phoneNumber = "(";
        // input.forEach((x, index) => {
        //     phoneNumber += x;
        //     if (index == 2) {
        //         phoneNumber += ")";
        //     }
        //      if (index > 2 && index <6) {
        //         phoneNumber += " ";
        //     }

        // })
        return `(${input[0]}${input[1]}${input[2]}) ${input[3]}${input[4]}${input[5]}-${input[6]}${input[7]}${input[8]}${input[9]}`;
    } else {
        console.log("Invalid Array Size");
    }
}

console.log(getFormattedNumber([1,2,3,4,5,6,7,8,9,0]));