import '../../../node_modules/bootstrap/less/bootstrap.less';
import SmallPoker from '../SmallPoker/SmallPoker';
import BigPoker from '../BigPoker/BigPoker';
import React, { Component } from 'react';
import StartUp from '../StartUp/StartUp'
import './RootApp.scss';

class RootApp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      names: (typeof this.props.names !== "undefined" && this.props.names !== null) ? this.props.names : [],
      sideIcons: (typeof this.props.sideIcons !== "undefined" && this.props.sideIcons !== null) ? this.props.sideIcons : [],
      bigSizeNumber: (typeof this.props.bigSizeNumber !== "undefined" && this.props.bigSizeNumber !== null) ? this.props.bigSizeNumber : [],
      sideIconFiles: (typeof this.props.sideIconFiles !== "undefined" && this.props.sideIconFiles !== null) ? this.props.sideIconFiles : {}
    }
  }
  
  showBigPoker(name, sideIcon) {
    this.refs.bigPoker.show(name, sideIcon)
  }
  
  hideBigPoker() {
    this.refs.bigPoker.hide();
  }

  render() {
    return (
      <div>
        <StartUp></StartUp>
        <div className="container">
          <div className="top-level">
            <div className="level">
              <div className="row">
                {
                  this.state.names.map((name) => {
                    var timeout = this.state.names.indexOf(name) * 50 + 50 + 3000;
                    let sideIcon = this.state.sideIcons[name];
                    return (
                      <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2" key={name}>
                        <SmallPoker timeout={timeout} name={name} sideIcon={sideIcon} sideIconFiles={this.state.sideIconFiles} onClick={this.showBigPoker.bind(this, name, sideIcon)} />
                      </div>
                    )})
                }
                <BigPoker ref="bigPoker" bigSizeNumber={this.state.bigSizeNumber} onBackgroudClick={this.hideBigPoker.bind(this)} sideIconFiles={this.state.sideIconFiles} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RootApp;