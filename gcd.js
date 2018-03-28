/*
 * 辗转相除法得出最大公约数
 * @param {number} p
 * @param {number} q
 * @return {number} result
 * @author chesterchenn
 * 
 */

function gcd(p, q) {
  if (q == 0) return p
  var r = p % q
  return gcd(q, r)
}
