import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SmallPoker from '../../src/components/SmallPoker/SmallPoker';

describe('Test SmallPoker', () => {
  it('contains 1 div and 1 Poker', () => {
    let name = "2";
    let sideIcon = "2";
    let sideIconFiles = {
      '2_top': '../../src/images/top_icon/2_top.svg',
      '2_bottom': '../../src/images/bottom_icon/2_bottom.svg'
    };

    let wrapper = shallow(<SmallPoker name={name} sideIcon={sideIcon}
                                      sideIconFiles={sideIconFiles} />);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.find('Poker')).to.have.length(1);
    expect(wrapper.state('name')).to.equal(name);
    expect(wrapper.state('sideIcon')).to.equal(sideIcon);
    expect(wrapper.state('sideIconFiles')).to.equal(sideIconFiles);
  });

  it('add click event', () => {
    let name = "2";
    let sideIcon = "2";
    let sideIconFiles = {
      '2_top': '../../src/images/top_icon/2_top.svg',
      '2_bottom': '../../src/images/bottom_icon/2_bottom.svg'
    };

    let mockClick = sinon.spy();

    let wrapper = shallow(<SmallPoker name={name} sideIcon={sideIcon}
                                      sideIconFiles={sideIconFiles} onClick={mockClick}/>);
    wrapper.find('div').first().simulate('click');
    expect(mockClick.calledOnce).to.equal(true);
  });
});