import React, { Component } from 'react';
class MoonMessage extends Component {
constructor(){
  super()
  this.state = {
    people: [
    {id: 1, name: 'Paul', age: 19},
    {id: 2, name: 'Paulette', age: 23}
  ]}

}
  render() {
    var moon = this.state.people.filter((people) => {
    // Filtering here
    return (people.age > 21);
});
    return(
<ul>
  {moon.map((person) =>
      <li>{person.name} {person.age}</li>

  )}
</ul>)
  }
}
export default MoonMessage;
