/**
 * 希尔排序 ShellSort
 * @param {Array} arr 进行排序的数组
 */

var shellSort = function(arr) {
  var len = arr.length;
  // 增量序列的递减
  for (var gap = ~~(len / 2); gap > 0; gap = ~~(gap / 2)) {
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
