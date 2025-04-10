var input = { 1: "Mommy", 2: "please", 3: "help" };

function getMessageString(input) {
  var messageString = "";
  var keys = Object.keys(input);
  for (let i = 0; i < keys.length; i++) {
    messageString += input[keys[i]] + " ";
  }
  messageString += input[keys[1]];

  console.log(messageString);
}

getMessageString(input);
