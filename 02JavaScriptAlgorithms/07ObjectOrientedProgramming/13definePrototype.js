function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat() {
      console.log('nom, nom')
    },
    describe() {
      console.log('who let me out???')
    }
  };