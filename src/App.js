import React, { Component } from 'react';
import DigitalClock from './DigitalClock';
import EmployeeList from './EmployeeList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Clock</h2>
        <DigitalClock />
        <h2>List</h2>
        <hr />

<EmployeeList />
      </React.Fragment>
      

    );
  }
}

export default App;
