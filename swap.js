/* 
 * 交换数组元素
 * @param {array} 执行操作的数组
 * @param {number} 数组的前一个位置
 * @param {number} 数组的后一个位置
 * @return {array} 交换后的数组
 */

var swap = function(array, prior, next) {
  var temp = array[prior]
  array[prior] = array[next]
  array[next] = temp
  return array
}