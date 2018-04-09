/*
 * 格式化年月日时分
 * @param {number} timeStamp
 * @return {string} yyyy-mm-dd hh:mm:ss
 */

function formatYMDHM(timeStamp) { 
  var num = Number(timeStamp)
  if (isNaN(num)) {
    console.log('param is not a number')
    return 
  }
  var date = new Date(num * 1000)
  var year = date.getFullYear()
  var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  var minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

  return (year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + seconds)
}