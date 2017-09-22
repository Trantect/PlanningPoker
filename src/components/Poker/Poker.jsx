import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PokerBack from '../PokerBack/PokerBack';
import PokerFront from '../PokerFront/PokerFront';
import './Poker.scss';

class Poker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentWidth    : null,
      rightSideIcon     : null,
      leftSideIcon      : null,
      resizeHandler     : null,
      name              : this.props.name,
      isFront           : this.props.isFront,
      key               : this.props.name + this.props.size
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
    this.state.rightSideIcon = this.props.sideIconFiles[`${this.props.sideIcon}_top`];
    this.state.leftSideIcon = this.props.sideIconFiles[`${this.props.sideIcon}_bottom`];
  }

  componentDidMount() {
    this.setState({componentWidth: ReactDOM.findDOMNode(this).getBoundingClientRect().width});
    this.createResizeListener();
  }

  componentWillUnmount() {
    this.removeResizeListener();
  }
  
  componentWillAppear(callback) {
    var el = ReactDOM.findDOMNode(this);
    el.classList.add("poker-appear");
    
    //小牌根据this.props.timeout时间依次进入
    setTimeout(()=> {
      el.classList.add("poker-appear-active");
    }, this.props.timeout);
    
    setTimeout( () => {
      callback && callback();
      el.classList.remove("poker-appear");
      el.classList.remove("poker-appear-active");
    }, 6000);
  }

  render() {
    var pokerBackKey = `${this.state.key}back`;
    var pokerFrontKey = `${this.state.key}front`;
    let componentFontSize = {fontSize: this.state.componentWidth};
    const pokerProps = {
      pokerHeight: this.props.pokerHeight,
      pokerWidth: this.props.pokerWidth,
      deg: this.props.deg,
    }
    var item = ()=> {
      if (this.state.isFront) {
        return <PokerFront key={pokerFrontKey} name={this.state.name} leftSideIcon={this.state.leftSideIcon} rightSideIcon={this.state.rightSideIcon}/>
      } else {
        return <PokerBack key={pokerBackKey} {...pokerProps} />
      }
    };
    
    return (
      <div ref="RealPoker" onClick={this.onClick.bind(this)} style={componentFontSize} className="tes111111111111t">
        {item()}
      </div>
    )
  }
}

export default Poker;