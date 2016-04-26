import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PokerBack from '../../src/components/PokerBack/PokerBack';

describe('Test PokerBack', () => {
  it('contains 4 div', () => {
    const wrapper = shallow(<PokerBack />);
    expect(wrapper.find('div')).to.have.length(4);
  });

  it('contains 2 span', () => {
    const wrapper = shallow(<PokerBack />);
    expect(wrapper.find('span')).to.have.length(2);
  });

  it('contains 10 classNames', () => {
    const wrapper = shallow(<PokerBack />);
    expect(wrapper.find('.two-three-ratio')).to.have.length(1);
    expect(wrapper.find('.poker')).to.have.length(1);
    expect(wrapper.find('.poker-back')).to.have.length(1);
    expect(wrapper.find('.poker-back-conf')).to.have.length(1);
    expect(wrapper.find('.common-back-style')).to.have.length(1);
    expect(wrapper.find('.back-logo')).to.have.length(1);
    expect(wrapper.find('.icon-trantect-logo')).to.have.length(1);
    expect(wrapper.find('.logo-content')).to.have.length(1);
    expect(wrapper.find('.icon-trantect')).to.have.length(1);
    expect(wrapper.find('.logo-trantect')).to.have.length(1);
  });

});