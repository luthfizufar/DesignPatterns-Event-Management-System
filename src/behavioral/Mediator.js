class EventMediator {
  constructor() {
    this.participants = [];
  }

  register(participant) {
    this.participants.push(participant);
    participant.mediator = this;
  }

  send(message, sender) {
    this.participants.forEach(participant => {
      if (participant !== sender) {
        participant.receive(message);
      }
    });
  }
}

module.exports = EventMediator;
