import React from 'react';
import { shallow, mount, render } from 'enzyme';
import StartUp from '../../src/components/StartUp/StartUp';

describe("Test StartUp", ()=> {
  var wrapper;

  before(()=> {
    wrapper = shallow(<StartUp />);
  });

  it("should contain 4 div tags and 2 img tags", ()=> {
    expect(wrapper.find("div")).to.have.length(4);
    expect(wrapper.find("img")).to.have.length(2);
  });

  it("should contain 4 class", ()=> {
    expect(wrapper.find(".startup-common")).to.have.length(1);
    expect(wrapper.find(".startup-conf")).to.have.length(1);
    expect(wrapper.find(".startup-trantect-logo")).to.have.length(1);
    expect(wrapper.find(".startup-trantect-text")).to.have.length(1);
  });
  it("should contain className startUp-disappear after 3000ms", (done)=> {
    var mock = mount(<StartUp />);
    expect(mock.find(".startUp-disappear")).to.have.length(0);
    setTimeout(()=> {
      expect(mock.find(".startUp-disappear")).to.have.length(1);
      done();
    }, 3000);
  });
});