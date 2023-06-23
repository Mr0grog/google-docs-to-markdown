import rehypeRemark from 'rehype-remark';

/**
 * The official rehype-remark plugin gets a little aggeressive with removing
 * spaces, so this wraps it with some space preservation.
 *
 * Ideally, this needs to be solved upstream in rehype-remark.
 * TODO: create a minimal test case and file a bug there!
 */
export default function rehype2remarkWithSpaces () {
  const spaceToken = '++IAMASPACE++';

  function preserveInitialSpaces (node) {
    if (node.type === 'text' && node.value.startsWith(' ')) {
      if (node.value.startsWith(' ')) {
        node.value = spaceToken + node.value.slice(1);
      }
      if (node.value.endsWith(' ')) {
        node.value = node.value.slice(0, -1) + spaceToken;
      }
    }
    if (node.children) {
      node.children.forEach(preserveInitialSpaces);
    }
  }

  function recreateSpaces (node) {
    if (node.value && typeof node.value === 'string') {
      node.value = node.value.split(spaceToken).join(' ');
    }
    if (node.children) {
      node.children.forEach(recreateSpaces);
    }
  }

  const convert = rehypeRemark.apply(this, arguments);
  return function (tree, file) {
    preserveInitialSpaces(tree);
    const markdownTree = convert.apply(this, [tree, file]);
    recreateSpaces(markdownTree);
    return markdownTree;
  };
}
