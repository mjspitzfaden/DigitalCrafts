function postive(list){
var number=new Array();
var count1 = 0
for (count=0; list.length > count; count++){
     if (list[count] >= 0){
        number[count1] = list[count];

        count1 = count1 + 1;
     }
}
  return number
}




var numbers=new Array();
numbers = [-1, 2, -3];
console.log(postive(numbers));
