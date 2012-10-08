var assert = require('assert');
var stackback = require('./');

test('', function() {
    var err = new Error();
    var stack = stackback(new Error());
    assert.equal(stack[0].getFileName(), __filename);
});

