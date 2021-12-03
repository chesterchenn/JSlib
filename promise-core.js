// fork from https://github.com/then/promise/blob/master/src/core.js
// 个人笔记
// 这里只实现了 promise 和 then 方法
// Promise.resolve，Promise.all，Promise.reject 和 Promise.prototype.catch 请查看 es6-extensions

'use strict';

var asap = require('asap/raw');

function noop() {}

// 状态
// 0 - pending 等待
// 1 - fulfilled with _value 带有 _value 值的完成状态
// 2 - rejected with _value 带有 _value 值的拒绝状态
// 3 - adopted the state of another promise, _value 采用另外的 promise 状态和 _value 值

var LAST_ERROR = null;
var IS_ERROR = {};

function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallTwo(fn, a, b) {
  try {
    return fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promise must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError("Promise constructor's argument is not a function");
  }
  this._deferredState = 0;
  this._state = 0;
  this._value = null;
  this._defereds = null;
  if (fn === noop) return;
  doResolve(fn, this);
}

Promise._onHandle = null;
Promise._onReject = null;
Promise._noop = null;

Promise.prototype.then = function (onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

// 当 then 的构造函数不是 Promise 时，使用 safeThen 函数
function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}

function handle(self, deferred) {
  // ? 没有终止条件，当 state === 3 时，不是一直循环执行
  while (self._state === 3) {
    self = self._value;
  }
  if (Promise._onHandle) {
    Promise._onHandle(self);
  }
  if (self._state === 0) {
    if (self._deferredState === 0) {
      self._deferredState = 1;
      self._defereds = deferred;
      return;
    }
    if (self._deferredState === 1) {
      self._deferredState = 2;
      self._defereds = [self._defereds, deferred];
      return;
    }
    self._defereds.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function () {
    var cb = self._state === 1 ? deferred.onFulfilled : onRejected;
    if (cb === null) {
      if (self._state === 1) {
        resolve(deferred.promise, self._value);
      } else {
        reject(deferred.promise, self._value);
      }
      return;
    }
    var ret = tryCallOne(cb, self._value);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}

// Promise 执行 resolve 函数
function resolve(self, newValue) {
  if (newValue === self) {
    return reject(self, new TypeError('A promise cannnot be resolved with itself.'));
  }
  if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (then === self.then && newValue instanceof Promise) {
      self._state = 3;
      self._value = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._state = 1;
  self._value = newValue;
  finale(self);
}

// Promise 执行 reject 函数
function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  if (Promise._onRejected) {
    Promise._onRejected(self, newValue);
  }
  finale(self);
}

function finale(self) {
  if (self._deferredState === 1) {
    handle(self, self._defereds);
    self._defereds = null;
  }
  if (self._deferredState === 2) {
    for (var i = 0; i < self._defereds.length; i++) {
      handle(self, self._defereds[i]);
    }
    self._defereds = null;
  }
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

// 执行 Promise 函数
// new Promise((resolve, reject) => {})
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(
    fn,
    function (value) {
      if (done) return;
      done = true;
      resolve(promise, value);
    },
    function (reason) {
      if (done) return;
      done = true;
      reject(promise, reason);
    }
  );
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}
