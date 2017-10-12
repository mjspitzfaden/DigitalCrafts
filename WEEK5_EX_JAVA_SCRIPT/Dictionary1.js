var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
}

// 1) Print Elizabeth's phone number.
console.log(phonebookDict.Elizabeth);

// 2) Add a entry to the dictionary: Kareem's number is 938-489-1234.

phonebookDict.Kareem = "938-489-1234";
console.log(phonebookDict);

// 3) Delete Alice's phone entry.
//delete phonebookDict[Alice];
//delete Alice['703-493-1834'];
//popItem(phonebookDict, Aice)


phonebookDict.Alice ={} ;
console.log(phonebookDict);

//Change Bob's phone number to '968-345-2345'

phonebookDict.Bob = '968-345-2345';
console.log(phonebookDict);


//Given this code var personName = 'Elizabeth';, use the variable personName to access the dictionary entry.
//Use a for...in loop to print all the phone entries.
//  var value = person[attribute];

var personName = 'Elizabeth';
console.log(phonebookDict[personName]);

for (var attribute in phonebookDict) {
  var value = phonebookDict[attribute];
  console.log(`${value}`);
}
