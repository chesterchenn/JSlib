/**
 * 格式化千分位
 */
function formatqty(number, qty) {
  const num = Number(number);
  if (number === '' || isNaN(num)) return number;
  const i = `${Math.abs(parseInt(String(num), 10))}`;

  const negative = num < 0 ? '-' : '';
  const tail = String(Math.abs(num)).slice(i.length);
  let j = i.length > 3 ? i.length % 3 : 0;
  return (
    negative +
    (j ? i.substr(0, j) + qty : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${qty}`) +
    tail
  );
}

console.log(formatqty(12345.01, ','));
console.log(formatqty(12345, ','));
console.log(formatqty(12345678, ','));
console.log(formatqty(123, ','));
console.log(formatqty(0, ','));
console.log(formatqty(0.123, ','));
console.log(formatqty(-0.123, ','));
console.log(formatqty(-123, ','));
console.log(formatqty(-12345.01, ','));
console.log(formatqty(-12345678, ','));
console.log(formatqty('', ','));
console.log(formatqty('1234', ','));
console.log(formatqty('abc', ','));
