const EventParticipantFactory = require('../../src/structural/Flyweight');

test('should manage participant instances', () => {
  const factory = new EventParticipantFactory();
  const participant1 = factory.getParticipant('Luthfi Zufar');
  const participant2 = factory.getParticipant('Tiara Trisanti');
  const participant3 = factory.getParticipant('Muhammad Emir'); 

  expect(participant1).toBe(participant3);
  expect(factory.getTotalParticipants()).toBe(2);
});
