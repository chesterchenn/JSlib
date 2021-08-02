// 使用 JavaScript 实现的单链表

/*
 * 用类模拟结点
 * data 当前结点值
 * next 指向下一个结点
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class sll {
  constructor() {
    this.head = null;
  }

  push(node) {
    var newNode = new Node(node);
    newNode.next = this.head;
    this.head = newNode;
  }

  print() {
    while (this.head !== null) {
      console.log(this.head.data);
      this.head = this.head.next;
    }
  }
}
