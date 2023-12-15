import { expect } from 'expect';
import { parseCssPropertyList, resolveNodeStyle } from '../../lib/css.js';

describe('parseCssPropertyList', () => {
  it('parses simple CSS property lists', () => {
    const result = parseCssPropertyList(`
      color: blue;
      margin: 5em;
      font-family: helvetica, arial, sans-serif;
      -webkit-line-clamp: none;
    `);

    expect(result).toEqual({
      'color': 'blue',
      'margin': '5em',
      'font-family': 'helvetica, arial, sans-serif',
      '-webkit-line-clamp': 'none',
    });
  });

  it('handles empty properties', () => {
    const result = parseCssPropertyList(`color: blue;; ; margin: 5em;`);
    expect(result).toEqual({
      color: 'blue',
      margin: '5em',
    });
  });

  it('uses the last specified value of a property', () => {
    const result = parseCssPropertyList(`color: blue;margin: 5em;color: red;`);
    expect(result).toEqual({
      color: 'red',
      margin: '5em',
    });
  });

  it('lower-cases keywords', () => {
    const result = parseCssPropertyList(`color: BLUE;`);
    expect(result).toEqual({ color: 'blue' });
  });

  it('gracefully handles invalid properties', () => {
    const result = parseCssPropertyList(`NOT VALID; color: blue;`);
    expect(result).toEqual({ color: 'blue' });
  });

  it('returns an object when style is not set', () => {
    const result = parseCssPropertyList(undefined);
    expect(result).toEqual({});
  });
});

describe('resolveNodeStyle', () => {
  it('resolves inherited styles from ancestors', () => {
    const style = resolveNodeStyle({ properties: { style: 'color: blue;' } }, [
      { properties: { style: 'font-weight: 700;' } },
      { properties: { style: 'font-style: italic;' } },
    ]);
    expect(style).toHaveProperty('color', 'blue');
    expect(style).toHaveProperty('font-weight', '700');
    expect(style).toHaveProperty('font-style', 'italic');
  });

  it('resolves to the explicitly set value if there is one', () => {
    const style = resolveNodeStyle(
      { properties: { style: 'font-weight: 600;' } },
      [
        { properties: { style: 'font-weight: 700;' } },
        { properties: { style: 'font-weight: 400;' } },
      ]
    );
    expect(style).toHaveProperty('font-weight', '600');
  });

  it('resolves to the closest value from an ancestor if not set explicitly', () => {
    const style = resolveNodeStyle({ properties: { style: 'color: blue;' } }, [
      { properties: { style: 'font-weight: 700;' } },
      { properties: { style: 'font-weight: 400;' } },
    ]);
    expect(style).toHaveProperty('font-weight', '400');
  });

  it('works if the node has no style', () => {
    const style = resolveNodeStyle({}, [
      { properties: { style: 'font-weight: 700;' } },
      { properties: { style: 'font-style: italic;' } },
    ]);
    expect(style).toHaveProperty('font-weight', '700');
    expect(style).toHaveProperty('font-style', 'italic');
  });

  it('works if an ancestor has no style', () => {
    const style = resolveNodeStyle({ properties: { style: 'color: blue;' } }, [
      {},
      { properties: { style: 'font-style: italic;' } },
    ]);
    expect(style).toHaveProperty('color', 'blue');
    expect(style).toHaveProperty('font-style', 'italic');
  });

  it('works if there are no ancestors', () => {
    const style = resolveNodeStyle({ properties: { style: 'color: blue;' } });
    expect(style).toHaveProperty('color', 'blue');
    expect(style).toHaveProperty('font-style', undefined);
  });

  it('resolves to a parent value when set to "inherit"', () => {
    const style = resolveNodeStyle(
      { properties: { style: 'color: inherit;' } },
      [
        { properties: { style: 'color: red;' } },
        { properties: { style: 'color: yellow;' } },
      ]
    );
    expect(style).toHaveProperty('color', 'yellow');
  });
});
