const { Event, EventFactory, EventAbstractFactory } = require('../../src/creational/AbstractFactory');

test('should create seminar event', () => {
  const factory = new EventAbstractFactory().createEventFactory();
  const event = factory.createEvent('seminar', 'Tech Seminar', '2024-08-06');
  expect(event).toBeInstanceOf(Event);
  expect(event.title).toBe('Tech Seminar');
});

test('should throw error for unknown event type', () => {
  const factory = new EventAbstractFactory().createEventFactory();
  expect(() => {
    factory.createEvent('unknown', 'Unknown Event', '2024-08-06');
  }).toThrow('Unknown event type');
});
