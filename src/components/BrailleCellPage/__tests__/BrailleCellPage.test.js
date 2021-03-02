import React from 'react';
import { mount } from 'enzyme';
import BrailleCellPage from '../BrailleCellPage';

describe('Braille Cell Page Component', () => {
  const props = {
    showCharacter: true,
    words: 'hello',
  };

  it('renders correct number of Braille cells', () => {
    const container = mount(<BrailleCellPage {...props} />);
    expect(container.find('.braille-cell').length).toEqual(5);
  });
});
