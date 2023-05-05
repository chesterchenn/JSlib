/**
 * 快速排序
 * @param {Array} arr 进行排序的数组
 */

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  arr.forEach((item, index) => {
    if (index === 0) return;
    if (item < pivot) {
      leftArr.push(item);
    } else {
      rightArr.push(item);
    }
  });

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

const a = [1, 8, 3, 18, 12, 10, 11];
const b = [88, 17, 19, 29, 1, 30];

const qsa = quickSort(a);
const qsb = quickSort(b);
console.log(qsa);
console.log(qsb);
