import React from 'react';
import { shallow, mount, render } from 'enzyme';
import RootApp from '../../src/components/RootApp/RootApp';

describe('Test RootApp', () => {
  var names, bigSizeNumber, sideIcons, sideIconFiles;
  before(() => {
    names = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?', 'icon-infinity', 'icon-coffee'];
    bigSizeNumber = ['0', '1', '2', '3', '5', '8', '?', 'icon-infinity', 'icon-coffee'];
    sideIcons = {
      "0"              : "0",
      "1/2"            : "half",
      "1"              : "1",
      "2"              : "2",
      "3"              : "3",
      "5"              : "5",
      "8"              : "8",
      "13"             : "13",
      "20"             : "20",
      "40"             : "40",
      "100"            : "100",
      "?"              : "question",
      "icon-infinity"  : "infinity",
      "icon-coffee"    : "coffee"
    };

    sideIconFiles = {};
    for (var i=0; i<names.length; i++) {
      let iconName = sideIcons[names[i]];
      let iconTop = `${iconName}_top`;
      let iconBottom = `${iconName}_bottom`;
      sideIconFiles[iconTop] = `../../src/images/top_icon/${iconTop}.svg`;
      sideIconFiles[iconBottom] = `../../src/images/bottom_icon/${iconBottom}.svg`;
    }
  });

  it('coantains 18 div, 14 SmallPoker and 1 BigPoker', () => {
    let wrapper = shallow(<RootApp names={names} sideIcons={sideIcons} sideIconFiles={sideIconFiles} bigSizeNumber={bigSizeNumber} />);
    expect(wrapper.find('div')).to.have.length(18);
    expect(wrapper.find('SmallPoker')).to.have.length(14);
    expect(wrapper.find('BigPoker')).to.have.length(1);
  });

  it('contain classNames', () => {
    let wrapper = shallow(<RootApp names={names} sideIcons={sideIcons} sideIconFiles={sideIconFiles} bigSizeNumber={bigSizeNumber} />);
    expect(wrapper.find('.container')).to.have.length(1);
    expect(wrapper.find('.top-level')).to.have.length(1);
    expect(wrapper.find('.level')).to.have.length(1);
    expect(wrapper.find('.row')).to.have.length(1);
    expect(wrapper.find('.col-xs-3')).to.have.length(14);
    expect(wrapper.find('.col-sm-3')).to.have.length(14);
    expect(wrapper.find('.col-md-2')).to.have.length(14);
    expect(wrapper.find('.col-lg-2')).to.have.length(14);
  });

  it("contains BigPoker", () => {
    let wrapper = mount(<RootApp names={names} sideIcons={sideIcons} sideIconFiles={sideIconFiles} bigSizeNumber={bigSizeNumber} />);
    expect(wrapper).to.have.ref("bigPoker");
  });

  it('test state ', () => {
    let wrapper = mount(<RootApp names={names} sideIcons={sideIcons} sideIconFiles={sideIconFiles} bigSizeNumber={bigSizeNumber} />);
    expect(wrapper.state('names')).to.equal(names);
    expect(wrapper.state('sideIcons')).to.equal(sideIcons);
    expect(wrapper.state('bigSizeNumber')).to.equal(bigSizeNumber);
    expect(wrapper.state('sideIconFiles')).to.equal(sideIconFiles);
  });
  
});