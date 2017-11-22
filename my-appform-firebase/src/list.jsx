import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import uid from 'uid'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
// import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import database, {User} from './database';

import {Link} from 'react-router-dom';

class MyList extends Component {
  constructor(props) {
    super(props);

    this.history = props.history;
    this.check_login();

    this.state = {
      key: '', name: 'NONE', address: 'NONE', city: 'lafayette', email:'', phoneNumber: 'number', state:'La', zip:'70501',
      contacts: []
    };
  }
    check_login() {
      console.log('Checking Login')
      if (User.user) {
        database.ref('contacts/' + User.user.uid)
          .once('value').then((contacts) => {
            this.setState({contacts: contacts.val()});
          });
      } else {
        setTimeout(() => {
          this.check_login();
        }, 1000);
      }
    }


  showInfo(event, name) {
    let personIndex = this.state.contacts.findIndex((contact)=>{
      if (contact.name === name) {return contact}
    })
    let tempState = this.state.contacts
    tempState[personIndex].clicked = !tempState[personIndex].clicked
    this.setState({contacts: tempState})
  }

render() {
  var list = this.state.contacts.map((person) => {
    console.log('person is',person)
    if(person.clicked){
      return (<li key={person.key} onClick={(event)=>this.showInfo(event, person.name)}>
      {person.key}-{person.name}-{person.city}-{person.address}-{person.state}-{person.phoneNumber}-{person.email}-{person.zip}
      <Link to={'/delete/' + person.key}>Delete</Link>
      </li>)
    } else {
      return (<li key={person.key} onClick={(event)=>this.showInfo(event, person.name)}>
      {person.key}-{person.name}-{person.city}-{person.state}
      <Link to={'/delete/' + person.key}>Delete</Link>
      </li>)
    }
  })
  return (
    <div>
      <ul>
        {list}
      </ul>
    </div>
  );
}
}

export default MyList;
