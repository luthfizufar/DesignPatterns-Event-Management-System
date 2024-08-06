class Participant {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }

  send(message) {
    if (this.mediator) {
      this.mediator.send(message, this);
    }
  }

  receive(message) {
    console.log(`${this.name} received: ${message}`);
  }
}

module.exports = Participant;
