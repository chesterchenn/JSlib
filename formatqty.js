/**
 * 格式化千分位
 */
const formatqty = (number, precise, qty) => {
  qty = qty || ',';
  const num = Number(number);
  const negative = num < 0 ? '-' : '';
  if (number === '' || isNaN(num)) return number;
  const i = `${Math.abs(parseInt(String(num), 10))}`;

  const tail = String(Math.abs(num)).slice(i.length);
  let j = i.length > 3 ? i.length % 3 : 0;
  return (
    negative +
    (j ? i.substr(0, j) + qty : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${qty}`) +
    (precise ? Number(tail).toFixed(precise).slice(1) : tail)
  );
};
module.exports = formatqty;
