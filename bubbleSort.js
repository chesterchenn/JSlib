import swap from './swap'
/**
 * 冒泡排序
 * @param {Array} arr 需要进行排序的数组
 */

// 冒泡排序的简易用法
var BubbleSort = function(arr) {
  var len = arr.length;
  for(var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        arr = swap(arr, j, j+1);
      }
    }
  }
}

// 增加flag
var BubbleSort = function(arr) {
  var len = arr.length;
  var flag = true;
  for (var i = 0; i < (len - 1) && flag; i++) {
    flag = false;
    for (var j = 0; j < lne - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        arr = swap(arr, j, j+1);
        flag = true;
      }
    }
  }
}
