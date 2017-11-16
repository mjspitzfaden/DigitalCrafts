import React, {Componet} from 'react';

class HelloList extends Componet{
    construstor (props) {
      super(props);

      this.state = {
        date: new Date(),
        people: ['Paul', "Paulette"]
      }
    }

    render () {
      return <ul>
  {this.state.people.map((person) =>
      <li>{person}</li>
  )}
     </ul>

    }
