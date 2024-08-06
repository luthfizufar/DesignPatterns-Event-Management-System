class Event {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  reset(title, date) {
    this.title = title;
    this.date = date;
  }
}

class EventPool {
  constructor() {
    this.availableEvents = [];
  }

  createEvent(title, date) {
    if (this.availableEvents.length > 0) {
      const event = this.availableEvents.pop();
      event.reset(title, date);
      return event;
    } else {
      return new Event(title, date);
    }
  }

  releaseEvent(event) {
    this.availableEvents.push(event);
  }
}

module.exports = EventPool;
