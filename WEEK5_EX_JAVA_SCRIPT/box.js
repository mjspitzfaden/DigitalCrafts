function repeatStringNumTimes(string, times) {
  if(times < 0)
    return "";
  if(times === 1)
    return string;
  else
    return string + repeatStringNumTimes(string, times - 1);
}

function box (width, height){

  newWidth = width - 2
  newHeight = height - 2
  str = ' ';
  console.log(repeatStringNumTimes("*", width));
  for(i=0; i<newHeight; i++){
      console.log('*'+str.repeat(newWidth) + '*');

    }

  console.log(repeatStringNumTimes("*", width));


}



 box(7,8);
