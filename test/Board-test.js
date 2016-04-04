import React            from 'react';
import { chai, expect } from 'chai';
import { shallow }      from 'enzyme';

import Board            from '../src/components/Board';

describe('<Board />', () => {
  it('has a prop for tiles', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.props().tiles).to.be.defined;
  });

  it('has a prop for tileClick', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.props().tileClick).to.be.defined;
  });
});
