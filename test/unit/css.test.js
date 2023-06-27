import { expect } from 'expect';
import { StyleResolver, parseCssPropertyList } from '../../lib/css.js';

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

describe('StyleResolver', () => {
  it('resolves inherited styles from ancestors', () => {
    const style = new StyleResolver(
      { properties: { style: 'color: blue;' } },
      [
        { properties: { style: 'font-weight: 700;' } },
        { properties: { style: 'font-style: italic;' } }
      ]
    );
    expect(style.get('color')).toBe('blue');
    expect(style.get('font-weight')).toBe('700');
    expect(style.get('font-style')).toBe('italic');
  });

  it('resolves to the explicitly set value if there is one', () => {
    const style = new StyleResolver(
      { properties: { style: 'font-weight: 600;' } },
      [
        { properties: { style: 'font-weight: 700;' } },
        { properties: { style: 'font-weight: 400;' } }
      ]
    );
    expect(style.get('font-weight')).toBe('600');
  });

  it('resolves to the closest value from an ancestor if not set explicitly', () => {
    const style = new StyleResolver(
      { properties: { style: 'color: blue;' } },
      [
        { properties: { style: 'font-weight: 700;' } },
        { properties: { style: 'font-weight: 400;' } }
      ]
    );
    expect(style.get('font-weight')).toBe('400');
  });

  it('works if the node has no style', () => {
    const style = new StyleResolver(
      {},
      [
        { properties: { style: 'font-weight: 700;' } },
        { properties: { style: 'font-style: italic;' } }
      ]
    );
    expect(style.get('font-weight')).toBe('700');
    expect(style.get('font-style')).toBe('italic');
  });

  it('works if an ancestor has no style', () => {
    const style = new StyleResolver(
      { properties: { style: 'color: blue;' } },
      [
        {},
        { properties: { style: 'font-style: italic;' } }
      ]
    );
    expect(style.get('color')).toBe('blue');
    expect(style.get('font-style')).toBe('italic');
  });

  it('works if there are no ancestors', () => {
    const style = new StyleResolver({ properties: { style: 'color: blue;' } });
    expect(style.get('color')).toBe('blue');
    expect(style.get('font-style')).toBe(undefined);
  });

  it('resolves to a parent value when set to "inherit"', () => {
    const style = new StyleResolver(
      { properties: { style: 'color: inherit;' } },
      [
        { properties: { style: 'color: red;' } },
        { properties: { style: 'color: yellow;' } }
      ]
    );
    expect(style.get('color')).toBe('yellow');
  });
})
