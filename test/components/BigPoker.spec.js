import React from 'react';
import { shallow, mount, render } from 'enzyme';
import BigPoker from '../../src/components/BigPoker/BigPoker';

describe('Test BigPoker', () => {
  it('return null when this.state.show is false', () => {
    let bigSizeNumber = ['2'];
    let sideIconFiles = {
      '2_top': '../../src/images/top_icon/2_top.svg',
      '2_bottom': '../../src/images/bottom_icon/2_bottom.svg'
    };
    let spy = sinon.spy();
    let wrapper = shallow(<BigPoker bigSizeNumber={bigSizeNumber} sideIconFiles={sideIconFiles} onBackgroudClick={spy}/>);
    expect(wrapper.html()).to.equal(null);
  });

  it('render <div> when show value is true', () => {
    let bigSizeNumber = ['2'];
    let sideIconFiles = {
      '2_top': '../../src/images/top_icon/2_top.svg',
      '2_bottom': '../../src/images/bottom_icon/2_bottom.svg'
    };
    let spy = sinon.spy();
    let wrapper = shallow(<BigPoker bigSizeNumber={bigSizeNumber} sideIconFiles={sideIconFiles} onBackgroudClick={spy}/>);
    expect(wrapper.html()).to.equal(null);
    wrapper.setState({ show: true});
    expect(wrapper.type()).to.equal('div');
  });

  it('contains 4 div, 1 Poker and 1 CloseButton when this.state.show is true ', () => {
    let bigSizeNumber = ['2'];
    let sideIconFiles = {
      '2_top': '../../src/images/top_icon/2_top.svg',
      '2_bottom': '../../src/images/bottom_icon/2_bottom.svg'
    };
    let spy = sinon.spy();
    let wrapper = shallow(<BigPoker bigSizeNumber={bigSizeNumber} sideIconFiles={sideIconFiles} onBackgroudClick={spy}/>);
    expect(wrapper.html()).to.equal(null);
    wrapper.setState({ show: true});
    expect(wrapper.find('div')).to.have.length(4);
    expect(wrapper.find('Poker')).to.have.length(1);
    expect(wrapper.find('CloseButton')).to.have.length(1);

  });

  it('contains front-font-resize className', () => {
    let bigSizeNumber = ['2'];
    let sideIconFiles = {
      '2_top': '../../src/images/top_icon/2_top.svg',
      '2_bottom': '../../src/images/bottom_icon/2_bottom.svg'
    };
    let spy = sinon.spy();
    let wrapper = shallow(<BigPoker bigSizeNumber={bigSizeNumber} sideIconFiles={sideIconFiles} onBackgroudClick={spy}/>);
    expect(wrapper.html()).to.equal(null);
    wrapper.setState({
      show: true,
      name: '2',
      sideIcon: '2'
    });

    expect(wrapper.find('.front-font-resize')).to.have.length(1);
    expect(wrapper.find('.show-big-poker')).to.have.length(1);
    expect(wrapper.find('.poker-align')).to.have.length(1);
    expect(wrapper.find('.poker-align-center')).to.have.length(1);
  });

  it('not contain front-font-resize className', () => {
    let bigSizeNumber = ['2'];
    let sideIconFiles = {
      '2_top': '../../src/images/top_icon/2_top.svg',
      '2_bottom': '../../src/images/bottom_icon/2_bottom.svg'
    };
    let spy = sinon.spy();
    let wrapper = shallow(<BigPoker bigSizeNumber={bigSizeNumber} sideIconFiles={sideIconFiles} onBackgroudClick={spy}/>);
    expect(wrapper.html()).to.equal(null);
    wrapper.setState({
      show: true,
      name: '1',
      sideIcon: '2'
    });

    expect(wrapper.find('.front-font-resize')).to.have.length(0);
  });

});