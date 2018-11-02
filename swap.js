/** 
 * 交换数组元素
 * @param {Array} arr 执行操作的数组
 * @param {number} prior 数组的前一个位置
 * @param {number} next 数组的后一个位置
 * @return {Array} 交换后的数组
 */

var swap = function(arr, prior, next) {
  var temp = arr[prior]
  arr[prior] = arr[next]
  arr[next] = temp
  return arr
}