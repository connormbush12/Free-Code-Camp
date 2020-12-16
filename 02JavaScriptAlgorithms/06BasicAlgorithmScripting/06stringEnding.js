function confirmEnding(str, target) {
  const arr = str.split(' ')
  const last = arr[arr.length-1];
  const lastArr = last.split('')
  const tarArr = target.split('');
  for (let i=0; i<tarArr.length; i++) {
    if(tarArr[i] !== lastArr[lastArr.length - (tarArr.length-i)]) {
      return false
    }
  }
  return true;
}

confirmEnding("Bastian", "n");