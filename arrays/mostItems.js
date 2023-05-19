// 找出数组中出现次数最多的一项及这一项出现了多少次

// 使用 Map 记录
function mostItem(arr) {
  let most,
    counter = 0;
  let m = new Map();
  arr.forEach((i) => {
    m.set(i, m.has(i) ? m.get(i) + 1 : 1);
  });
  m.forEach((v, k) => {
    if (v > counter) {
      most = k;
      counter = v;
    }
  });
  return [most, counter];
}

console.log(mostItem([1, 2, 1, 2, '1', '1', '2', '2', 1, '2', '2', 4, 5, 6]));
