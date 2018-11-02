import swap from './swap'
/**
 * 插入排序
 * @param {Array} arr 需要进行排序的数组
 */

var insertionSort = function(arr) {
  var len = arr.length;
  for (var i = 1; i < len; i++) {
    for (var j = i; j > 0 && arr[j] < arr[j-1]; j--) {
      swap(arr, j, j-1);
    }
  }
  return;
}