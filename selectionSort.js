import swap from './swap'
/*
 * 选择排序
 * @param {array} 数组
 * @return {array} 数组
 */

var selectionSort = function(arr) {
  var len = arr.length, min
  for(var i = 0; i < len; i++) {
    min = i
    for(var j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    swap(arr, i, min)
  }
  return arr
}