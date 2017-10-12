function LS(phrase){
for (count=0; phrase.length > count; count++)
{
    phrase = phrase.replace("A","4");
    phrase = phrase.replace("E","3");
    phrase = phrase.replace("G","6");
    phrase = phrase.replace("I","1");
    phrase = phrase.replace("O","0");
    phrase = phrase.replace("S","5");
    phrase = phrase.replace("T","7");
    phrase = phrase.replace("a","4");
    phrase = phrase.replace("e","3");
    phrase = phrase.replace("g","6");
    phrase = phrase.replace("i","1");
    phrase = phrase.replace("o","0");
    phrase = phrase.replace("s","5");
    phrase = phrase.replace("t","7");

    }

console.log(phrase);
}

LS("leet");
