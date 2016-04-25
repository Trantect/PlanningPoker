import React, { Component } from 'react';
import Poker from '../Poker/Poker';
import CloseButton from '../CloseButton/CloseButton';
import classnames from 'classnames';
import './BigPoker.scss';

class BigPoker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flip: true,
      show: false,
      name: null,
      sideIcon: null,
      resizeFont: null,
      bigSizeNumber: this.props.bigSizeNumber,
      sideIconFiles: this.props.sideIconFiles,
      innerHeight: null,
      innerHeightHandler: null,
      isShowCloseButton: false,
      // orientationHandler: null
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
      this.setState({isShowCloseButton: true});
      this.state.innerHeight = window.innerHeight;
      document.styleSheets[0].addRule('.show-big-poker .two-three-ratio::before', `height: ${window.innerHeight}px`);
    } else {
      this.setState({isShowCloseButton: false});
      this.state.innerHeight = window.innerHeight;
      document.styleSheets[0].addRule('.show-big-poker .two-three-ratio::before', `height: 0`);
    }
  }

  // resetCloseButton() {
  //   this.setState({isShowCloseButton: false});
  // }

  setInnerHeight() {
    setTimeout(this.resetInnerHeight.bind(this), 1);
  }

  // setCloseButton() {
  //   console.log("in set===>:");
  //   setTimeout(this.resetCloseButton.bind(this), 1);
  // }
  
  createHeightListener() {
    this.state.innerHeightHandler = this.setInnerHeight.bind(this);
    window.addEventListener("resize", this.state.innerHeightHandler, false);
  }

  // createOrientateListener() {
  //   console.log("in create listener===>");
  //   this.state.orientationHandler = this.setCloseButton.bind(this);
  //   window.addEventListener("onorientationchange", this.state.orientationHandler, false);
  // }

  // removeOrientateListener() {
  //   window.removeEventListener("onorientationchange", this.state.orientationHandler);
  // }

  removeHeightListener() {
    window.removeEventListener("resize", this.state.innerHeightHandler);
  }

  componentDidMount() {
    this.setInnerHeight();
    this.createHeightListener();
    // this.createOrientateListener();
  }

  componentWillUnmount() {
    this.removeHeightListener();
    // this.removeOrientateListener();
  }

  render() {
    if(!this.state.show) return null;
    this.resizeFrontFont();
    let bigPokerClassNames = classnames("show-big-poker", "poker-align", this.state.resizeFont);
    return (
      <div>
        <div className={bigPokerClassNames} onClick={this.onClick.bind(this)}>
          <div className="poker-align-center" ref="poker">
            <Poker ref="RealPoker" isFront={!this.state.flip} name={this.state.name} sideIcon={this.state.sideIcon} sideIconFiles={this.state.sideIconFiles}
                   onRealPokerClick={this.flip.bind(this)} />
          </div>
        </div>
        {
          this.state.isShowCloseButton ? <CloseButton onClick={this.hide.bind(this)}/> : null
        }
      </div>
    )
  }
}

export default BigPoker;