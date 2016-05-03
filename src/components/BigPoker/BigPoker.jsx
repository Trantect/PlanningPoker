import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CloseButton from '../CloseButton/CloseButton';
import React, { Component } from 'react';
import classnames from 'classnames';
import Poker from '../Poker/Poker';
import './BigPoker.scss';

class BigPoker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flip                  : true,
      show                  : false,
      name                  : null,
      sideIcon              : null,
      resizeFont            : null,
      innerHeightHandler    : null,
      innerHeight           : null,
      bigSizeNumber         : this.props.bigSizeNumber,
      sideIconFiles         : this.props.sideIconFiles
    }
  }

  flip() {
    this.refs.RealPoker.flip();
  }

  show(name, sideIcon) {
    this.setState({show: true});
    this.setState({name: name});
    this.setState({sideIcon: sideIcon});
  }

  hide() {
    this.setState({show: false});
    this.setState({flip: true});
  }

  resizeFrontFont() {
    if (this.state.bigSizeNumber.indexOf(this.state.name) != -1) {
      this.state.resizeFont = "front-font-resize";
    } else {
      this.state.resizeFont = null;
    }
  }

  onClick(event) {
    if(!this.refs.poker.contains(event.target)) {
      this.props.onBackgroudClick();
    }
  }

  resetInnerHeight() {
    if (screen.width < 500 && screen.width <= screen.height) {
      this.state.innerHeight = window.innerHeight;
      document.styleSheets[0].addRule('.show-big-poker .two-three-ratio::before', `height: ${window.innerHeight}px`);
    } else {
      this.state.innerHeight = window.innerHeight;
      document.styleSheets[0].addRule('.show-big-poker .two-three-ratio::before', `height: 0`);
    }
  }

  setInnerHeight() {
    setTimeout(this.resetInnerHeight.bind(this), 1);
  }

  createHeightListener() {
    this.state.innerHeightHandler = this.setInnerHeight.bind(this);
    window.addEventListener("resize", this.state.innerHeightHandler, false);
  }

  removeHeightListener() {
    window.removeEventListener("resize", this.state.innerHeightHandler);
  }

  componentDidMount() {
    this.setInnerHeight();
    this.createHeightListener();
  }

  componentWillUnmount() {
    this.removeHeightListener();
  }

  render() {
    if(!this.state.show) return null;
    this.resizeFrontFont();
    let bigPokerClassNames = classnames("show-big-poker", "poker-align", this.state.resizeFont);
    return (
      <div>
          <div className="big-poker-background" key="bigPoker-background"></div>

          <div key="bigPoker" className={bigPokerClassNames} onClick={this.onClick.bind(this)}>
            <div className="poker-align-center" ref="poker">
              <Poker ref="RealPoker" isFront={!this.state.flip} name={this.state.name} sideIcon={this.state.sideIcon}
                     sideIconFiles={this.state.sideIconFiles} onRealPokerClick={this.flip.bind(this)} size="big"/>
            </div>
          </div>

          <CloseButton key="closeButton" onClick={this.hide.bind(this)}/>
      </div>
    )
  }
}

export default BigPoker;