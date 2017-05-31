import React, { Component } from 'react';
import './PokerBack.scss';
import cloudtrustText from '../../images/cloudtrust_logo/cloudtrust_text.svg';
import cloudtrustLogo from '../../images/cloudtrust_logo/cloudtrust_logo.svg';

class PokerBack extends Component {
  render() {
    return (
      <div className="two-three-ratio">
        <div className="poker poker-back">
          <div className="poker-back-conf common-back-style">
            <div className="back-logo">
              <img src={cloudtrustLogo} className="back-cloudtrust-logo"/>
              <img src={cloudtrustText} className="back-cloudtrust-text"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PokerBack;