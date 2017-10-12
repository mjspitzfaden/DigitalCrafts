
function longv(phrase){

for (count=0; phrase.length > count; count++)
  {
      phrase1 = phrase.replace("aa","aaaaa");
      phrase1 = phrase1.replace("ee","eeeee");
      phrase1 = phrase1.replace("ii","iiiii");
      phrase1 = phrase1.replace("oo","ooooo");
      phrase1 = phrase1.replace("uu","uuuuu");

      }

  console.log(phrase1);


}




longv("cheese");
