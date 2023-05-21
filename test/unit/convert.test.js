import { expect } from 'expect';
import { convertDocsHtmlToMarkdown } from '../../lib/convert.js';
import { loadFixture } from '../support/fixtures.js';

describe('convert', () => {
  function createFixtureTest(name, { type, skip = false }) {
    const test = skip ? it.skip : it;

    test(`converts ${name} (${type})`, async () => {
      const input = await loadFixture(`${name}.${type}.html`);
      const expected = await loadFixture(`${name}.expected.md`);
      const md = await convertDocsHtmlToMarkdown(input);
      expect(md).toEqual(expected);
    });
  }

  // TODO: support exported HTML and enable the export tests. They are skipped
  // because a lot of features just don't work for exports yet.
  createFixtureTest('code', { type: 'copy' });
  createFixtureTest('code', { type: 'export', skip: true });

  createFixtureTest('headings-and-paragraphs', { type: 'copy' });
  createFixtureTest('headings-and-paragraphs', { type: 'export', skip: true });

  createFixtureTest('inline-formatting', { type: 'copy' });
  createFixtureTest('inline-formatting', { type: 'export', skip: true });

  createFixtureTest('lists', { type: 'copy' });
  createFixtureTest('lists', { type: 'export', skip: true });

  createFixtureTest('tables', { type: 'copy' });
  createFixtureTest('tables', { type: 'export', skip: true });

  // At current, it doesn't seem like this situation can happen in a Google Doc,
  // but it's worth supporting just in case things change or users want to
  // convert more arbitrary HTML.
  it('handles nested space-sensitive elements', async () => {
    let md = await convertDocsHtmlToMarkdown(`
      <p>This<strong> <em> is bold and italic </em> </strong>
    `);

    expect(md).toEqual(`This  **_is bold and italic_**  \n`);
  });
});
