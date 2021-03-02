import React from 'react';
import BrailleCellPage from '../BrailleCellPage';
import { mount } from 'enzyme';

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
