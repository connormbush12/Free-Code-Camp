const arr = [];
function rangeOfNumbers(startNum, endNum) {
  if(startNum > endNum) {
    return arr
  }
  arr.push(startNum)
  return rangeOfNumbers(startNum+1, endNum);
};
