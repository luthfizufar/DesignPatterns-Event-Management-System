const Event = require('../../src/creational/Prototype');

test('should clone an event', () => {
  const event = new Event('Tech Seminar', '2024-08-06');
  const clonedEvent = event.clone();
  expect(clonedEvent).toBeInstanceOf(Event);
  expect(clonedEvent.title).toBe('Tech Seminar');
  expect(clonedEvent.date).toBe('2024-08-06');
});
