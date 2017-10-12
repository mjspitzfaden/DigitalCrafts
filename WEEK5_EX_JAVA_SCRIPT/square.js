
function repeatStringNumTimes(string, times) {
  if(times < 0)
    return "";
  if(times === 1)
    return string;
  else
    return string + repeatStringNumTimes(string, times - 1);
}

function square (num){
  var count = 0;
  var total;
  while (num > count){
    console.log(repeatStringNumTimes("*", num));
    count++;
  }
}

square(12);
