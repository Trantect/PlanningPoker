import React, { Component } from 'react';
import './CloseButton.scss';

class CloseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x1: 48,
      x2: 58,
      x3: 68,
      x4: 78,
      y1: 22,
      y2: 32,
      y3: 42,
      y4: 52,
      radius: 3
    }
  }

  render() {
    return (
      <div onClick={this.props.onClick} className="close-button">
        <svg viewBox="0 0 100 100">
          <circle cx="100%" cy="0" r="100%" fill="gray" fillOpacity="0.4" />

          <circle cx={this.state.x1} cy={this.state.y1} r={this.state.radius} fill="white" fillOpacity="1" />
          <circle cx={this.state.x2} cy={this.state.y1} r={this.state.radius} fill="white" fillOpacity="1" />
          <circle cx={this.state.x3} cy={this.state.y1} r={this.state.radius} fill="white" fillOpacity="1" />
          <circle cx={this.state.x4} cy={this.state.y1} r={this.state.radius} fill="white" fillOpacity="1" />

          <circle cx={this.state.x1} cy={this.state.y2} r={this.state.radius} fill="white" fillOpacity="1" />
          <circle cx={this.state.x2} cy={this.state.y2} r={this.state.radius} fill="white" fillOpacity="1" />
          <circle cx={this.state.x3} cy={this.state.y2} r={this.state.radius} fill="white" fillOpacity="1" />
          <circle cx={this.state.x4} cy={this.state.y2} r={this.state.radius} fill="white" fillOpacity="1" />

          <circle cx={this.state.x1} cy={this.state.y3} r={this.state.radius} fill="white" fillOpacity="1" />
          <circle cx={this.state.x2} cy={this.state.y3} r={this.state.radius} fill="white" fillOpacity="1" />
          <circle cx={this.state.x3} cy={this.state.y3} r={this.state.radius} fill="white" fillOpacity="1" />
          <circle cx={this.state.x4} cy={this.state.y3} r={this.state.radius} fill="white" fillOpacity="1" />

          <circle cx={this.state.x1} cy={this.state.y4} r={this.state.radius} fill="white" fillOpacity="1" />
          <circle cx={this.state.x2} cy={this.state.y4} r={this.state.radius} fill="white" fillOpacity="1" />

        </svg>
      </div>
    )
  }
}


export default CloseButton;