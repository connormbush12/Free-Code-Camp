//Gives index of a number once the array is sorted
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a,b) => {
    return a-b;
  })
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);