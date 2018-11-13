import swap from './swap';

/**
 * 快速排序 
 * quickSort(arr, 0, arr.length - 1)
 * @param {Array} arr 进行排序的数组
 * @param {number} lo 起始位置
 * @param {number} hi 结束位置
 */ 
var quickSort = function(arr, lo, hi) {
  if (lo < hi) {
    var p = partition(arr, lo, hi);
    quickSort(arr, lo, p - 1);        // 对左半部排序
    quickSort(arr, p + 1, hi);        // 对右半部排序
  }
  return;
}


/**
 * 快速排序的切分
 * @param {Array} arr 切分的数组
 * @param {number} lo 切分数组的起始位置
 * @param {number} hi 切分数组的结束位置
 * @return {number} 返回切分位置
 */

// 左右指针，从左右两边往中间扫描
// 枢轴元素指定为左边第一个元素
var partition = function(arr, lo, hi) {            
  var pivot = arr[lo];           // 枢轴元素
  while(lo < hi) {
    while(lo < hi && arr[hi] >= pivot) hi--;
    if (lo < hi) {
      arr[lo++] = arr[hi];
    }
    while(lo < hi && arr[lo] <= pivot) lo++;
    if (lo < hi) {
      arr[hi--] = arr[lo];
    }
  }
  arr[lo] = pivot;                 // 将枢轴元素放入正确的位置
  return hi;
}

// 指针从左往右扫描
// 枢轴元素指定为右边第一个元素
var partition = function(arr, lo, hi) {
  var pivot = arr[hi];
  var i = lo;
  for (var j = lo; j < hi; j++) {
    if (arr[j] < pivot) {
      if (i !== j) {
        swap(arr[i], arr[j])
      }
      i++;
    }
  }
  swap(arr[i], arr[j]);               // 将枢轴元素放入正确的位置
  return i;
}
