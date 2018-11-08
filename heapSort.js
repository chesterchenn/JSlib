var heapify = function(arr, n, i) {
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;
  if (l < n && arr[l] > arr[largest]) {
    largest = l;
  }
  if (r < n && arr[r] > arr[largest]) {
    largest = r;
  }
  if (largest != i) {
    var ele = arr[i];
    arr[i] = arr[largest];
    arr[largest] = ele;
    heapify(arr, n, largest)
  }
}

var heapify = function(arr, i, n) {
  var temp = arr[i];
  for (var j = 2 * i + 1; i <= n; j = j * 2 + 1) {
    if (j < n && arr[j] < arr[j+1]) ++j;
    if (!(temp < arr[j])) break;
    arr[i] = arr[j]
    i = j
  }
  arr[i] = temp;
}

var buildHeap = function(arr, n) {
  for (var i = ~~(n / 2) - 1;i >= 0; i--) {
    heapify(arr, i, n);
  }
}


var heapSort = function(arr, n) {
  buildHeap(arr, n)
  // console.log(arr)
  for (var i = n; i > 0; i--) {
    var temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    console.log(arr)
    heapify(arr, 0, i - 1);
  }
}

var arr = [1, 3, 2, 4, 6, 7]
heapSort(arr, arr.length - 1)
console.log(arr);