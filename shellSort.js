import swap from './swap';

/**
 * 希尔排序  
 * 针对有序序列在插入时采用交换法
 * @param {Array} arr 进行排序的数组
 */
var shellSort = function(arr) {
  var len = arr.length;
  // 设置增量gap,并逐步递减增量
  for (var gap = ~~(len / 2); gap > 0; gap = ~~(gap / 2)) {
    // 从第gap个元素，逐个对其所在组进行直接插入排序操作
    for (var i = gap; i < len; i += 1) {
      var minIndex = i;
      while (minIndex >= gap && arr[minIndex] < arr[minIndex - gap]) {
        // 插入排序采用交换法
        swap(arr[minIndex], arr[minIndex-gap]);
        minIndex -= gap;
      }
    }
  }
  return;
}


/**
 * 希尔排序 
 * 针对有序序列在插入时采用移动法
 * @param {Array} arr 进行排序的数组
 */

var shellSort = function(arr) {
  var len = arr.length;
  // 设置增量gap,并逐步递减增量
  for (var gap = ~~(len / 2); gap > 0; gap = ~~(gap / 2)) {
    // 从第gap个元素，逐个对其所在组进行直接插入排序操作
    for (var i = gap; i < len; i += 1) {
      var temp = arr[i];
      for (var j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        // 移动法
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }
  return;
};
