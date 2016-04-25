import React, { Component } from 'react';
import './PokerFront.scss'
import './font/font.scss'
import classnames from 'classnames';


class PokerFront extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centerIcon        : null,
      centerNumber      : null,
      name              : this.props.name,
      leftSideIcon      : this.props.leftSideIcon,
      rightSideIcon     : this.props.rightSideIcon
    }
  }

  pokerName() {
    if (this.state.name.includes("icon-")) {
      this.state.centerIcon = this.state.name
    } else {
      this.state.centerNumber = this.state.name;
    }
  }

  componentWillMount() {
    this.pokerName();
  }

  render() {
    let pokerContent = classnames(
      this.state.centerIcon, 'poker-front-conf', 'common-number-style'
    );
    return (
    <div className="two-three-ratio">
      <div className="poker poker-front">
          <img src={this.state.rightSideIcon} className="left-side-trantect" />
          <div className={pokerContent} >
            <div className="font-number">
              <span>{this.state.centerNumber}</span>
            </div>
          </div>
          <img src={this.state.leftSideIcon} className="right-side-website" />
        </div>
      </div>
    )
  }
}


export default PokerFront;