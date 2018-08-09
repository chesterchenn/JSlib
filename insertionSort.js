import swap from './swap'
/*
 * 插入排序
 * @param {array} 数组
 * @return {array} 数组
 */

var insertionSort = function(arr) {
  var len = arr.length
  for (var i = 1; i < len; i++) {
    for (var j = i; j > 0 && arr[j] < arr[j-1]; j--) {
      swap(arr, j, j-1)
    }
  }
  return arr
}