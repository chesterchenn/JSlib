/**
 * 二分查找/折半查找
 * @param {Array} arr 被检索的数组
 * @param {number} key 检索的值
 * @return 若检索到，返回相应的位置，否则返回false
 */

function binarySearch(arr, key) {
  var low = 0, high = arr.length - 1;
  var mid;
  while (low <= high) {
    mid = low + ~~((high - low) / 2);       // 防止溢出，等同(low + high) / 2
    if (key < arr[mid]) {
      high = mid - 1;
    } else if (key > arr[mid]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return false;
}