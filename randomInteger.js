/*
 * 随机生成整数
 * @param {number} 指定生成的个数
 * @param {number} 生成数的范围，默认为100
 * @param {boolean} 生成的数字是否不重复，默认为否
 * @return {array} 返回生成的整数组
 */

var randomInt = function(num, range = 100, flag = false) {
  // 判断在不重复的情况下，指定个数是否超过范围数
  if (flag && num > range) {
    return 'Error: 在不重复条件下，指定的个数不得超出范围数'
  }

  var arr = [], i = 0
  while(i < num) {
    var val = ~~(Math.random() * range)
    flag && arr.includes(val)  ? '' : (arr.push(val), i++)
  }
  return arr
}