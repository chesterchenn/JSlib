// 从某个数值数组中，获取最小正数（非零非负数）的索引值

function findMinItemIndex(arr) {
  let min = Infinity,
    index = -1;
  arr.forEach((v, i) => {
    if (v > 0 && v < min) {
      min = v;
      index = i;
    }
  });
  return index;
}

console.log(findMinItemIndex([11, 8, 3, 2, 5]));
console.log(findMinItemIndex([11, 8, 3, -2, 0]));
