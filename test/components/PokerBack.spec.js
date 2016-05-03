import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PokerBack from '../../src/components/PokerBack/PokerBack';

describe('Test PokerBack', () => {
  it('contains 4 div', () => {
    const wrapper = shallow(<PokerBack />);
    expect(wrapper.find('div')).to.have.length(4);
  });

  it('contains 2 img', () => {
    const wrapper = shallow(<PokerBack />);
    expect(wrapper.find('img')).to.have.length(2);
  });

  it('contains 8 classNames', () => {
    const wrapper = shallow(<PokerBack />);
    expect(wrapper.find('.two-three-ratio')).to.have.length(1);
    expect(wrapper.find('.poker')).to.have.length(1);
    expect(wrapper.find('.poker-back')).to.have.length(1);
    expect(wrapper.find('.poker-back-conf')).to.have.length(1);
    expect(wrapper.find('.common-back-style')).to.have.length(1);
    expect(wrapper.find('.back-logo')).to.have.length(1);
    expect(wrapper.find('.back-trantect-logo')).to.have.length(1);
    expect(wrapper.find('.back-trantect-text')).to.have.length(1);
  });

});