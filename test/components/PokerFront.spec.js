import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PokerFront from '../../src/components/PokerFront/PokerFront';

describe('Test PokerFront', () => {
  it('contains 4 div tag', () => {
    let mockName = 'icon-coffee';
    let wrapper = shallow(<PokerFront name={mockName} leftSideIcon="" rightSideIcon="" />);
    expect(wrapper.find('div')).to.have.length(4);
  });

  it('contains 2 img tag', () => {
    let mockName = 'icon-coffee';
    let wrapper = shallow(<PokerFront name={mockName} leftSideIcon="" rightSideIcon="" />);
    expect(wrapper.find('img')).to.have.length(2);
  });

  it('contains 1 span', () => {
    let mockName = 'icon-coffee';
    let wrapper = shallow(<PokerFront name={mockName} leftSideIcon="" rightSideIcon="" />);
    expect(wrapper.find('span')).to.have.length(1);
  });

  it('contains 8 basic classNames', () => {
    let mockName = 'icon-coffee';
    let wrapper = shallow(<PokerFront name={mockName} leftSideIcon="" rightSideIcon="" />);
    expect(wrapper.find('.two-three-ratio')).to.have.length(1);
    expect(wrapper.find('.poker')).to.have.length(1);
    expect(wrapper.find('.poker-front')).to.have.length(1);
    expect(wrapper.find('.left-side-trantect')).to.have.length(1);
    expect(wrapper.find('.poker-conf')).to.have.length(1);
    expect(wrapper.find('.common-number-style')).to.have.length(1);
    expect(wrapper.find('.font-number')).to.have.length(1);
    expect(wrapper.find('.right-side-website')).to.have.length(1);
  });

  it('name include icon-', () => {
    let mockName = 'icon-coffee';
    let mockLeftSideIcon = '../../src/images/top_icon/coffee_top.svg';
    let mockRightSideIcon = '../../src/images/bottom_icon/coffee_bottom.svg';
    let wrapper = shallow(<PokerFront name={mockName} leftSideIcon={mockLeftSideIcon} rightSideIcon={mockRightSideIcon} />);
    expect(wrapper.find('.icon-coffee')).to.have.length(1);
    expect(wrapper.state('centerNumber')).to.equal(null);
    expect(wrapper.state('leftSideIcon')).to.equal(mockLeftSideIcon);
    expect(wrapper.state('rightSideIcon')).to.equal(mockRightSideIcon);
  });

  it('name is 100', () => {
    let mockName = '100';
    let mockLeftSideIcon = '../../src/images/top_icon/100_top.svg';
    let mockRightSideIcon = '../../src/images/bottom_icon/100_bottom.svg';
    let wrapper = shallow(<PokerFront name={mockName} leftSideIcon={mockLeftSideIcon} rightSideIcon={mockRightSideIcon} />);
    expect(wrapper.state('centerIcon')).to.equal(null);
    expect(wrapper.state('centerNumber')).to.equal('100');
    expect(wrapper.text()).to.equal('100');
    expect(wrapper.state('leftSideIcon')).to.equal(mockLeftSideIcon);
    expect(wrapper.state('rightSideIcon')).to.equal(mockRightSideIcon);
  });
});