/*
 * 快速排序
 * @param {array} 要排序的数组
 * @return {array} 排序后的数组
 */ 
var quickSort = function(arr) {
  var sort = function(a, low, high) {
    if (high <= low) return;
    var j = partition(a, low, high)
    sort(a, low, j - 1)        // 对左半部排序
    sort(a, j + 1, high)       // 对右半部排序 
  }
  sort(arr, 0, arr.length - 1)
  return arr
}

/*
 * 快速排序的切分
 * @param {array} 切分的数组
 * @param {number} 切分数组的起始位置
 * @param {number} 切分数组的结束位置
 * @return {number} 返回切分位置
 */

var partition = function(arr, low, high) {
  var i = low, j = high + 1      // 左右扫描指针
  var compare = arr[low]         // 切分元素
  while(true) {
    while(arr[++i] < compare) if (i === high) break
    while(compare < arr[--j]) if (j === low) break
    if (i >= j) break
    swap(arr, i, j) 
  }
  swap(arr, low, j)              // 将切分元素放入正确的位置
  return j                       // 达成 arr[lo...j-1] <= arr[j] <= arr[j+1...hi]
}
