import React from 'react';
import BrailleCell from '../BrailleCell';
import { mount } from 'enzyme';

describe('Braille Cell Component', () => {
  const props = {
    brailleCharacter: [true, false, true, false, false, false, false, false],
    character: 'a',
    showCharacter: false,
  };

  it('renders Braille cell', () => {
    const container = mount(<BrailleCell {...props} />);
    expect(container.exists()).toEqual(true);
  });

  it('shows actual character if user turns on that option', () => {
    const newProps = {
      ...props,
      showCharacter: true,
    };
    const container = mount(<BrailleCell { ...newProps } />);
    expect(container.find('.character-row').length).toEqual(1);
  });

  it('does not show actual character if user turns off that option', () => {
    const container = mount(<BrailleCell {...props} />);
    expect(container.find('.character-row').length).toEqual(0);
  });
});
