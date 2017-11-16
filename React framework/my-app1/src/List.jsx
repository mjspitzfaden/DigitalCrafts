import React, { Component } from 'react';
class ListMessage extends Component {
constructor(){
  super()
  this.state = {
    people: [
    {id: 1, name: 'Paul', age: 19},
    {id: 2, name: 'Paulette', age: 23}
  ]}

}
  render() {
    return(
<ul>
  {this.state.people.map((person) =>
      <li>{person.name} {person.age}</li>

  )}
</ul>)
  }
}
export default ListMessage;
