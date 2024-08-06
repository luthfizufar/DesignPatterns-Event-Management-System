class Caretaker {
    constructor() {
      this.mementos = [];
    }
  
    addMemento(memento) {
      this.mementos.push(memento);
    }
  
    getMemento(index) {
      return this.mementos[index];
    }
  }
  
  module.exports = Caretaker;
  