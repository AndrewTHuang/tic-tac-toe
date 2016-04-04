import React              from 'react';
import { chai, expect }   from 'chai';
import { shallow, mount } from 'enzyme';

import App                from '../src/App'
import Board              from '../src/components/Board';
import Scoreboard         from '../src/components/Scoreboard';

describe('<App />', () => {
  it('renders a <Board /> component on load', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Board)).to.have.length(1);
  });

  it('renders a <Scoreboard /> component on load', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Scoreboard)).to.have.length(1);
  });

  it('has a state property `tiles` that is an array', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().tiles).to.be.an('array');
  });

  it('has a state property `turn` set to `X`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().turn).to.equal('X');
  });

  it('has a state property `winner` set to null', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().winner).to.equal(null);
  });

  it('has a state property `XScore` set to 0', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().XScore).to.equal(0);
  });

  it('has a state property `OScore` set to 0', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().OScore).to.equal(0);
  });
});
