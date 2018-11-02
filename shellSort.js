/**
 * 希尔排序 ShellSort
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
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }
  return;
};
