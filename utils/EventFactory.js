const EventAbstractFactory = require('../src/creational/AbstractFactory/AbstractFactory');

class EventFactory {
  static createEvent(type, title, date) {
    const factory = new EventAbstractFactory();
    const eventFactory = factory.createEventFactory();
    return eventFactory.createEvent(type, title, date);
  }
}

module.exports = EventFactory;
