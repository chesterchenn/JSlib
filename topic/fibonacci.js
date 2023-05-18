/**
 * 求斐波那契数列第 n 项的值，1、1、2、3、5、8、13、21、34...。
 * @param {number} n 第 n 项
 * @return {number} 斐波那契数列第 n 项的值
 */

// 递归，时间复杂度高，待优化
const fibonacci = function (n) {
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// 使用尾递归，大幅度降低复杂度
const fibonacci_tail_call = function (n, pre = 1, cur = 1) {
  if (n <= 1) return cur;
  return fibonacci_tail_call(n - 1, cur, pre + cur);
};
