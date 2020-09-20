/**
 * 求斐波那契数列第 n 项的值，1、1、2、3、5、8、13、21、34...。
 * 定义如下：F(1)=1，F(2)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 3，n ∈ N*）
 * @param {number} n 第 n 项
 * @return {number} 斐波那契数列第 n 项的值
 */

const fibonacci = function(n) {
  if (n == 1 || n == 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}