import React, { Component } from 'react';
import './PokerBack.scss';
import trantectText from '../../images/trantect_logo/trantect_text.svg';
import trantectLogo from '../../images/trantect_logo/trantect_logo.svg';

class PokerBack extends Component {
  render() {
    return (
      <div className="two-three-ratio">
        <div className="poker poker-back">
          <div className="poker-back-conf common-back-style">
            <div className="back-logo">
              <img src={trantectLogo} className="back-trantect-logo"/>
              <img src={trantectText} className="back-trantect-text"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PokerBack;