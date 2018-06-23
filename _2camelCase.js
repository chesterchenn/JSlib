/*
 * 将_命名的字符串转化成驼峰法,非字符串直接返回原先
 * @param {string} _字符串
 * @return {string} 驼峰法字符串
 */
function _2camelCase(str) {
  if (typeof str !== 'string') {
    return str
  }
  var temp = str.split("_")
  for (var i = 1, len = temp.length; i < len; i++) {
    temp[i] = temp[i][0].toUpperCase() + temp[i].substring(1)
  }
  var result = temp.join('')
  return result
}