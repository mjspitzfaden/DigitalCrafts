function tip_amount (amount, service){
  var output;

  if (service == 'good'){
    tipAmount = (amount * .20).toFixed(2);
    output = "tip amount " + tipAmount;
    console.log(output);
    }
  else if (service == 'fair'){
      tipAmount = (amount * .15).toFixed(2);
      output = "tip amount " + tipAmount;
      console.log(output);
      }
  else if (service == 'poor'){
      tipAmount = (amount * .10).toFixed(2);
      output = "tip amount " + tipAmount;
      console.log(output);
      }
  else {
    output = "Error: Please enter good, poor, or fair into the function"
    console.log(output);
  }
return tipAmount;

}

console.log(tip_amount(10.25, 'good'));
