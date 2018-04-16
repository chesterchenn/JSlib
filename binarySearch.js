/*
 * 二分查找/折半查找
 * 重要前提：只针对有序排列
 * @param {array} arr被检索的数组
 * @key {number} key检索的值
 * @return {number,boolean} position or false
 */

function binarySearch(arr, key) {
  var low = 0
  var high = arr.length - 1
  var mid
  while (low <= high) {
    mid = Math.ceil((low + high) / 2)
    if (key < arr[mid]) {
      high = mid - 1
    } else if (key > arr[mid]) {
      low = mid + 1
    } else {
      return mid
    }
  }
  return false
}