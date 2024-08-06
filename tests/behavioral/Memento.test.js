const Event = require('../../src/behavioral/Event');
const Memento = require('../../src/behavioral/Memento');
const Caretaker = require('../../src/behavioral/Caretaker');

test('should save and restore event state', () => {
  const event = new Event('Tech Seminar', '2024-08-06');
  const caretaker = new Caretaker();

  const memento = event.save();
  caretaker.addMemento(memento);

  event.title = 'Changed Title';
  event.restore(caretaker.getMemento(0));

  expect(event.title).toBe('Tech Seminar');
});
