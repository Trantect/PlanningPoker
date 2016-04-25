import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PokerBack from '../PokerBack/PokerBack';
import PokerFront from '../PokerFront/PokerFront';

class Poker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentWidth    : null,
      rightSideIcon     : null,
      leftSideIcon      : null,
      resizeHandler     : null,
      name              : this.props.name,
      isFront           : this.props.isFront
    }
  }

  flip() {
    this.setState({isFront: !this.state.isFront});
  }

  onClick() {
    if (this.props.onRealPokerClick) {
      this.props.onRealPokerClick();
    }
  }

  handleResize() {
    if (this.state.componentWidth !== ReactDOM.findDOMNode(this).getBoundingClientRect().width) {
      this.setState({componentWidth: ReactDOM.findDOMNode(this).getBoundingClientRect().width});
    }
  }

  createResizeListener() {
    this.state.resizeHandler = this.handleResize.bind(this);
    window.addEventListener("resize", this.state.resizeHandler);
  }

  removeResizeListener() {
    window.removeEventListener("resize", this.state.resizeHandler);
  }

  componentWillMount() {
    this.setState({rightSideIcon: this.props.sideIconFiles[`${this.props.sideIcon}_top`]});
    this.setState({leftSideIcon: this.props.sideIconFiles[`${this.props.sideIcon}_bottom`]})
  }

  componentDidMount() {
    this.setState({componentWidth: ReactDOM.findDOMNode(this).getBoundingClientRect().width});
    this.createResizeListener();
  }

  componentWillUnmount() {
    this.removeResizeListener();
  }

  render() {
    let componentFontSize = {fontSize: this.state.componentWidth};
    return (
      <div ref="RealPoker" onClick={this.onClick.bind(this)} style={componentFontSize}>
        {this.state.isFront
          ? <PokerFront name={this.state.name} leftSideIcon={this.state.leftSideIcon}
                        rightSideIcon={this.state.rightSideIcon}/>
          : <PokerBack /> }
      </div>
    )
  }
}

export default Poker;