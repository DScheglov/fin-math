'use strict';

module.exports = exports = {
  pmt: pmt,
  ppmt: ppmt,
  ipmt: ipmt
}

/**
 * pmt - calculates the payment for a loan based on constant payments and a constant interest rate.
 *
 * @param  {Number} rate             the rate should be used to accrue interests for one period
 * @param  {Number} periods          number of periods
 * @param  {Number} start_amount     the start amount of the loan
 * @param  {Number} [fv=0]           The future value, or a cash balance you want to attain after the last payment is made.
 * <p><strong>WARNING</strong>: The MS Excel considers parameter `fv` as final payment that reduces
 * loan balance to zero. It means the sign of the `fv` should be the same as the
 * sign of payments.</p>
 * @param  {Number} [pmt_type=0]     if 0 or ommitted the function considers payment at the end of period, otherwise at the beggining
 * @return {Number}                  periodical equal payment (annuity)
 *
 * @see https://support.office.com/en-US/article/PMT-function-0214DA64-9A63-4996-BC20-214433FA6441
 */
function pmt(rate, periods, start_amount, fv, pmt_type) {
  let n = parseInt((periods || 0), 10);

  let r = parseFloat(rate || 0);
  let s0 = parseFloat(start_amount || 0);
  let sn = parseFloat(fv || 0);

  if (r === 0 || n === 0) return - (sn + s0) / n;

  let q = (1 + r);
  let qn = Math.pow(q, n);
  let p = (s0 * qn + sn) * r / (1 - qn);

  return !!pmt_type ? p / q : p;
}

/**
 * ppmt - Returns the payment on the principal for a given period for an
 * investment based on periodic, constant payments and a constant interest rate.
 *
 * @param  {Number} rate             the rate should be used to accrue interests for one period
 * @param  {Number} period           specifies the period and must be in the range 1 to `periods`
 * @param  {Number} periods          number of periods
 * @param  {Number} start_amount     the start amount of the loan
 * @param  {Number} [fv=0]           The future value, or a cash balance you want to attain after the last payment is made.
 * <p><strong>WARNING</strong>: The MS Excel considers parameter `fv` as final payment that reduces
 * loan balance to zero. It means the sign of the `fv` should be the same as the
 * sign of payments.</p>
 * @param  {Number} [pmt_type=0]     if 0 or ommitted the function considers payment at the end of period, otherwise at the beggining
 * @return {Number}                  payment on the principal
 *
 * @see https://support.office.com/en-us/article/PPMT-function-c370d9e3-7749-4ca4-beea-b06c6ac95e1b
 */
function ppmt(rate, period, periods, start_amount, fv, pmt_type) {
  let i = parseInt(period || 0) - 1;
  let n = parseInt((periods || 0), 10);

  if (n && (i < 0 || i >= n)) {
    throw new Error('PPMT Error: the <period> shoud be between 1 and <periods>.');
  }

  let r = parseFloat(rate || 0);
  let s0 = parseFloat(start_amount || 0);
  let sn = parseFloat(fv || 0);

  if (r === 0 || n === 0) return - (sn + s0) / n;

  let q = (1 + r);
  let qt = !!pmt_type ? q : 1;
  let qn = Math.pow(q, n);
  let qi = Math.pow(q, i);
  let p = (s0 * qn + sn) * r / (1 - qn) / qt;

  return !i && !!pmt_type ? p : qi * (s0 * r / qt + p);
}

/**
 * ipmt - Returns the interest payment for a given period for an investment
 * based on periodic, constant payments and a constant interest rate
 *
 * @param  {Number} rate             the rate should be used to accrue interests for one period
 * @param  {Number} period           specifies the period and must be in the range 1 to `periods`
 * @param  {Number} periods          number of periods
 * @param  {Number} start_amount     the start amount of the loan
 * @param  {Number} [fv=0]           The future value, or a cash balance you want to attain after the last payment is made.
 * <p><strong>WARNING</strong>: The MS Excel considers parameter `fv` as final payment that reduces
 * loan balance to zero. It means the sign of the `fv` should be the same as the
 * sign of payments.</p>
 * @param  {Number} [pmt_type=0]     if 0 or ommitted the function considers payment at the end of period, otherwise at the beggining
 * @return {Number}                  interest payment
 *
 * @see https://support.office.com/en-us/article/IPMT-function-5cce0ad6-8402-4a41-8d29-61a0b054cb6f
 */
function ipmt(rate, period, periods, start_amount, fv, pmt_type) {
  let i = parseInt(period || 0) - 1;
  let n = parseInt((periods || 0), 10);
  if (!n) return NaN;

  if (i < 0 || i >= n) {
    throw new Error('IPMT Error: the <period> shoud be between 1 and <periods>.');
  }

  let r = parseFloat(rate || 0);
  if (r === 0) return 0;

  let s0 = parseFloat(start_amount);
  let sn = parseFloat(fv || 0);

  let q = (1 + r);
  let qt = !!pmt_type ? q : 1;
  let qn = Math.pow(q, n);
  let qi = Math.pow(q, i);
  let p = (s0 * qn + sn) * r / (1 - qn) / qt;

  return !i && !!pmt_type ? 0 : p - qi * (s0 * r / qt + p);
}

/**
 * cumprinc - Returns the cumulative principal paid on a loan between start_period and end_period
 * bassing on periodic, constant payments and a constant interest rate.
 *
 * @param  {Number} rate             the rate should be used to accrue interests for one period
 * @param  {Number} periods          number of periods
 * @param  {Number} start_amount     the start amount of the loan
 * @param  {Number} [start_period=1] the first period should be cosnidered for calculation
 * @param  {Numver} [end_period]     the last period should be considered for calculation. If it is ommitted the <periods> used as <end_period>
 * @param  {Number} [fv=0]           The future value, or a cash balance you want to attain after the last payment is made.
 * <p><strong>WARNING</strong>: The MS Excel CUMPRINC function does not support the `fv` parameter.
 * In some other cases the MS Excel considers parameter `fv` as final payment that reduces
 * loan balance to zero. It means the sign of the `fv` should be the same as the
 * sign of payments.</p>
 * @param  {Number} [pmt_type=0]     if 0 or ommitted the function considers payment at the end of period, otherwise at the beggining
 * @return {Number}                  payment on the principal
 *
 * @see https://support.office.com/en-us/article/CUMPRINC-function-94a4516d-bd65-41a1-bc16-053a6af4c04d
 */
function cumprinc(rate, periods, start_amount, start_period, end_period, fv, pmt_type) {
  let r = parseFloat(rate || 0);
  let n = parseInt((periods || 0), 10);
  let s0 = parseFloat(start_amount || 0);
  let i = parseInt(start_period || 1) - 1;
  let j = parseInt(end_period || n);
  let sn = parseFloat(fv || 0);

  if (r === 0 || n === 0) {
    return - (sn + s0) / n * (j - i);
  }

  let q = (1 + r);
  let qt = !!pmt_type ? q : 1;
  let qti = i ? qt : 1;
  let qn = Math.pow(q, n);
  let qi = Math.pow(q, i);
  let qj = Math.pow(q, j);
  let p_ = (s0 * qn + sn) / (1 - qn) / qt;

  return s0 * (qj / qt - qi / qti) + p_ * (qj - qi);
}
