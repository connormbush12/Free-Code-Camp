function repeatStringNumTimes(str, num) {
  let bigStr = '';
  for(let i=0; i<num; i++) {
    bigStr += str;
  }
  return bigStr;
}

repeatStringNumTimes("abc", 3);

/*Notes
Can't use concat because it doesn't change the original variable (bigStr)*/