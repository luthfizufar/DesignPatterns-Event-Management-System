const EventMediator = require('../../src/behavioral/Mediator');
const Participant = require('../../src/behavioral/Participant');

test('should mediate messages between participants', () => {
  const mediator = new EventMediator();
  const participant1 = new Participant('Luthfi Zufar');
  const participant2 = new Participant('Tiara Trisanti');
  mediator.register(participant1);
  mediator.register(participant2);

  participant1.send('Hello Tiara Trisanti');
});
