/**
 * 辗转相除法得出最大公约数
 * @param {number} p 整数
 * @param {number} q 整数
 * @return {number} 最大公约数
 */

function gcd(p, q) {
  if (q === 0) return p
  var r = p % q
  return gcd(q, r)
}
