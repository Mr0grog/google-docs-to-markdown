import jsonStringifyDeterministic from 'json-stringify-deterministic';

/**
 * Clean up a Markdown string from the fixtures directory. This mainly removes
 * comments and comment lines (so we can have comments in the expectations
 * without having them impact the tests).
 * @param {string} rawText
 * @returns string
 */
export function cleanMarkdown(rawText) {
  return rawText.replace(/<!--.+-->\n?/g, '');
}

function assertStatusOk(response) {
  if (response.status === 404) {
    throw new Error(`Could not find fixture: "${response.url}"`);
  } else if (response.status >= 400) {
    throw new Error(
      `Status ${response.status} loading fixture: "${response.url}"`
    );
  } else {
    return response;
  }
}

function getRootPath() {
  const root = globalThis.__wdioEnv__.config.rootDir;
  if (!root) {
    throw new Error('Could not find root project path!');
  }
  return root;
}

function getFixturesPath() {
  return `${getRootPath()}/test/fixtures`;
}

async function fetchText(url) {
  const response = await fetch(url);
  assertStatusOk(response);
  return await response.text();
}

/**
 * Load a fixture file as text.
 * @param {string} name
 * @returns {Promise<string>}
 */
export async function loadFixture(name) {
  const url = `/@fs${getFixturesPath()}/${name}`;
  let content = await fetchText(url);
  if (name.endsWith('.md')) {
    content = cleanMarkdown(content);
  } else if (name.endsWith('.copy.html') || name.endsWith('.export.html')) {
    content = unformatDiffableHtml(content);
  } else if (name.endsWith('.gdocsliceclip.json')) {
    content = unformatDiffableGdocsSliceClip(content);
  }
  return content;
}

const VOID_ELEMENTS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

/**
 * Takes a single-line string of HTML and adds line breaks and tabs so that it
 * is easy to diff. The result can be transformed back to the original HTML by
 * removing line breaks and any tabs at the start of a line.
 *
 * Tabs that don't lead a line were part of the original HTML and lines may end
 * in significant whitespace.
 *
 * This implementation is pretty dumb, and doesn't worry about situations where
 * HTML-tag-like text might appear in a `<style>` or `<script>` block or inside
 * an attribute. But it fits a need that most HTML formatters do not: we want
 * our test fixtures to parse exactly the same as the un-prettified HTML from
 * Google docs would (otherwise it's not a great test!), but space between tags
 * is significant in HTML. We need to either add no significant whitespace
 * (which tends to make diffs less clear, and the whole point of this is for
 * readable diffs) or add it in a way that allows us to reliably remove it.
 * This does the latter.
 *
 * @param {string} input Raw HTML text to format
 * @returns {string}
 */
export function formatDiffableHtml(input) {
  if (input.includes('\n')) {
    throw new TypeError(
      'Cannot reformat HTML that already has newline characters'
    );
  }

  const LESS_THAN = '<'.charCodeAt(0);
  const TAB = '\t'.charCodeAt(0);

  let pretty = '';
  const tagMatcher = /<(?<close>\/?)(?<name>[^>\s]+)[^>]*>/g;
  let match;
  let depth = 0;
  let lastEndIndex = 0;
  // eslint-disable-next-line no-cond-assign
  while ((match = tagMatcher.exec(input))) {
    if (match.index > 0) {
      let precedingText = input.slice(lastEndIndex, match.index);
      if (match.groups.name === 'style' && match.groups.close) {
        precedingText = formatDiffableCss(precedingText);
      }
      pretty += `${precedingText}\n`;
    }

    if (match.groups.close) {
      depth -= depth > 0 ? 1 : 0;
    }
    pretty += `${'\t'.repeat(depth)}${match[0]}`;
    if (!VOID_ELEMENTS.has(match.groups.name) && !match.groups.close) {
      depth += 1;
    }

    lastEndIndex = match.index + match[0].length;
    const nextCharacter = input.charCodeAt(lastEndIndex);
    // If the tag is followed by non-tags, put it on a new line and indent
    // unless the following content starts with a tab (since leading tabs are
    // considered non-content in the output). If the following text is a tag,
    // it will manage indenting itself.
    if (nextCharacter !== LESS_THAN && nextCharacter !== TAB) {
      pretty += `\n${'\t'.repeat(depth)}`;
    }
  }
  pretty += input.slice(lastEndIndex);

  return pretty;
}

/**
 * Like `formatDiffableHtml()`, but for CSS.
 * @param {string} input CSS text to format
 * @returns {string}
 */
function formatDiffableCss(input) {
  let pretty = '';
  const matcher = /\{|\}|;/g;
  let match;
  let depth = 0;
  let lastEndIndex = 0;
  // eslint-disable-next-line no-cond-assign
  while ((match = matcher.exec(input))) {
    pretty += input.slice(lastEndIndex, match.index);
    if (match[0] === '{') {
      depth += 1;
    } else if (match[0] === '}') {
      depth -= 1;
      if (input[match.index - 1] !== ';') {
        pretty += `\n${'\t'.repeat(depth)}`;
      }
    }
    pretty += match[0];
    pretty += `\n${'\t'.repeat(depth)}`;
    lastEndIndex = match.index + match[0].length;
  }
  pretty += input.slice(lastEndIndex);

  return pretty;
}

/**
 * Reverse the effects of `formatDiffableHtml()`.
 * @param {string} input Formatted HTML to unformat into its original version.
 * @returns {string}
 */
export function unformatDiffableHtml(input) {
  return input.replace(/\n\t*/g, '');
}

/**
 * Format a GDocs Slice Clip data object so that it is diff friendly.
 *
 * Slice Clips are treated as a giant string wrapped inside a JSON envelope.
 * This parse the data string and treats it as a normal object inside the
 * wrapper envelope (so it can be formatted across lines) and then searializes
 * the resulting JSON with keys in sorted order.
 *
 * @param {any} input GDocs Slice Clip string or parsed data object to format.
 * @returns {string}
 */
export function formatDiffableGdocsSliceClip(input) {
  if (typeof input === 'string') {
    input = JSON.parse(input);
  }

  return jsonStringifyDeterministic(
    {
      ...input,
      data: JSON.parse(input.data),
    },
    { space: '  ' }
  );
}

/**
 * Reverses the effects of `formatDiffableGdocsSliceClip()` so that the
 * resulting string parses exactly the same as a normal GDocs Slice Clip would.
 * @param {string} input Diff-friendly formatted GDocs Slice Clip JSON string.
 * @returns {string}
 */
export function unformatDiffableGdocsSliceClip(input) {
  const parsed = JSON.parse(input);
  if (typeof parsed.data !== 'string') {
    parsed.data = JSON.stringify(parsed.data);
  }
  return JSON.stringify(parsed);
}
