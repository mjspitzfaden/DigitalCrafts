function repeatStringNumTimes(string, times) {
  if(times < 0)
    return "";
  if(times === 1)
    return string;
  else
    return string + repeatStringNumTimes(string, times - 1);
}


function printBanner(message){

  var num = message.length +2;
  console.log(repeatStringNumTimes("*", num));
  console.log("*" + message + "*");
  console.log(repeatStringNumTimes("*", num));




}

printBanner("WELCOME TO DIGITAL CRAFTS");
