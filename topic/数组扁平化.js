/**
 * 数组扁平化，给定数组 [1, 2, [3, 4, [5]]]，进行扁平化[1, 2, 3, 4, 5]
 * @param {Array} arr 需要扁平化的数组
 * @return {Array} 扁平化后的数组 
 */

//=================
// 利用 Array.flat
//================
arr.flat(Infinity);

//===================
// 利用 reduce 和递归
//===================
var flat = function(arr) {
  return arr.reduce(function(acc, val) {
    return acc.concat(Array.isArray(acc) > 0 ? flat(val) : val);
  }, [])
}