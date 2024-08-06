class EventRegistration {
    register(event, attendee) {
      console.log(`Registering ${attendee} for ${event.title}`);
    }
  }
  
  module.exports = EventRegistration;
  