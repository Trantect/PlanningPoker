import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Poker from '../../src/components/Poker/Poker';

describe('Test Poker', () => {
  it('contains 1 PokerFront when isFront is true', () => {
    let name = "2";
    let isFront = true;
    let mockSideIcon = "2";
    let mockSideIconFiles = {
      '2_top': '../../src/images/top_icon/2_top.svg',
      '2_bottom': '../../src/images/bottom_icon/2_bottom.svg'
    };
    let wrapper = shallow(<Poker name={name} isFront={isFront} sideIcon={mockSideIcon}
                                 sideIconFiles={mockSideIconFiles} />);
    expect(wrapper.find('PokerFront')).to.have.length(1);
  });

  it('contains 1 PokerBack when isFront is false', () => {
    let name = "2";
    let isFront = false;
    let mockSideIcon = "2";
    let mockSideIconFiles = {
      '2_top': '../../src/images/top_icon/2_top.svg',
      '2_bottom': '../../src/images/bottom_icon/2_bottom.svg'
    };
    let wrapper = shallow(<Poker name={name} isFront={isFront} sideIcon={mockSideIcon}
                                 sideIconFiles={mockSideIconFiles} />);
    expect(wrapper.find('PokerBack')).to.have.length(1);
  });

  it('set componentWidth is 500px', () => {
    let name = "2";
    let isFront = true;
    let mockSideIcon = "2";
    let mockSideIconFiles = {
      '2_top': '../../src/images/top_icon/2_top.svg',
      '2_bottom': '../../src/images/bottom_icon/2_bottom.svg'
    };
    let mockComponentFontSize = 500;

    let wrapper = shallow(<Poker name={name} isFront={isFront} sideIcon={mockSideIcon}
                                 sideIconFiles={mockSideIconFiles} />);
    wrapper.setState({'componentWidth': mockComponentFontSize});
    expect(wrapper).to.have.style("font-size", "500px");
  });

  it('test onClick event', () => {
    let name = "2";
    let isFront = true;
    let mockSideIcon = "2";
    let mockSideIconFiles = {
      '2_top': '../../src/images/top_icon/2_top.svg',
      '2_bottom': '../../src/images/bottom_icon/2_bottom.svg'
    };

    let spy = sinon.spy();

    let wrapper = shallow(<Poker name={name} isFront={isFront} sideIcon={mockSideIcon}
                                 sideIconFiles={mockSideIconFiles} onRealPokerClick={spy} />);
    wrapper.find('div').first().simulate('click');
    expect(spy.calledOnce).to.equal(true);
  });
});
