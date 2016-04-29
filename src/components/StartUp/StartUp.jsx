import '../../../node_modules/bootstrap/less/bootstrap.less';
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './StartUp.scss'
import ReactDOM from 'react-dom';


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
        <ReactCSSTransitionGroup transitionName="startUpContent" transitionAppear={true} transitionAppearTimeout={4000}
                                 transitionEnter={false} transitionLeave={false}>
          <div className="startup-conf">
            <div className="icon-trantect-logo startup-trantect-logo"></div>
            <div className="icon-trantect-text startup-trantect-text"></div>
            <div className="icon-planpoker-text startup-planpoker-text"></div>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default StartUp;