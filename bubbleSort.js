import swap from './swap'
/*
 * 冒泡排序
 * 稳定排序，时间复杂度O(n^2)
 * @param {array} 数组
 * @return {array} 数组
 */

/*
 * 冒泡排序的简易用法
 */
var BubbleSort = function(array) {
  var len = array.length
  for(var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (array[i] > array[j]) {
        array = swap(array, i, j)
      }
    }
  }
  return array
}

/*
 * 标准的冒泡排序
 */
var BubbleSort = function(array) {
  var len = array.length
  for (var i = 0; i < len - 1; i++) {
    for (var j = len - 1; j >= i; j--) {
      if (array[j] > array[j+1]) {
        array = swap(array, j, j+1)
      }
    }
  }
  return array
}

/*
 * 增加flag
 */
var BubbleSort = function(array) {
  var len = array.length
  var flag = true
  for (var i = 0; i < (len - 1) && flag; i++) {
    flag = false
    for (var j = len - 1; j >= i; j--) {
      if (array[j] > array[j+1]) {
        array = swap(array, j, j+1)
        flag = true
      }
    }
  }
  return array
}
