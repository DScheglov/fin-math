'use strict';

const assert = require('assert');
const payments = require('../lib/payments');
const pmt = payments.pmt;
const ppmt = payments.ppmt;
const ipmt = payments.ipmt;
const round8 = require('./assets/round').bind(null, 8);

describe('payments.pmt', function() {

  it('should return -88.84878868 for pmt(0.01, 12, 1000)', function () {
    assert.equal(
      round8(pmt(0.01, 12, 1000)),
      -88.84878868
    )
  });

  it('should return -87.96909770 for pmt(0.01, 12, 1000, 0, 1)', function () {
    assert.equal(
      round8(pmt(0.01, 12, 1000, 0, 1)),
      -87.96909770
    )
  });

  it('should return -91.27418336 for pmt(0.01, 6, 1000, -500)', function () {
    assert.equal(
      round8(pmt(0.01, 6, 1000, -500)),
      -91.27418336
    )
  });

  it('should return -90.37047857 for pmt(0.01, 6, 1000, -500, 1)', function () {
    assert.equal(
      round8(pmt(0.01, 6, 1000, -500, 1)),
      -90.37047857
    )
  });

  it('should return -200 for pmt(0, 5, 1000)', function () {
    assert.equal(pmt(0, 5, 1000), -200);
  });

  it('should return -200 for pmt(0, 5, 1000, 0, 1)', function () {
    assert.equal(pmt(0, 5, 1000, 0, 1), -200);
  });

  it('should return -100 for pmt(0, 5, 1000, -500)', function () {
    assert.equal(pmt(0, 5, 1000, -500), -100);
  });

  it('should retrun -100 for pmt(0, 5, 1000, -500, 1)', function () {
    assert.equal(pmt(0, 5, 1000,- 500, 1), -100);
  });

  it('should retrun NaN for pmt()', function () {
    assert.ok(isNaN(pmt()));
  });

  it('should return -Infinity for pmt(0.01, 0, 1000)', function() {
    assert.equal(pmt(0.01, 0, 1000), Number.NEGATIVE_INFINITY);
  });

  it('should return Infinity for pmt(0.01, 0, 500, -1000)', function() {
    assert.equal(pmt(0.01, 0, 500, -1000), Number.POSITIVE_INFINITY);
  });

});

describe('payments.ppmt', function() {

  it('should return -78.84878868 for ppmt(0.01, 1, 12, 1000)', function () {
    assert.equal(
      round8(ppmt(0.01, 1, 12, 1000)),
      -78.84878868
    )
  });

  it('should return -82.87086934 for ppmt(0.01, 6, 12, 1000)', function () {
    assert.equal(
      round8(ppmt(0.01, 6, 12, 1000)),
      -82.87086934
    )
  });

  it('should return -100 for ppmt(0, 6, 10, 1000)', function () {
    assert.equal(
      round8(ppmt(0, 6, 10, 1000)),
      -100
    )
  });

  it('should return -87.9690977 for ppmt(0.01, 12, 12, 1000)', function () {
    assert.equal(
      round8(ppmt(0.01, 12, 12, 1000)),
      -87.9690977
    )
  });

  it('should return -39.42439434 for ppmt(0.01, 1, 12, 1000, -500)', function () {
    assert.equal(
      round8(ppmt(0.01, 1, 12, 1000, -500)),
      -39.42439434
    )
  });

  it('should return -41.43543467 for ppmt(0.01, 6, 12, 1000, -500)', function () {
    assert.equal(
      round8(ppmt(0.01, 6, 12, 1000, -500)),
      -41.43543467
    )
  });

  it('should return -50 for ppmt(0, 6, 10, 1000, -500)', function () {
    assert.equal(
      round8(ppmt(0, 6, 10, 1000, -500)),
      -50
    )
  });

  it('should return -43.98454885 for ppmt(0.01, 12, 12, 1000, -500)', function () {
    assert.equal(
      round8(ppmt(0.01, 12, 12, 1000, -500)),
      -43.98454885
    )
  });

  it('should return -87.9690977 for ppmt(0.01, 1, 12, 1000, 0, 1)', function () {
    assert.equal(
      round8(ppmt(0.01, 1, 12, 1000, 0, 1)),
      -87.9690977
    )
  });

  it('should return -82.05036568 for ppmt(0.01, 6, 12, 1000, 0, 1)', function () {
    assert.equal(
      round8(ppmt(0.01, 6, 12, 1000, 0, 1)),
      -82.05036568
    )
  });

  it('should return -100 for ppmt(0, 6, 10, 1000, 0, 1)', function () {
    assert.equal(
      round8(ppmt(0, 6, 10, 1000, 0, 1)),
      -100
    )
  });

  it('should return -87.09811654 for ppmt(0.01, 12, 12, 1000, 0, 1)', function () {
    assert.equal(
      round8(ppmt(0.01, 12, 12, 1000, 0, 1)),
      -87.09811654
    )
  });

  it('should return -48.9350439 for ppmt(0.01, 1, 12, 1000, -500, 1)', function () {
    assert.equal(
      round8(ppmt(0.01, 1, 12, 1000, -500, 1)),
      -48.9350439
    )
  });

  it('should return -41.02518284 for ppmt(0.01, 6, 12, 1000, -500, 1)', function () {
    assert.equal(
      round8(ppmt(0.01, 6, 12, 1000, -500, 1)),
      -41.02518284
    )
  });

  it('should return -50 for ppmt(0, 6, 10, 1000, -500, 1)', function () {
    assert.equal(
      round8(ppmt(0, 6, 10, 1000, -500, 1)),
      -50
    )
  });

  it('should return -43.54905827 for ppmt(0.01, 12, 12, 1000, -500, 1)', function () {
    assert.equal(
      round8(ppmt(0.01, 12, 12, 1000, -500, 1)),
      -43.54905827
    )
  });

  it('should return NaN for ppmt()', function () {
    assert.ok(isNaN(ppmt()));
  });

  it('should raise an examption if <period> is less then 1', function () {
    assert.throws(
      () => ppmt(0.01, 0, 12, 1000),
      /PPMT Error: the <period> shoud be between 1 and <periods>\./
    );
  });

  it('should raise an examption if <period> is greater then <periods>', function () {
    assert.throws(
      () => ppmt(0.01, 13, 12, 1000),
      /PPMT Error: the <period> shoud be between 1 and <periods>\./
    );
  });

});


