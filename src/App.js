import React, { Component } from 'react';
import Date from './Date';
import TimeSheet from './TimeSheet';
import Logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {

    return (
      <div>
        <div className='header'>
          <div className="left">
            <h1>Roster Views</h1>
            <h2>November 2018</h2>
          </div>
          <img src={Logo} alt="logo"/>
        </div>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th><Date weekday="Sun" date="04"/></th>
              <th><Date weekday="Mon" date="05"/></th>
              <th><Date weekday="Tue" date="06"/></th>
              <th><Date weekday="Wed" date="07"/></th>
              <th><Date weekday="Thu" date="08"/></th>
              <th><Date weekday="Fri" date="09"/></th>
              <th><Date weekday="Sat" date="10"/></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>7:00-8:00</th>
              <th><TimeSheet/></th>
              <th></th>
              <th><TimeSheet/></th>
              <th></th>
              <th><TimeSheet/></th>
              <th></th>
              <th><TimeSheet/></th>
            </tr>
            <tr>
              <th>8:00-9:00</th>
              <th></th>
              <th><TimeSheet/></th>
              <th></th>
              <th><TimeSheet/></th>
              <th></th>
              <th><TimeSheet/></th>
              <th></th>
            </tr>
            <tr>
              <th>9:00-10:00</th>
              <th><TimeSheet/></th>
              <th></th>
              <th></th>
              <th><TimeSheet/></th>
              <th></th>
              <th></th>
              <th><TimeSheet/></th>
            </tr>
            <tr>
              <th>10:00-11:00</th>
              <th></th>
              <th><TimeSheet/></th>
              <th></th>
              <th></th>
              <th></th>
              <th><TimeSheet/></th>
              <th></th>
            </tr>
            <tr>
              <th>11:00-12:00</th>
              <th><TimeSheet/></th>
              <th></th>
              <th></th>
              <th><TimeSheet/></th>
              <th></th>
              <th></th>
              <th><TimeSheet/></th>
            </tr>
            <tr>
              <th>12:00-13:00</th>
              <th></th>
              <th></th>
              <th></th>
              <th><TimeSheet/></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>14:00-15:00</th>
              <th></th>
              <th><TimeSheet/></th>
              <th></th>
              <th><TimeSheet/></th>
              <th></th>
              <th><TimeSheet/></th>
              <th></th>
            </tr>

            <tr>
              <th>15:00-16:00</th>
              <th><TimeSheet/></th>
              <th></th>
              <th><TimeSheet/></th>
              <th></th>
              <th><TimeSheet/></th>
              <th></th>
              <th><TimeSheet/></th>
            </tr>
            <tr>
              <th>16:00-17:00</th>
              <th><TimeSheet/></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th><TimeSheet/></th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
