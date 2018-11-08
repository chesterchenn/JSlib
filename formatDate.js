/**
 * 格式化年月日时分
 * @param {number} timeStamp
 * @return {string}
 */

function formatYMDHM(timeStamp) {
  try {
    if (isNaN(num)) {
      throw 'param is not a number';
    }
    var num = Number(timeStamp);
    var date = new Date(num * 1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return (year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + seconds);
  } catch (e) {
    console.error(e)
  }
  
}