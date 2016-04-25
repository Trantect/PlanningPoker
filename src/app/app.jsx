import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from '../components/RootApp/RootApp';

class App {
  constructor(names, bigSizeNumber, sideIcons) {
    this.names = names;
    this.bigSizeNumber = bigSizeNumber;
    this.sideIcons = sideIcons;
    this.sideIconFiles = {};
  }

  _getSideIconFiles() {
    for (var i=0; i<this.names.length; i++) {
      let iconName = this.sideIcons[this.names[i]];
      let iconTop = `${iconName}_top`;
      let iconBottom = `${iconName}_bottom`;
      this.sideIconFiles[iconTop] = require(`../images/top_icon/${iconTop}.svg`);
      this.sideIconFiles[iconBottom] = require(`../images/bottom_icon/${iconBottom}.svg`);
    }
  }

  appGenerator() {
    this._getSideIconFiles();
    ReactDOM.render(<RootApp names={this.names} sideIcons={this.sideIcons} sideIconFiles={this.sideIconFiles} bigSizeNumber={this.bigSizeNumber} />, document.getElementById('main'));
  }
}

export default App;