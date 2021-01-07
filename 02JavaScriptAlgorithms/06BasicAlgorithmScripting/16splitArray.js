//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  const bigArray = [];
  while(arr.length > 0) {
    for (let i=0; i<arr.length / size; i++) {
      const array = [];
      while(array.length < size && arr.length > 0) {
        array.push(arr[0])
        arr.shift();
      }
      bigArray.push(array)
    }
  }  
  return bigArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);