/*
 * 通过 javascript 实现数据结构 Array
 * @see https://www.geeksforgeeks.org/implementation-of-array-class-in-javascript/
 */

/*
 * data 存储数据
 * length 存储长度
 */
class Array_Implement {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  /** 实现数组的 push 方法 */
  push(ele) {
    this.data[this.length] = ele;
    this.length++;
    return this.data;
  }

  emptyErr() {
    if (this.length <= 0) {
      throw new Error('Array is Empty');
    }
  }

  /** 实现数组的 pop 方法 */
  pop() {
    try {
      this.emptyErr();
      delete this.data[this.length-1];
      this.length--;
      return this.data;
    } catch (e) {
      console.error(e);
    }
  }

  /** 实现数据的插入 */
  insertAt(ele, pos) {
    // 采用倒序，将数组的元素依次向后移一位
    for(let i = this.length; i >= pos; i--) {
      this.data[i] = this.data[i-1];
    }
    this.data[pos] = ele;
    this.length++;
    return this.data;
  }

  /** 实现数组的删除 */
  deleteAt(pos) {
    // 采用正序，从指定删除的位置将元素依次向前移动
    for (let i = pos; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  /** 获取指定位置的元素 */
  getAt(pos) {
    return this.data[pos];
  }
}

