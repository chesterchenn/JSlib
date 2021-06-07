/**
 * 归并操作，用来归并两个有序数组，A[lo..mid], A[mid+1...hi]
 * @param {Array} arr 进行归并的数组
 * @param {number} lo 数组的起始位置
 * @param {number} mid 数组的中间位置
 * @param {number} hi 数组的结束位置
 */
var merge = function(arr, lo, mid, hi) {
  var temp = [];
  for (var i = lo; i <= hi; i++) {
    temp[i] = arr[i];
  }
  
  var j = mid + 1, i = lo;
  while (lo <= mid && j <= hi) {
    if (temp[lo] < temp[j]) {
      arr[i++] = temp[lo++];
    } else {
      arr[i++] = temp[j++];
    }
  }

  while (lo <= mid) {
    arr[i++] = temp[lo++]; 
  }

  while (j <= hi) {
    arr[i++] = temp[j++];
  }
}

/**
 * 自顶向下的归并排序
 * @param {Array} arr 进行排序的数组
 * @param {number} lo 数组中最低位
 * @param {number} hi 数组中最高位
 */
var mergeSort = function(arr, lo, hi) {
  if (lo < hi) {
    var mid = lo + ~~((hi - lo) / 2);
    mergeSort(arr, lo, mid);
    mergeSort(arr, mid + 1, hi);
    merge(arr, lo, mid, hi)
  }
}

/**
 * 自底向上的归并排序
 * @param {Array} 进行排序的数组
 */
var mergeSort = function(arr) {
  var hi = arr.length - 1;
  for (var step = 1; step < hi; step *= 2) {
    for (var i = 0; i < hi; i = i + 2 * step) {
      merge(arr, i, Math.min(i + step - 1, hi), Math.min(i + 2 * step - 1, hi))
    }
  }
}
