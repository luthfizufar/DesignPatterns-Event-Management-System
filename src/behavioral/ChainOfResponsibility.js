class Handler {
  constructor() {
    this.next = null;
  }

  setNext(handler) {
    this.next = handler;
  }

  handle(request) {
    if (this.next) {
      this.next.handle(request);
    }
  }
}

class Manager extends Handler {
  handle(request) {
    if (request.type === 'budget') {
      console.log('Manager handling budget request');
    } else {
      super.handle(request);
    }
  }
}

class Director extends Handler {
  handle(request) {
    if (request.type === 'schedule') {
      console.log('Director handling schedule request');
    } else {
      super.handle(request);
    }
  }
}

class CEO extends Handler {
  handle(request) {
    if (request.type === 'approval') {
      console.log('CEO handling approval request');
    } else {
      super.handle(request);
    }
  }
}

module.exports = { Handler, Manager, Director, CEO };
