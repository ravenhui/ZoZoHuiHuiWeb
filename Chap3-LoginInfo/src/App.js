import React, { Component } from 'react';
import Login from './component/Login'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isOld: false };
  }

  render() {

    return (
        <div>
           <Login/>
        </div>
      );
  }
}

export default App;
