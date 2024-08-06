class Event {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
}

class Seminar extends Event {}
class Workshop extends Event {}
class Conference extends Event {}

class EventFactory {
  createEvent(type, title, date) {
    switch (type) {
      case 'seminar':
        return new Seminar(title, date);
      case 'workshop':
        return new Workshop(title, date);
      case 'conference':
        return new Conference(title, date);
      default:
        throw new Error('Unknown event type');
    }
  }
}

class EventAbstractFactory {
  createEventFactory() {
    return new EventFactory();
  }
}

module.exports = { Event, EventFactory, EventAbstractFactory };
