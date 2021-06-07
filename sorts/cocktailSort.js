import swap from './swap';

/**
 * 鸡尾酒排序，定向冒泡排序
 * @param {Array} arr 进行排序的数组
 */

var cocktailSort = function (arr) {
  var swapped = true;
  var start = 0;
  var end = arr.length - 1;
  
  while (swapped) {
    swapped = false;
    for (var i = start; i < end; i++) {
      if (arr[i] > arr[i+1]) {
        swap(arr[i], arr[i+1]);
        swapped = true;
      }
    }
    if (!swapped) break;
    swapped = false;
    end--;
    for (var j = end - 1; j >= start; j--) {
      if (arr[j] > arr[j+1]) {
        swap(arr[j], arr[j+1]);
        swapped = true;
      }
    }
    start++;
  }
}