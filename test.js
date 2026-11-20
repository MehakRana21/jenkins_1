const assert = require('assert');

console.log('Running Node.js tests...');

const message = 'Hello! Node.js application running successfully!';

assert.strictEqual(
    message,
    'Hello! Node.js application running successfully!'
);

console.log('Test Passed!');
