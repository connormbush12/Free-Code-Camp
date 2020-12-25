//Capitalize the first letter of each word and make sure all of the following letters are all lower case

function titleCase(str) {
    const newString = str.toLowerCase();
    const words = newString.split(' ')
    let newWords = []
    for(let word of words) {
      let upper = word[0].toUpperCase()
      let newWord = word.replace(word[0], upper)
      newWords.push(newWord);
    }
    return newWords.join(' ')
  }
  
  titleCase("I'm a little tea pot");