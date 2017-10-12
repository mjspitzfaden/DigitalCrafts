function totalValue (amount, service){
  var output;
  var Total_value = 0;
  

  if (service == 'good'){
    tipAmount = (amount * .20).toFixed(2);
    Total_value = (parseFloat(tipAmount)+parseFloat(amount)).toFixed(2);
    }
  else if (service == 'fair'){
      tipAmount = (amount * .15).toFixed(2);
      Total_value = (parseFloat(tipAmount)+parseFloat(amount)).toFixed(2);
      }
  else if (service == 'poor'){
      tipAmount = (amount * .10).toFixed(2);
      Total_value = (parseFloat(tipAmount)+parseFloat(amount)).toFixed(2);
      }
  else {
    output = "Error: Please enter good, poor, or fair into the function"
    console.log(output);
  }
return Total_value;

}

console.log(totalValue(10.25, 'poor'));
