/**
 * @param {Array} arr 需要去重的数组
 * @return {Array} 去重后的新数组
 */

//============== 
// 利用 Set
//==============
var uniques = function(arr) {
  return [...new Set(arr)];
}

//=========================================================
// 利用 filter，主要是利用indexOf 和 当前index是否符合特性
//========================================================
var uniques = function(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  })
}

//============================
// 利用 ES6 的 Array.includes
//============================
var uniques = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
