/**
 * 随机生成整数
 * @param {number} count 个数, 默认为10
 * @param {number} range 范围，默认为100
 * @param {boolean} flag 是否允许重复，默认为否
 * @return {Array} 返回生成的数组
 */

var randomInt = function(count = 10, range = 100, flag = false) {
  try {
    if (flag && count > range) {
      throw '在指定不重复条件下，指定的个数不得超出范围数'
    }
    
    var arr = [], i = 0
    while(i < count) {
      var val = ~~(Math.random() * range)
      if (flag || !(flag || arr.includes(val))) {
        arr.push(val);
        i++;
      }
    }
    return arr
  }
  catch (e) {
    console.error(e)
  }
}