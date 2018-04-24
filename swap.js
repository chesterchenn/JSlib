/* 
 * 交换数组元素(排序)
 * @param {array} array
 * @param {number} position
 * @param {number} position
 * @return {array} 交换后的数组
 */

function swap(array, prior, next) {
  var temp = array[prior]
  array[prior] = array[next]
  array[next] = temp
  return array
}