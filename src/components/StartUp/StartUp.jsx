import '../../../node_modules/bootstrap/less/bootstrap.less';
import React, { Component } from 'react';
import './StartUp.scss'
import ReactDOM from 'react-dom';
import cloudtrustText from '../../images/cloudtrust_logo/cloudtrust_text.svg'
import cloudtrustLogo from '../../images/cloudtrust_logo/cloudtrust_logo.svg'


class StartUp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var el = ReactDOM.findDOMNode(this);
    setTimeout( () => {
      el.classList.add("startUp-disappear");
    }, 3000);
  }

  render() {
    return (
      <div className="startup-common" >
          <div className="startup-conf">
            <div>
              <img src={cloudtrustLogo} className="startup-cloudtrust-logo"/>
            </div>
            <div>
              <img src={cloudtrustText} className="startup-cloudtrust-text"/>
            </div>
          </div>
      </div>
    )
  }
}

export default StartUp;