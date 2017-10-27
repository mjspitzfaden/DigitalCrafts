/*It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

9 = 7 + 2×12
15 = 7 + 2×22
21 = 3 + 2×32
25 = 7 + 2×32
27 = 19 + 2×22
33 = 31 + 2×12

It turns out that the conjecture was false. What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?*/

/*

function isOdd(n) {
   return (n % 2) === 1  //to get odd numbers
}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

function isComposteOddNumbers(Number){
  if (isPrime(Number) && isOdd(Number)){
    return true;
  }
  else {
    return false;
        }
}

function numbers(a){
  if (isComposteOddNumbers(a)){

  }
}



Given an API which returns an array of chemical names and an array of chemical symbols, display the chemical names with their symbol surrounded by square brackets:

Ex:
Chemicals array: ['Amazon', 'Microsoft', 'Google']
Symbols: ['I', 'Am', 'cro', 'Na', 'le', 'abc']


Output:
[Am]azon, Mi[cro]soft, Goog[le]

If the chemical string matches more than one symbol, then choose the one with longest length. (ex. 'Microsoft' matches 'i' and 'cro') */



var chemArray = ['Amazon', 'Microsoft', 'Google'];

function sub(phrase){

    phrase = phrase.replace("Am","[AM]");
    phrase = phrase.replace("I","[I]");
    phrase = phrase.replace("cro","[cro]");
    phrase = phrase.replace("Na","[NA]");
    phrase = phrase.replace("le","[LE]");
    phrase = phrase.replace("abc","[abc]");
  }

  var newList = chemArray.map(sub);
  console.log(newList);
