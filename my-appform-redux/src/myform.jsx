import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {addContact, updateAttr} from './actions.js';
import { connect } from 'react-redux';
import uid from 'uid'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
// import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import database, {User} from './database';
import './myform.css';

class MyFormComponent extends Component {
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



  update_state(event, key) {
    console.log(event.target);
    this.setState({[key]: event.target.value});
  }

  setStorage(contacts){
     database.ref('contacts/' + User.user.uid).set(this.state.contacts);
  }

  update_select = (event, index, value) => {
    this.setState({color: value});
  }

  handle_submit(event) {

    console.log('Submitted:' , this.state.name, this.state.address, this.state.phoneNumber, this.state.email, this.state.city, this.state.state, this.state.zip);
    var infomation = {key: uid(), name: this.state.name, address: this.state.address, email: this.state.email, city: this.state.city,
    state: this.state.state, zip: this.state.zip, phoneNumber: this.state.phoneNumber,
    clicked: false}
    var tempState = this.state.contacts;
    tempState.push(infomation);


    this.sort_contacts(tempState);
    event.preventDefault();

    database.ref('contacts/' + User.user.uid).set(this.state.contacts);
    this.props.onSubmit({key: uid(), name: this.state.name, address: this.state.address, email: this.state.email, city: this.state.city, state: this.state.state, zip: this.state.zip, phoneNumber: this.state.phoneNumber, clicked: false});
    this.props.history.push("/");
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
  this.sort_contacts(tempState);
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
    this.setStorage(sorted);
  }

  render() {
    return (
      <div>
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

            </CardText>
            <CardActions>
              <RaisedButton type="submit" label="Add" primary={true}/>
              <RaisedButton label="Update" primary={true} onClick={event => this.updatePerson(event)}/>
            </CardActions>
          </form>
        </Card>
      </div>
    );
  }
}



function mapStateToProps (state) {
  return {
    contacts: state.contacts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onSubmit: function (data) {
      dispatch(addContact(data));
    },
    onChange: function (index, key, value) {
      dispatch(updateAttr(index, key, value));
    }
  }
}

var MyForm = connect(
  mapStateToProps, mapDispatchToProps
)(MyFormComponent);

export default MyForm;
