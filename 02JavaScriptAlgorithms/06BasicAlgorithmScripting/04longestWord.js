function findLongestWordLength(str) {
    return str.split(' ').reduce((accumulator, word) => {
      return Math.max(accumulator, word.length)
    }, 0)
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  