'use strict';

module.exports = exports = function round(prec, value) {
  let ratio = eval(`1e${prec}`);
  return Math.round(ratio * value) / ratio;
}
