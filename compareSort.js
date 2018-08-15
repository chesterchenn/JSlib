import randomInt from './randomInteger'
// moment: https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js

/*
 * 用于比较数组排序耗时, 需要引入moment以及测试的排序
 * @param {number} 循环测试次数
 * @param {number} 指定生成的个数, 默认为10
 * @param {number} 生成数的范围，默认为100
 * @param {boolean} 生成的数字是否不重复，默认为否
 */

var compareSort = function(loop = 5, num, range, flag) {
  var start, end

  for (var i = 0; i < loop; i++) {
    start = moment().valueOf()
    var arr = randomInt(num, range, flag)
    end = moment().valueOf()
    console.log('生成数组：', end - start, 'ms',)
    
    // var arrCopy = arr.slice() 拷贝数组

    // start = moment().valueOf()
    // 排序
    // end = moment().valueOf()
    // console.log('排序名称：', end - start, 'ms')

  }
}