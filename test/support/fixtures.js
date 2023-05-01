/**
 * Clean up a Markdown string from the fixtures directory. This mainly removes
 * comments and comment lines (so we can have comments in the expectations
 * without having them impact the tests).
 * @param {string} rawText
 * @returns string
 */
export function cleanMarkdown (rawText) {
  return rawText.replace(/<!--.+-->\n?/g, '');
}

function assertStatusOk (response) {
  if (response.status === 404) {
    throw new Error(`Could not find fixture: "${response.url}"`);
  }
  else if (response.status >= 400) {
    throw new Error(`Status ${response.status} loading fixture: "${response.url}"`);
  }
  else {
    return response;
  }
}

function getRootPath () {
  const root = globalThis.__wdioEnv__.config.rootDir;
  if (!root) {
    throw new Error('Could not find root project path!');
  }
  return root;
}

function getFixturesPath () {
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
export async function loadFixture (name) {
  const url = `/@fs${getFixturesPath()}/${name}`;
  let content = await fetchText(url);
  if (name.endsWith('.md')) {
    content = cleanMarkdown(content);
  }
  return content;
}
