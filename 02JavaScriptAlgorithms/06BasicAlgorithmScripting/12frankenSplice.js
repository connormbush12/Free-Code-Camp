function frankenSplice(arr1, arr2, n) {
    let num = n;
    let newArr = [...arr2];
    for (let ele of arr1) {
      newArr.splice(num, 0, ele)
      num++;
    }
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);