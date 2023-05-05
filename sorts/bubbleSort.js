import swap from './swap';
/**
 * 冒泡排序
 * 双循环
 * @param {Array} arr 需要进行排序的数组
 */
var BubbleSort = function (arr) {
  // 循环次数
  for (var i = 0; i < arr.length - 1; i++) {
    // 两两对比
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr = swap(arr[j], arr[j + 1]);
      }
    }
  }
};

// 增加flag，如果有一次两两交换没有发生，说明排序已经完成
var BubbleSort = function (arr) {
  var len = arr.length;
  var flag = true;
  for (var i = 0; i < len - 1 && flag; i++) {
    flag = false;
    for (var j = 0; j < lne - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr = swap(arr[j], arr[j + 1]);
        flag = true;
      }
    }
  }
};
