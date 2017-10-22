function Person(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
}

Person.prototype.greet = function(other) {
  console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

/*Write code to

1)Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
2)Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.
3)Have sonny greet jordan using the greet method.
4)Have jordan greet sonny using the greet method.
5)Write another statement to print the contact info of Jordan.*/

var sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
var jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

sonny.greet(jordan);
jordan.greet(sonny);


console.log('Jordan contact info:' + jordan.email + ' and ' + jordan.phone);


/* Create a constructor card example */
class Card {
  constructor(point, suit, image) {
    this.point = point;
    this.suit = suit;
    this.image = image;

  }
}


var theCard5 = new Card(5, 'diamonds', "image");
var theCard6 = new Card(6, 'diamonds', 'img');

console.log(theCard5.point);
console.log(theCard5.suit);
console.log(theCard5.image);


class hand {
  constructor(hand) {
  this.hand = [];
}
  addCard(card){
    this.hand.push(card);

  }
  getPoints(){
    var points = 0;

    //length = length + 1;
    for (var i = 0; i < this.hand.length; i++) {
        points += this.hand[i].point;
  }
}
}


class deck {
  constructor(card) {
  this.deck = [];
}
getCard(){
thecard = new card();
thecard = this.deck.pop();
return thecard;
}

shuffle(){

  for (var i = this.deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
  }
  return array;

}



}

var dealerhand = new hand();
var playerhand =  new hand();

//dealerHand.hand.push(theCard5)
//playerHand.push(theCard6)