describe('payments.ipmt', function() {

  it('should return -10 for ipmt(0.01, 1, 12, 1000)', function () {
    assert.equal(
      round8(ipmt(0.01, 1, 12, 1000)),
      -10.0
    )
  });

  it('should return -5.97791934 for ipmt(0.01, 6, 12, 1000)', function () {
    assert.equal(
      round8(ipmt(0.01, 6, 12, 1000)),
      -5.97791934
    )
  });

  it('should return 0 for ipmt(0, 6, 12, 1000)', function () {
    assert.equal(
      round8(ipmt(0, 6, 12, 1000)),
      0
    )
  });

  it('should return -0.87969098 for ipmt(0.01, 12, 12, 1000)', function () {
    assert.equal(
      round8(ipmt(0.01, 12, 12, 1000)),
      -0.87969098
    )
  });

  it('should return -10 for ipmt(0.01, 1, 12, 1000, -500)', function () {
    assert.equal(
      round8(ipmt(0.01, 1, 12, 1000, -500)),
      -10
    )
  });

  it('should return -7.98895967 for ipmt(0.01, 6, 12, 1000, -500)', function () {
    assert.equal(
      round8(ipmt(0.01, 6, 12, 1000, -500)),
      -7.98895967
    )
  });

  it('should return 0 for ipmt(0, 6, 12, 1000, -500)', function () {
    assert.equal(
      round8(ipmt(0, 6, 12, 1000, -500)),
      0
    )
  });

  it('should return -5.43984549 for ipmt(0.01, 12, 12, 1000, -500)', function () {
    assert.equal(
      round8(ipmt(0.01, 12, 12, 1000, -500)),
      -5.43984549
    )
  });

  it('should return 0 for ipmt(0.01, 1, 12, 1000, 0, 1)', function () {
    assert.equal(
      round8(ipmt(0.01, 1, 12, 1000, 0, 1)),
      0
    )
  });

  it('should return -5.91873202 for ipmt(0.01, 6, 12, 1000, 0, 1)', function () {
    assert.equal(
      round8(ipmt(0.01, 6, 12, 1000, 0, 1)),
      -5.91873202
    )
  });

  it('should return 0 for ipmt(0, 6, 12, 1000, 0, 1)', function () {
    assert.equal(
      round8(ipmt(0, 6, 12, 1000, 0, 1)),
      0
    )
  });

  it('should return -0.87098117 for ipmt(0.01, 12, 12, 1000, 0, 1)', function () {
    assert.equal(
      round8(ipmt(0.01, 12, 12, 1000, 0, 1)),
      -0.87098117
    )
  });

  it('should return 0 for ipmt(0.01, 1, 12, 1000, -500, 1)', function () {
    assert.equal(
      round8(ipmt(0.01, 1, 12, 1000, -500, 1)),
      0
    )
  });

  it('should return -7.90986106 for ipmt(0.01, 6, 12, 1000, -500, 1)', function () {
    assert.equal(
      round8(ipmt(0.01, 6, 12, 1000, -500, 1)),
      -7.90986106
    )
  });

  it('should return 0 for ipmt(0, 6, 12, 1000, -500, 1)', function () {
    assert.equal(
      round8(ipmt(0, 6, 12, 1000, -500, 1)),
      0
    )
  });

  it('should return -5.38598563 for ipmt(0.01, 12, 12, 1000, -500, 1)', function () {
    assert.equal(
      round8(ipmt(0.01, 12, 12, 1000, -500, 1)),
      -5.38598563
    )
  });

  it('should return NaN for ipmt()', function () {
    assert.ok(isNaN(ipmt()));
  });

  it('should raise an examption if <period> is less then 1', function () {
    assert.throws(
      () => ipmt(0.01, 0, 12, 1000),
      /IPMT Error: the <period> shoud be between 1 and <periods>\./
    );
  });

  it('should raise an examption if <period> is greater then <periods>', function () {
    assert.throws(
      () => ipmt(0.01, 13, 12, 1000),
      /IPMT Error: the <period> shoud be between 1 and <periods>\./
    );
  });

});
