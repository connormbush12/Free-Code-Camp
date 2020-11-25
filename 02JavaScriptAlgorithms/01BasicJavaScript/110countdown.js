// Only change code below this line
const arr = []
function countdown(n){
  if(n < 1) {
    return arr;
  }
  arr.push(n)
  return countdown(n-1);
}
// Only change code above this line
