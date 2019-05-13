function birthdayCakeCandles(ar) {
  let highest = Math.max(...ar);

  var count = ar.reduce(function (n, val) {
    return n + (val === highest);
  }, 0);
  console.log(count, 'count')
}

birthdayCakeCandles([3,1,4,5,4,5])