const { NotificationService, EmailNotification, SMSNotification } = require('../../src/structural/Bridge');

test('should send email notification', () => {
  const emailNotification = new EmailNotification();
  const service = new NotificationService(emailNotification);
  service.send({ title: 'Tech Seminar' }, 'Reminder');

});

test('should send SMS notification', () => {
  const smsNotification = new SMSNotification();
  const service = new NotificationService(smsNotification);
  service.send({ title: 'Tech Workshop' }, 'Reminder');

});
