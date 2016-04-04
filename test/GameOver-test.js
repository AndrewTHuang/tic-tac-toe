import React              from 'react';
import { chai, expect }   from 'chai';
import { shallow, mount } from 'enzyme';

import GameOver           from '../src/components/GameOver';

describe('<GameOver />', () => {
  it('renders as a div with class .overlay', () => {
    const wrapper = shallow(<GameOver />);
    expect(wrapper.find('div.overlay')).to.have.length(1);
  });

  it('contains a <mount> with class .reset-btn', () => {
    const wrapper = shallow(<GameOver />);
    expect(wrapper.find('button.reset-btn')).to.have.length(1);
  });

  it('has a prop for winner', () => {
    const wrapper = shallow(<GameOver />);
    expect(wrapper.props().winner).to.be.defined;
  });

  it('has a prop for resetGame', () => {
    const wrapper = shallow(<GameOver />);
    expect(wrapper.props().resetGame).to.be.defined;
  });
});
