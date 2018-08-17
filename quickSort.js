var partition = function(arr, low, high) {
  var i = low, j = high + 1
  var compare = arr[low]
  while(true) {
    while(arr[++i] < compare) if (i === high) break
    while(compare < arr[--j]) if (j === low) break
    if (i >= j) break
    swap(arr, i, j) 
  }
  swap(arr, low, j)
  return j
}

var quickSort = function(arr) {
  var sort = function(a, low, high) {
    if (high <= low) return;
    var j = partition(a, low, high)
    sort(a, low, j - 1)
    sort(a, j + 1, high)
  }
  sort(arr, 0, arr.length - 1)
  // console.log(arr)
  return arr
}