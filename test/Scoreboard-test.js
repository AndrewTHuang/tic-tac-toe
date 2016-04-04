import React              from 'react';
import { chai, expect }   from 'chai';
import { shallow, mount } from 'enzyme';

import Scoreboard         from '../src/components/Scoreboard';

describe('<Scoreboard />', () => {
  it('renders as a div with class .scoreboard', () => {
    const wrapper = shallow(<Scoreboard />);
    expect(wrapper.find('div.scoreboard')).to.have.length(1);
  });

  it('has a prop for XScore', () => {
    const wrapper = shallow(<Scoreboard />);
    expect(wrapper.props().XScore).to.be.defined;
  });

  it('has a prop for OScore', () => {
    const wrapper = shallow(<Scoreboard />);
    expect(wrapper.props().OScore).to.be.defined;
  });
});
