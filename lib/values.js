'use strict';

module.exports = exports = {
  pv: pv
}

/**
 * pv - calculates the present value of a loan or an investment, based on a constant interest rate.
 * You can use PV with either periodic, constant payments (such as a mortgage or other loan), or a
 * future value that's your investment goal.
 *
 * @param  {Number} rate         The interest rate per period.
 * @param  {Number} periods      The total number of payment periods in an annuity
 * @param  {Number} [pmt=0]      The payment made each period and cannot change over the life of the annuity.
 * @param  {Number} [fv=0]       The future value, or a cash balance you want to attain after the last payment is made.
 * <p><strong>WARNING</strong>: The MS Excel considers parameter `fv` as final payment that reduces
 * loan balance to zero. It means the sign of the `fv` should be the same as the
 * sign of payments.</p>
 * @param  {Number} [pmt_type=0] The number 0 or 1 and indicates when payments are due (0 - end of period).
 * @return {Number}              present value
 *
 * @see https://support.office.com/en-us/article/PV-function-23879d31-0e02-4321-be01-da16e8168cbd
 */
function pv(rate, periods, pmt, fv, pmt_type) {
  let r = parseFloat(rate || 0);
  let n = parseFloat(periods || 0);
  let p = parseFloat(pmt || 0);
  let f = parseFloat(fv || 0);

  if (r === 0) return p * n + fv;

  let q = 1 / (1 + r);
  let qn = Math.pow(q, n);

  let res = p * (1 - qn) / (q - 1) * (!!pmt_type ? 1 : q);
  return res - f * qn;

}
