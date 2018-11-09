/**
 * 将_命名的字符串转化成驼峰法
 * @param {string} str 带_字符串
 * @return 驼峰字符串
 */
function _2camelCase(str) {
  try {
    if (typeof str !== 'string') {
      throw 'This is not String.';
    }

    var temp = str.split("_");
    for (var i = 1, len = temp.length; i < len; i++) {
      temp[i] = temp[i][0].toUpperCase() + temp[i].substring(1);
    }
    var result = temp.join('')
    return result;
  } catch (error) {
    console.error(error)
  }
}