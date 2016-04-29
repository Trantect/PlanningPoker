import ReactTransitionGroup from 'react-addons-transition-group';
import React, { Component } from 'react';
import Poker from '../Poker/Poker';
import './SmallPoker.scss';

class SmallPoker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name              : this.props.name,
      timeout           : this.props.timeout,
      sideIcon          : this.props.sideIcon,
      sideIconFiles     : this.props.sideIconFiles,
      key               : `${this.props.name}small`
    }
  }

  render() {
    return (
      <div onClick={this.props.onClick}>
        <ReactTransitionGroup >
          <Poker key={this.state.key} timeout={this.state.timeout} isFront={true} name={this.state.name} sideIcon={this.state.sideIcon} sideIconFiles={this.state.sideIconFiles} size="small"/>
        </ReactTransitionGroup>
      </div>
    )
  }
}

export default SmallPoker;