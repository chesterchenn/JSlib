/*
 * 自底向上的归并排序
 * @param {array} 进行排序的数组
 * @return {array} 排序后的数组
 */
var MergeSort = function(arr) {
  var arrCopy = []
   /*
    * 原地归并的方法
    * @param {array} 要归并的数组
    * @param {number} 数组起始位置
    * @param {number} 数组中间位置
    * @param {number} 数组结束位置
    * @return {array} 归并后的数组
    */
  var merge = function(a, low, mid, high) {
    for(var k = low; k <= high; k++) {
      arrCopy[k] = a[k]
    }
    var i = low, j = mid + 1
    for (var k = low; k <= high; k++) {
      if (i > mid)                      a[k] = arrCopy[j++]  // 左半边用尽(取右半边的元素)
      else if (j > high)                a[k] = arrCopy[i++]  // 右半边用尽(取左半边的元素)
      else if (arrCopy[i] <= arrCopy[j]) a[k] = arrCopy[i++]  // 左半边的当前元素小于右半边的当前元素(取左半边的当前元素)
      else                              a[k] = arrCopy[j++]  // 右半边的当前元素小于左半边的当前元素(取右半边的当前元素)
    }
    return a
  }
  
  var len = arr.length
  for(var size = 1; size < len; size = size * 2) {
    for (low = 0; low < len - size; low += size * 2) {
      merge(arr, low, low + size - 1, Math.min(low + size * 2 - 1, len - 1))
    }
  }
}

/*
 * 自顶向下的归并排序
 * @param {array} 进行排序的数组
 * @return {array} 排序后的数组
 */

var MergeSort = function(arr) {
  var arrCopy = []    //一次性声明
   /*
    * 原地归并的方法
    * @param {array} 要归并的数组
    * @param {number} 数组起始位置
    * @param {number} 数组中间位置
    * @param {number} 数组结束位置
    * @return {array} 归并后的数组
    */
  var merge = function(a, low, mid, high) {
    for(var k = low; k <= high; k++) {
      arrCopy[k] = a[k]
    }
    var i = low, j = mid + 1
    for (var k = low; k <= high; k++) {
      if (i > mid)                      a[k] = arrCopy[j++]  // 左半边用尽(取右半边的元素)
      else if (j > high)                a[k] = arrCopy[i++]  // 右半边用尽(取左半边的元素)
      else if (arrCopy[i] <= arrCopy[j]) a[k] = arrCopy[i++]  // 左半边的当前元素小于右半边的当前元素(取左半边的当前元素)
      else                              a[k] = arrCopy[j++]  // 右半边的当前元素小于左半边的当前元素(取右半边的当前元素)
    }
    return a
  }

  var sort = function(a, low, high) {
    if (high <= low) return;
    var mid = low + (~~((high - low) / 2))
    sort(a, low, mid)         // 将左半边排序
    sort(a, mid + 1, high)    // 将右半边排序
    merge(a, low, mid, high)  // 归并结果
  }
  sort(arr, 0, arr.length - 1)
  return arr
}