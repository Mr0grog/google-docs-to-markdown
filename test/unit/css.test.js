import { expect } from 'expect';
import { parseCssPropertyList } from '../../lib/css.js';

describe('parseCssPropertyList', () => {
  it('parses simple CSS property lists', () => {
    const result = parseCssPropertyList(`
      color: blue;
      margin: 5em;
      font-family: helvetica, arial, sans-serif;
      -webkit-line-clamp: none;
    `);

    expect(result).toEqual({
      color: 'blue',
      margin: '5em',
      'font-family': 'helvetica, arial, sans-serif',
      '-webkit-line-clamp': 'none'
    });
  });

  it('handles empty properties', () => {
    const result = parseCssPropertyList(`color: blue;; ; margin: 5em;`);
    expect(result).toEqual({
      color: 'blue',
      margin: '5em'
    });
  });

  it('uses the last specified value of a property', () => {
    const result = parseCssPropertyList(`color: blue;margin: 5em;color: red;`);
    expect(result).toEqual({
      color: 'red',
      margin: '5em'
    });
  });

  it('lower-cases keywords', () => {
    const result = parseCssPropertyList(`color: BLUE;`);
    expect(result).toEqual({ color: 'blue' });
  });
});
