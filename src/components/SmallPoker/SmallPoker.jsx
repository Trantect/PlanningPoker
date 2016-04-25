import React, { Component } from 'react';
import Poker from '../Poker/Poker';

class SmallPoker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      sideIcon: this.props.sideIcon,
      sideIconFiles: this.props.sideIconFiles
    }
  }

  render() {
    return (
      <div onClick={this.props.onClick}>
        <Poker isFront={true} name={this.state.name} sideIcon={this.state.sideIcon} sideIconFiles={this.state.sideIconFiles}/>
      </div>
    )
  }
}

export default SmallPoker;