import React, {Component} from 'react';
import './App.css';

class TimeSheet extends Component {
  constructor() {
    super();
    this.state = {
      click: false,
      click1: false,
      click2: false,
    }
    this.toggleClicked = this.toggleClicked.bind(this);
    this.toggleClicked1 = this.toggleClicked1.bind(this);
    this.toggleClicked2 = this.toggleClicked2.bind(this);
  }

  toggleClicked() {
    this.setState({
      click: !this.state.click,
    });
  }

  toggleClicked1() {
    this.setState({
      click1: !this.state.click1,
    });
  }

  toggleClicked2() {
    this.setState({
      click2: !this.state.click2
    });
  }

  render() {
    const { click, click1, click2 } = this.state;
    return (
      <div className="timesheet">
        <div className={click ? "circle clicked" : "circle"} onClick={this.toggleClicked}>H</div>
        <div className={click1 ? "circle1 clicked" : "circle1"} onClick={this.toggleClicked1}>F</div>
        <div className={click2 ? "circle2 clicked" : "circle2"} onClick={this.toggleClicked2}>T</div>
      </div>
    );
  }
}

export default TimeSheet;
