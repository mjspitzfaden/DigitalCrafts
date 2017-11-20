import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
// import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import './myform.css';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'NONE', color: 'blue', address: 'NONE', city: 'lafayette', email:'', phoneNumber: 'number', state:'La', zip:'70501',
      contacts: []
    };
  }

  update_state(event, key) {
    console.log(event.target);
    this.setState({[key]: event.target.value});
  }

  update_select = (event, index, value) => {
    this.setState({color: value});
  }

  handle_submit(event) {
    console.log('Submitted:' , this.state.name, this.state.address, this.state.phoneNumber, this.state.email, this.state.city, this.state.state, this.state.zip);
    var infomation = {name: this.state.name, address: this.state.address, email: this.state.email, city: this.state.city,
    state: this.state.state, zip: this.state.zip, phoneNumber: this.state.phoneNumber,
    clicked: false}
    var tempState = this.state.contacts;
    tempState.push(infomation);

    this.sort_contacts(tempState);

    event.preventDefault();
  }

deletePerson(event) {
  var name = this.state.name;
  let personIndex = this.state.contacts.findIndex((contact)=>{
    if (contact.name === name) {return contact}
  })
    let deleteItems = this.state.contacts.splice(personIndex, 1);
    this.setState({contacts: this.state.contacts})
  }

updatePerson(event) {
  var name = this.state.name;
  let personIndex = this.state.contacts.findIndex((contact)=>{
    if (contact.name === name) {return contact}
  })
  let tempState = this.state.contacts
  tempState[personIndex].phoneNumber = this.state.phoneNumber;
  tempState[personIndex].address = this.state.address;
  tempState[personIndex].email = this.state.email;
  tempState[personIndex].city = this.state.city;
  tempState[personIndex].state = this.state.state;
  tempState[personIndex].zip = this.state.zip;
  this.setState({contacts: tempState})
  }

  showInfo(event, name) {
    let personIndex = this.state.contacts.findIndex((contact)=>{
      if (contact.name === name) {return contact}
    })
    let tempState = this.state.contacts
    tempState[personIndex].clicked = !tempState[personIndex].clicked
    this.setState({contacts: tempState})
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
  }

  render() {
    var list = this.state.contacts.map((person) => {
      if(person.clicked){
        return (<li key={person.name} onClick={(event)=>this.showInfo(event, person.name)}>
        {person.name}-{person.city}-{person.state}-{person.phoneNumber}-{person.email}-{person.zip}
        </li>)
      } else {
        return (<li key={person.name} onClick={(event)=>this.showInfo(event, person.name)}>
        {person.name}-{person.city}-{person.state}
        </li>)
      }
    })
    return (
      <div>
        <AppBar title=""/>
        <Card className="md-card">
          <form onSubmit={event => this.handle_submit(event)}>
            <CardTitle title="Contact Form" subtitle=""/>
            <CardText>
              <TextField floatingLabelText="Your Name"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'name')}/>
              <TextField floatingLabelText="address"
                defaultValue={this.state.address}
                onChange={event => this.update_state(event, 'address')}/>
              <TextField floatingLabelText="Phone Number"
                defaultValue={this.state.phoneNumber}
                onChange={event => this.update_state(event, 'phoneNumber')}/>
              <TextField floatingLabelText="email"
                defaultValue={this.state.email}
                onChange={event => this.update_state(event, 'email')}/>
              <TextField floatingLabelText="city"
                defaultValue={this.state.city}
                onChange={event => this.update_state(event, 'city')}/>
              <TextField floatingLabelText="state"
                defaultValue={this.state.state}
                onChange={event => this.update_state(event, 'state')}/>
              <TextField floatingLabelText="zip"
                defaultValue={this.state.zip}
                onChange={event => this.update_state(event, 'zip')}/>
              <SelectField
                floatingLabelText="Color"
                value={this.state.color}
                onChange={this.update_select}
              >
                <MenuItem value="red" primaryText="Red" />
                <MenuItem value="blue" primaryText="Blue" />
              </SelectField>
            </CardText>
            <CardActions>
              <RaisedButton type="submit" label="Add" primary={true}/>
              <RaisedButton label="Delete" primary={true} onClick={event => this.deletePerson(event)}/>
              <RaisedButton label="Update" primary={true} onClick={event => this.updatePerson(event)}/>
            </CardActions>
          </form>
        </Card>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default MyForm;
