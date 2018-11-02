import swap from './swap'
/**
 * 冒泡排序
 * @param {Array} arr 需要进行排序的数组
 */

// 冒泡排序的简易用法
var BubbleSort = function(arr) {
  var len = arr.length
  for(var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        arr = swap(arr, i, j)
      }
    }
  }
  return;
}

// 标准的冒泡排序
var BubbleSort = function(arr) {
  var len = arr.length
  for (var i = 0; i < len - 1; i++) {
    for (var j = len - 1; j >= i; j--) {
      if (arr[j] > arr[j+1]) {
        arr = swap(arr, j, j+1)
      }
    }
  }
  return;
}

// 增加flag
var BubbleSort = function(arr) {
  var len = arr.length
  var flag = true
  for (var i = 0; i < (len - 1) && flag; i++) {
    flag = false
    for (var j = len - 1; j >= i; j--) {
      if (arr[j] > arr[j+1]) {
        arr = swap(arr, j, j+1)
        flag = true
      }
    }
  }
  return;
}
