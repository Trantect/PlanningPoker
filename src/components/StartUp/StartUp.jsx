import '../../../node_modules/bootstrap/less/bootstrap.less';
import React, { Component } from 'react';
import './StartUp.scss'
import ReactDOM from 'react-dom';
import trantectText from '../../images/trantect_logo/trantect_text.svg'
import trantectLogo from '../../images/trantect_logo/trantect_logo.svg'


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
              <img src={trantectLogo} className="startup-trantect-logo"/>
            </div>
            <div>
              <img src={trantectText} className="startup-trantect-text"/>
            </div>
          </div>
      </div>
    )
  }
}

export default StartUp;