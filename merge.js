/*
 * 原地归并的抽象方法
 * @param {array} 要归并的数组
 * @param {number} 数组起始位置
 * @param {number} 数组中间位置
 * @param {number} 数组结束位置
 * @return {array} 归并后的数组
 */ 

var merge = function(arr, low, mid, high) {
  var i = low, j = mid + 1
  var arrCopy = arr.slice()      // 复制元素
  for (var k = low; k <= high; k++) {
    if (i > mid)                      arr[k] = arrCopy[j++]  // 左半边用尽(取右半边的元素)
    else if (j > high)                arr[k] = arrCopy[i++]  // 右半边用尽(取左半边的元素)
    else if (arrCopy[i] < arrCopy[j]) arr[k] = arrCopy[i++]  // 左半边的当前元素小于右半边的当前元素(取左半边的当前元素)
    else                              arr[k] = arrCopy[j++]  // 右半边的当前元素小于左半边的当前元素(取右半边的当前元素)
  }
  return arr
}