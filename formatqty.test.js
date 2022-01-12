const assert = require('assert');
const formatqty = require('./formatqty');

describe('formatQTY test cases', function () {
  it('should return 0 when the value is 0', function () {
    assert.equal(formatqty(0), '0');
  });

  it('should return 100 when the value is 100', function () {
    assert.equal(formatqty(100), '100');
  });

  it('should return 1,000 when the value is 1000', function () {
    assert.equal(formatqty(1000), '1,000');
  });

  it('should return 1,000.0 when the value is 1000', function () {
    assert.equal(formatqty(1000.0), '1,000');
  });

  it('should return 1,000,000 when the value is 1000000', function () {
    assert.equal(formatqty(1000000), '1,000,000');
  });

  it('should return 1,000.12 when the value is 1000.12', function () {
    assert.equal(formatqty(1000.12), '1,000.12');
  });

  it('should return 0.12 when the value is 0.12', function () {
    assert.equal(formatqty(0.12), '0.12');
  });

  it('should return -0.12 when the value is -0.12', function () {
    assert.equal(formatqty(-0.12), '-0.12');
  });

  it('should return -100 when the value is -100', function () {
    assert.equal(formatqty(-100), '-100');
  });

  it('should return -1000000 when the value is -1,000,000', function () {
    assert.equal(formatqty(-1000000), '-1,000,000');
  });

  it("should return '' when the value is ''", function () {
    assert.equal(formatqty(''), '');
  });

  it("should return '1000' when the value is 1,000", function () {
    assert.equal(formatqty('1000'), '1,000');
  });

  it("should return 'abc' when the value is abc", function () {
    assert.equal(formatqty('abc'), 'abc');
  });
});
