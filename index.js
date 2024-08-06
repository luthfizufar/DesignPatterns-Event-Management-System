const { EventAbstractFactory } = require('./src/creational/AbstractFactory');
const EventPool = require('./src/creational/EventPool');
const Event = require('./src/creational/Prototype');
const EventManagementFacade = require('./src/structural/Facade');
const { NotificationService, EmailNotification, SMSNotification } = require('./src/structural/Bridge');
const EventParticipantFactory = require('./src/structural/Flyweight');
const EventMediator = require('./src/behavioral/Mediator');
const Participant = require('./src/behavioral/Participant');
const { Manager, Director, CEO } = require('./src/behavioral/ChainOfResponsibility');
const Caretaker = require('./src/behavioral/Caretaker');
const Memento = require('./src/behavioral/Memento');
const EventCreation = require('./src/services/EventCreation');
const EventRegistration = require('./src/services/EventRegistration');
const EventNotification = require('./src/services/EventNotification');

const eventFactory = new EventAbstractFactory().createEventFactory();
const eventPool = new EventPool();
const eventCreation = new EventCreation();
const eventRegistration = new EventRegistration();
const eventNotification = new EventNotification();
const eventParticipantFactory = new EventParticipantFactory();
const mediator = new EventMediator();
const caretaker = new Caretaker();

// Contoh penggunaan Abstract Factory
console.log('Creating events using Abstract Factory:');
const seminar = eventFactory.createEvent('seminar', 'Tech Seminar', '2024-08-06');
const workshop = eventFactory.createEvent('workshop', 'Coding Workshop', '2024-08-07');
const conference = eventFactory.createEvent('conference', 'Tech Conference', '2024-08-08');
console.log(seminar, workshop, conference);

// Contoh penggunaan Object Pool
console.log('\nUsing Object Pool:');
const pooledEvent1 = eventPool.createEvent('Tech Seminar', '2024-08-06');
eventPool.releaseEvent(pooledEvent1);
const pooledEvent2 = eventPool.createEvent('Tech Workshop', '2024-08-07');
console.log(pooledEvent2);

// Contoh penggunaan Prototype pattern
console.log('\nUsing Prototype Pattern:');
const originalEvent = new Event('Tech Seminar', '2024-08-06');
const clonedEvent = originalEvent.clone();
console.log('Original Event:', originalEvent.getDetails());
console.log('Cloned Event:', clonedEvent.getDetails());

// Contoh penggunaan Facade 
console.log('\nUsing Facade Pattern:');
const facade = new EventManagementFacade();
facade.organizeEvent('seminar', 'Tech Seminar', '2024-08-06', 'Alice', 'Reminder: Tech Seminar tomorrow');

// Contoh penggunaan Bridge pattern
console.log('\nUsing Bridge Pattern:');
const emailService = new NotificationService(new EmailNotification());
const smsService = new NotificationService(new SMSNotification());
emailService.send(seminar, 'Email reminder for Tech Seminar');
smsService.send(workshop, 'SMS reminder for Coding Workshop');

// Contoh penggunaan Flyweight pattern
console.log('\nUsing Flyweight Pattern:');
const participant1 = eventParticipantFactory.getParticipant('Alice');
const participant2 = eventParticipantFactory.getParticipant('Bob');
const participant3 = eventParticipantFactory.getParticipant('Alice'); // Should be the same instance as participant1
console.log('Total Participants:', eventParticipantFactory.getTotalParticipants());

// Contoh penggunaan Mediator pattern
console.log('\nUsing Mediator Pattern:');
mediator.register(participant1);
mediator.register(participant2);
participant1.send('Hello Tiara');
participant2.send('Hello Luthfi');

// Contoh penggunaan Chain of Responsibility pattern
console.log('\nUsing Chain of Responsibility Pattern:');
const manager = new Manager();
const director = new Director();
const ceo = new CEO();
manager.setNext(director);
director.setNext(ceo);

const budgetRequest = { type: 'budget' };
const scheduleRequest = { type: 'schedule' };
const approvalRequest = { type: 'approval' };

manager.handle(budgetRequest);
manager.handle(scheduleRequest);
manager.handle(approvalRequest);

//Contoh penggunaan Memento pattern 
console.log('\nUsing Memento Pattern:');
const memento = originalEvent.save();
caretaker.addMemento(memento);
originalEvent.title = 'Changed Title';
originalEvent.restore(caretaker.getMemento(0));
console.log('Restored Event:', originalEvent.getDetails());
