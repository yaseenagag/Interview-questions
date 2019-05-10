function miniMaxSum(arr) {
  let maximum = Math.max(...arr);
  let minimum = Math.min(...arr);
  let reducedArr = arr.reduce((x, y) => x + y);
  let max = reducedArr - maximum
  let min = reducedArr - minimum

  console.log(max, min)

}

miniMaxSum([5,5,5,5,5])

/*Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.Then print the respective minimum and maximum values as a single line of two space - separated long integers.

For example, arr = [1,3,5,7,9] .Our minimum 1+3+5+7=16 sum is  and our maximum sum is 3+5+7+9 = 24 .We would print

16 24*/