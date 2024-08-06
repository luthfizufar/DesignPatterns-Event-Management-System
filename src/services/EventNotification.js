class EventNotification {
    notify(event, message) {
      console.log(`Notifying about ${event.title}: ${message}`);
    }
  }
  
module.exports = EventNotification;
  