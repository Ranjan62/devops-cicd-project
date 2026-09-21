const test = require('node:test');
const assert = require('node:assert');

const getMessage = require('./app');

test('getMessage returns the correct message', () => {
  assert.strictEqual(
    getMessage(),
    'DevOps CI/CD project is working'
  );
});
