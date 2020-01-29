var arr = [4, 600, 2, 10, 37];
function getMin(ppp) {
  var min;
min = Math.min.apply(null, ppp);
return min;
}
console.log(getMin(arr));