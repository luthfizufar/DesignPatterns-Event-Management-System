const { Handler, Manager, Director, CEO } = require('../../src/behavioral/ChainOfResponsibility');

test('should handle requests through chain of responsibility', () => {
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

});
