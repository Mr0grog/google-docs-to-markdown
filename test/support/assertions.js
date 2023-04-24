import { Assertion } from 'chai';

function formatLine (text) {
  return text?.replace(/ /g, '⋅') ?? '<no line>';
}

function lineByLineComparison (actual, expected) {
  const aLines = actual.split("\n");
  const eLines = expected.split("\n");
  const lineCount = Math.max(aLines.length, eLines.length);
  const numberSize = lineCount.toString().length;
  const linePadded = ' '.repeat(numberSize);

  const comparisonLines = [];
  for (let i = 0; i < lineCount; i++) {
    const lineNumber = (i + 1).toString().padStart(numberSize, ' ');
    comparisonLines.push(`  Line ${lineNumber}: - ${formatLine(eLines[i])}`);
    comparisonLines.push(`       ${linePadded}  + ${formatLine(aLines[i])}`);

    // Point to the first different character.
    if (aLines[i] !== eLines[i]) {
      const maxIndex = Math.min(aLines[i]?.length ?? 0, eLines[i]?.length ?? 0);
      let index = 0;
      for (; index < maxIndex; index++) {
        if (aLines[i][index] !== eLines[i][index]) break;
      }
      comparisonLines.push(`Mismatch ${'-'.repeat(2 + numberSize + index)}^`);
    }
  }

  return comparisonLines.join('\n');
}

/**
 * Assert that two long strings are the same. Prints a detailed comparison
 * including indications of exactly where the mismatches are if they are not
 * equal. (If you don't need this detail, just use `.equal(expected)`.)
 * @this {Assertion}
 */
export function equalText (expected) {
  const actual = this._obj;
  new Assertion(actual).to.be.a('string');

  const equal = actual === expected;
  const details = equal ? '' : lineByLineComparison(actual, expected);

  this.assert(
    equal,
    `Expected strings to match, but they did not:\n${details}`,
    'Expected strings not to match, but they did',
    expected,
    actual
  );
}

Assertion.addMethod('equalText', equalText);
