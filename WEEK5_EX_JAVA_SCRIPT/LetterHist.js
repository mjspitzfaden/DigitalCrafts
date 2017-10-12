

function letter(word) {
  var counts = {};
for (var attribute in word)  {
    var letter = word[attribute];
    if (letter in counts) {
      counts[letter]=counts[letter] + 1;
    } else {
      counts[letter] = 1;
    }
  }
  return counts;
}



console.log(letter("bannas"));
