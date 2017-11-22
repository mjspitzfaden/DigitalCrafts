
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

class MyDelete extends Component {
  constructor(props) {
    super(props);

    this.history = props.history;
    this.check_login();

    this.state = {
      key: props.match.params.id, name: 'NONE', address: 'NONE', city: 'lafayette', email:'', phoneNumber: 'number', state:'La', zip:'70501',
      contacts: []
    };
  }

  check_login() {
    console.log('Checking Login')
    if (User.user) {
      database.ref('contacts/' + User.user.uid)
        .on('value', (contacts) => {
          this.setState({contacts: contacts.val()});
        });
    } else {
      setTimeout(() => {
        this.check_login();
      }, 1000);
    }
  }



  deletePerson(event) {
    var key = this.state.key;
    console.log("the person id is:", this.state.id);
    let idIndex = this.state.contacts.findIndex((contact)=>{
      if (contact.key === key) {return contact}
    })
      let deleteItems = this.state.contacts.splice(idIndex, 1);
      console.log("the deleted item: ", deleteItems);
      //localStorage.removeItem.deleteItems;
      this.sort_contacts(this.state.contacts);
      this.props.history.push('/')
    }

    sort_contacts(temp_contacts) {
       var sorted = temp_contacts.sort(function(a, b){
       var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
       if (nameA < nameB) //sort string ascending
        return -1;
       if (nameA > nameB)
        return 1;
       return 0; //default return value (no sorting)
      });

      this.setState({contacts: sorted});
      this.setStorage(sorted);
    }

    setStorage(contacts){
      database.ref('contacts/' + User.user.uid).set(this.state.contacts);
    }
    setHome(event){
      this.props.history.push('/')
    }

  render() {
    return (
      <div>
       <h3>Are u sure you want to delete: {this.state.key}</h3>
       <RaisedButton label="Delete" primary={true} onClick={event => this.deletePerson(event)}/>
       <RaisedButton label="Cancel" primary={true} onClick={event => this.setHome(event)}/>
     </div>
    )
  }
}
export default MyDelete;
