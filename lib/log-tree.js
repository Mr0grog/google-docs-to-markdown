/**
 * A rehype plugin that logs the current (HTML) tree.
 */
export default function logTree () {
  function logNode (node, indent = 0) {
    let name = `(${node.type})`;
    if ('value' in node && typeof node.value === 'string') {
      name = `${name}: \`${node.value}\``;
    }
    else if (node.type === 'element') {
      name = `<${node.tagName}>`;
    }

    console.log(`${' '.repeat(indent)}- ${name}`);

    if (node.children) {
      node.children.forEach(child => logNode(child, indent + 2));
    }
  }

  return tree => logNode(tree);
}
