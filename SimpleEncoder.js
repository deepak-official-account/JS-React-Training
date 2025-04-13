"use strict";

function countFrequencyOfEachWord(str) {
  var frequency = {};
  for (var i = 0; i < str.length; i++) {
    frequency[str.charAt(i)] = (frequency[str.charAt(i)] || 0) + 1;
  }
  return frequency;
}

function simpleEncoder(str) {
  var frequency = countFrequencyOfEachWord(str);
  var ans = "";
  for (var i = 0; i < str.length; i++) {
    if (frequency[str.charAt(i)] > 1) ans += "]";
    else ans += "[";
  }
  console.log(ans);
}

simpleEncoder("Matt");
