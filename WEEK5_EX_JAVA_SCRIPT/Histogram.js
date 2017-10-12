
function word_histogram(words) {
  var pharse = words.split(' ');
  console.log(pharse);
  var counts = {};
for (var attribute in pharse)  {
    var word = pharse[attribute];
    if (word in counts) {
      counts[word]=counts[word] + 1;
    } else {
      counts[word] = 1;
    }
  }
  return counts;
}



console.log(word_histogram('to be or not to be'));
