import { expect } from 'expect';
import { convertDocsHtmlToMarkdown } from '../../lib/convert.js';
import { loadFixture } from '../support/fixtures.js';

describe('convert', () => {
  function createFixtureTest(
    name,
    { type, skip = false, options = null, variation = '' }
  ) {
    const test = skip ? it.skip : it;

    test(`converts ${name}${variation} (${type})`, async () => {
      const input = await loadFixture(`${name}.${type}.html`);
      const inputSliceClip =
        type === 'copy'
          ? await loadFixture(`${name}.${type}.gdocsliceclip.json`)
          : null;
      const expected = await loadFixture(`${name}.expected${variation}.md`);

      const md = await convertDocsHtmlToMarkdown(
        input,
        inputSliceClip,
        options
      );

      expect(md).toEqual(expected);
    });
  }

  // TODO: support exported HTML and enable the export tests. They are skipped
  // because a lot of features just don't work for exports yet.
  createFixtureTest('code-inline', { type: 'copy' });
  createFixtureTest('code-inline', { type: 'export', skip: true });

  createFixtureTest('code-blocks', { type: 'copy' });
  createFixtureTest('code-blocks', {
    type: 'copy',
    variation: '.fenced',
    options: { codeBlocks: 'fenced' },
  });
  createFixtureTest('code-blocks', { type: 'export', skip: true });

  // Blocks with mixed non-code and all-code lines are not yet supported, but
  // the test cases are there.
  createFixtureTest('code-blocks-mixed', { type: 'copy', skip: true });
  createFixtureTest('code-blocks-mixed', { type: 'export', skip: true });

  createFixtureTest('headings-and-paragraphs', { type: 'copy' });
  createFixtureTest('headings-and-paragraphs', { type: 'export', skip: true });

  createFixtureTest('inline-formatting', { type: 'copy' });
  createFixtureTest('inline-formatting', { type: 'export', skip: true });

  createFixtureTest('lists', { type: 'copy' });
  createFixtureTest('lists', { type: 'export', skip: true });

  createFixtureTest('list-item-level-styling', { type: 'copy' });
  createFixtureTest('list-item-level-styling', { type: 'export', skip: true });

  createFixtureTest('tables', { type: 'copy' });
  createFixtureTest('tables', { type: 'export', skip: true });

  createFixtureTest('internal-links', { type: 'copy' });
  createFixtureTest('internal-links', {
    type: 'copy',
    variation: '.html',
    options: { headingIds: 'html' },
  });
  createFixtureTest('internal-links', {
    type: 'copy',
    variation: '.extended',
    options: { headingIds: 'extended' },
  });
  createFixtureTest('internal-links', { type: 'export', skip: true });

  createFixtureTest('suggestions', {
    type: 'copy',
    options: { suggestions: 'reject' },
  });
  createFixtureTest('suggestions', {
    type: 'copy',
    variation: '.show',
    options: { suggestions: 'show' },
  });
  createFixtureTest('suggestions', {
    type: 'copy',
    variation: '.accept',
    options: { suggestions: 'accept' },
  });
  createFixtureTest('suggestions', { type: 'export', skip: true });

  createFixtureTest('titles-and-empty-headings', {
    type: 'copy',
    options: { headingIds: 'html' },
  });
  createFixtureTest('titles-and-empty-headings', {
    type: 'export',
    skip: true,
    options: { headingIds: 'html' },
  });

  createFixtureTest('non-text-between-code', { type: 'copy' });
  createFixtureTest('non-text-between-code', { type: 'export', skip: true });

  // At current, it doesn't seem like this situation can happen in a Google Doc,
  // but it's worth supporting just in case things change or users want to
  // convert more arbitrary HTML.
  it('handles nested space-sensitive elements', async () => {
    let md = await convertDocsHtmlToMarkdown(`
      <p>This<strong> <em> is bold and italic </em> </strong>
    `);

    expect(md).toEqual(`This  **_is bold and italic_** &#x20;\n`);
  });

  describe('checklists', () => {
    // Different browsers get different content on the clipboard for checklists.
    // We need explicit tests in addition to fixtures from actual docs as above
    // to make sure we cover  all the cases.
    //
    // As of 2023-08-16, most browsers get list items with ARIA markup
    // indicating they are checkboxes. That's covered by this first test.
    // Chrome Canary gets the same markup but with inline images of
    // checked/unchecked checkboxes (second test).
    it('supports copied checklists without images', async () => {
      // Removed `style` and `dir` attributes for brevity.
      let md = await convertDocsHtmlToMarkdown(`
        <ul>
          <li role="checkbox" aria-checked="false" aria-level="1">
            <p role="presentation">
              <span>Unchecked item</span>
            </p>
          </li>
          <li role="checkbox" aria-checked="true" aria-level="1">
            <p role="presentation">
              <span>Checked item</span>
            </p>
          </li>
        </ul>
      `);
      expect(md.trim()).toEqual(
        `
        - [ ] Unchecked item

        - [x] Checked item
      `
          .trim()
          .replace(/^[\t\u0020]+/gm, '')
      );
    });

    it('supports copied checklists with images', async () => {
      // Removed `style` and `dir` attributes for brevity. The images are also
      // replaced with a simple 1-pixel box for the same reason.
      let md = await convertDocsHtmlToMarkdown(`
        <ul>
        <li role="checkbox" aria-checked="false" aria-level="1">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAACklEQVR4AWNgAAAAAgABc3UBGAAAAABJRU5ErkJggg==" width="17.599999999999998px" height="17.599999999999998px" alt="unchecked" aria-roledescription="checkbox">
          <p role="presentation">
            <span>Unchecked item</span>
          </p>
        </li>
          <li role="checkbox" aria-checked="true" aria-level="1">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAACklEQVR4AWNgAAAAAgABc3UBGAAAAABJRU5ErkJggg==" width="17.599999999999998px" height="17.599999999999998px" alt="checked" aria-roledescription="checkbox">
            <p role="presentation">
              <span>Checked item</span>
            </p>
          </li>
        </ul>
      `);
      expect(md.trim()).toEqual(
        `
        - [ ] Unchecked item

        - [x] Checked item
      `
          .trim()
          .replace(/^[\t\u0020]+/gm, '')
      );
    });

    // This covers a potential edge-case we have not seen.
    it('keeps images not at the start of a checklist item', async () => {
      // Removed `style` and `dir` attributes for brevity. The images are also
      // replaced with a simple 1-pixel box for the same reason.
      let md = await convertDocsHtmlToMarkdown(`
        <ul>
        <li role="checkbox" aria-checked="false" aria-level="1">
          <span>Unchecked item</span>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAACklEQVR4AWNgAAAAAgABc3UBGAAAAABJRU5ErkJggg==" width="17.599999999999998px" height="17.599999999999998px" alt="unchecked" aria-roledescription="checkbox">
        </li>
          <li role="checkbox" aria-checked="true" aria-level="1">
            <span>Checked item</span>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAACklEQVR4AWNgAAAAAgABc3UBGAAAAABJRU5ErkJggg==" width="17.599999999999998px" height="17.599999999999998px" alt="checked" aria-roledescription="checkbox">
          </li>
        </ul>
      `);
      expect(md.trim()).toEqual(
        `
        - [ ] Unchecked item ![unchecked](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAACklEQVR4AWNgAAAAAgABc3UBGAAAAABJRU5ErkJggg==)

        - [x] Checked item ![checked](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAACklEQVR4AWNgAAAAAgABc3UBGAAAAABJRU5ErkJggg==)
      `
          .trim()
          .replace(/^[\t\u0020]+/gm, '')
      );
    });
  });

  it('removes browser-added fragment markers', async () => {
    let md = await convertDocsHtmlToMarkdown(`
      <!--StartFragment-->
      <p>This is a test paragraph</p>
      <!--EndFragment-->
    `);

    expect(md).toEqual('This is a test paragraph\n');
  });
});
