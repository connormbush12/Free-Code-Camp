function truncateString(str, num) {
  let newStr = str.slice(0, num)
  if (newStr !== str) {
    newStr += '...'
  }
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);