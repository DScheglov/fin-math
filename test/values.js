'use strict';

const assert = require('assert');
const round8 = require('./assets/round').bind(null, 8);
const values = require('../lib/values');

describe('values.pv', function () {

  it ('should return -99.00990099 for (0.01, 1, 100)', function () {
    assert.equal(
      round8(values.pv(0.01, 1, 100)),
      -99.00990099
    )
  });

  it ('should return -1125.50774735 for (0.01, 12, 100)', function () {
    assert.equal(
      round8(values.pv(0.01, 12, 100)),
      -1125.50774735
    )
  });

  it ('should return -1136.76282482 for (0.01, 12, 100, 0, 1)', function () {
    assert.equal(
      round8(values.pv(0.01, 12, 100, 0, 1)),
      -1136.76282482
    )
  });


    it ('should return --2012.95697261 for (0.01, 12, 100, 1000)', function () {
      assert.equal(
        round8(values.pv(0.01, 12, 100, 1000)),
        -2012.95697261
      )
    });

});
