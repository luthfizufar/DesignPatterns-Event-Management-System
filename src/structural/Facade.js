const EventCreation = require('../services/EventCreation');
const EventRegistration = require('../services/EventRegistration');
const EventNotification = require('../services/EventNotification');

class EventManagementFacade {
  constructor() {
    this.eventCreation = new EventCreation();
    this.eventRegistration = new EventRegistration();
    this.eventNotification = new EventNotification();
  }

  organizeEvent(type, title, date, attendee, message) {
    const event = this.eventCreation.createEvent(type, title, date);
    this.eventRegistration.register(event, attendee);
    this.eventNotification.notify(event, message);
  }
}

module.exports = EventManagementFacade;
