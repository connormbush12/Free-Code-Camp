//Function that checks if every letter in the second string of an array is contained in the first string in the array. Case-insensitive
function mutation(arr) {
  for (let letter of arr[1]) {
    if(!arr[0].toLowerCase().includes(letter.toLowerCase())) {
      return false
    }
  }
  return true
}

mutation(["hello", "hey"]);