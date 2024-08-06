const { EventFactory } = require('../creational/AbstractFactory');

class EventCreation {
  createEvent(type, title, date) {
    const factory = new EventFactory();
    return factory.createEvent(type, title, date);
  }
}

module.exports = EventCreation;
