
var array = [-2,1,0,2];
for (var i = 0; i < array.length; i++)
{
  for (let j=0;j+1 < array.length; j++)
  {
    if ((array[i] - array[j]) == 0)
    {
      console.log(array[i]);
      console.log(array[j]);
    }
  }
}
