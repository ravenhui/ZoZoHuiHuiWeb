
import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false }
  }

  componentWillReceiveProps() {
    this.setState({ show: true });
  }

  componentDidMount =()=>{
    setInterval(()=> { this.setState({show: false}) }, 3000)
  }

  render() {
    let info = this.props.info;
    let show = this.state.show;

    return (
      <div className={show?'m-info active':'m-info'}>
        <span>{info}</span>
      </div>
    );
  }
}

export default Info