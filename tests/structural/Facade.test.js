const EventManagementFacade = require('../../src/structural/Facade');
const EventCreation = require('../../src/services/EventCreation');
const EventRegistration = require('../../src/services/EventRegistration');
const EventNotification = require('../../src/services/EventNotification');

jest.mock('../../src/services/EventCreation');
jest.mock('../../src/services/EventRegistration');
jest.mock('../../src/services/EventNotification');

test('should organize event using facade', () => {
  const facade = new EventManagementFacade();
  facade.organizeEvent('seminar', 'Tech Seminar', '2024-08-06', 'Luthfi Zufar', 'Reminder: Tech Seminar tomorrow');

  expect(EventCreation.createEvent).toHaveBeenCalledWith('seminar', 'Tech Seminar', '2024-08-06');
  expect(EventRegistration.register).toHaveBeenCalledWith(expect.anything(), 'Luthfi Zufar');
  expect(EventNotification.notify).toHaveBeenCalledWith(expect.anything(), 'Reminder: Tech Seminar tomorrow');
});
