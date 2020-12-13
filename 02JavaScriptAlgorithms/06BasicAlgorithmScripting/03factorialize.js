function factorialize(num) {
  let product = 1
  while (num > 0) {
    product *= num
    num--;
  }
  return product;
}

factorialize(5);
