const EventPool = require('../../src/creational/EventPool');

test('should reuse events from the pool', () => {
  const pool = new EventPool();
  const event1 = pool.createEvent('Tech Seminar', '2024-08-06');
  pool.releaseEvent(event1);

  const event2 = pool.createEvent('Tech Workshop', '2024-08-07');
  expect(event2.title).toBe('Tech Workshop');
});
