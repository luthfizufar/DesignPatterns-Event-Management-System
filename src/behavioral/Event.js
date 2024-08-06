class Event {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  save() {
    return new Memento({ title: this.title, date: this.date });
  }

  restore(memento) {
    const state = memento.getState();
    this.title = state.title;
    this.date = state.date;
  }

  getDetails() {
    return `Title: ${this.title}, Date: ${this.date}`;
  }
}

module.exports = Event;
