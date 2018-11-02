import swap from './swap'
/**
 * 选择排序
 * @param {Array} arr 数组
 */

var selectionSort = function(arr) {
  var len = arr.length, min;
  for(var i = 0; i < len; i++) {
    minIndex = i;
    for(var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return;
}