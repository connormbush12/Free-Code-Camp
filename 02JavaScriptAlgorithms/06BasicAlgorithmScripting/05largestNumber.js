function largestOfFour(arr) {
  let biggestArr = [];
  for (let sub of arr) {
    const biggestNum = sub.reduce((accumulator, num) => {
      return Math.max(accumulator, num)
    })
  biggestArr.push(biggestNum)
  }
  return biggestArr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);