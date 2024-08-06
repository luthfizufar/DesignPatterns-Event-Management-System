class Participant {
  constructor(name) {
    this.name = name;
  }
}

class EventParticipantFactory {
  constructor() {
    this.participants = {};
  }

  getParticipant(name) {
    if (!this.participants[name]) {
      this.participants[name] = new Participant(name);
    }
    return this.participants[name];
  }

  getTotalParticipants() {
    return Object.keys(this.participants).length;
  }
}

module.exports = EventParticipantFactory;
