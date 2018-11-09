/**
 * 堆排序
 * @param {Array} arr 进行排序的数组
 */
var heapSort = function(arr) {
  buildHeap(arr, arr.length - 1)                // 建立最大堆
  for (var i = arr.length - 1; i > 0; i--) {
    var temp = arr[0];                          // 交换最大堆的根节点和尾节点
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(arr, 0, i - 1);                     // 调整最大堆arr[0, i-1]
  }
}

/**
 * 建立最大堆MaxHeap
 * @param {Array} arr 要建立最大堆的数组
 * @param {number} hi 建立最大堆的结束位置
 */
var buildHeap = function(arr, hi) {
  for (var i = ~~(hi / 2 - 1);i >= 0; i--) {
    heapify(arr, i, hi);
  }
}

/**
 * 最大堆调整heapify, 递归法
 * @param {Arra} arr 要进行调整的最大堆
 * @param {*} lo 调整最大堆的起始位置
 * @param {*} hi 调整最大堆的结束位置
 */
var heapify = function(arr, lo, hi) {
  var maxIndex = lo;
  var l = 2 * lo + 1;
  var r = 2 * lo + 2;
  if (l <= hi && arr[l] > arr[maxIndex]) {
    maxIndex = l;
  }
  if (r <= hi && arr[r] > arr[maxIndex]) {
    maxIndex = r;
  }
  if (maxIndex != lo) {
    var temp = arr[lo];
    arr[lo] = arr[maxIndex];
    arr[maxIndex] = temp;
    heapify(arr, maxIndex, hi);
  }
}

/**
 * 最大堆调整heapify, 循环迭代法
 * @param {Arra} arr 要进行调整的最大堆
 * @param {*} lo 调整最大堆的起始位置
 * @param {*} hi 调整最大堆的结束位置
 */
var heapify = function(arr, lo, hi) {
  var temp = arr[lo];
  for (var j = 2 * lo + 1; j <= hi; j = j * 2 + 1) {
    if (j < n && arr[j] < arr[j+1]) j++;
    if (!(temp < arr[j])) break;
    arr[lo] = arr[j]
    lo = j
  }
  arr[lo] = temp;
}