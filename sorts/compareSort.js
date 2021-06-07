import randomInt from './randomInt';
import moment from 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js';

/**
 * 比较数组排序耗时
 * @param {number} loop 循环测试次数
 */

var compareSort = function(loop = 3) {
  var start, end;

  for (var i = 0; i < loop; i++) {
    start = moment().valueOf();
    var arr = randomInt();                        // 可指定个数，范围，是否重复
    var arrCopy = arr.slice();                    // 拷贝数组
    end = moment().valueOf();
    console.log('生成数组：', end - start, 'ms');

    // start = moment().valueOf();
    // 排序
    // end = moment().valueOf();
    // console.log('排序名称：', end - start, 'ms');
  }
}