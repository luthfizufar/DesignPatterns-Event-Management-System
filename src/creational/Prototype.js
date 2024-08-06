class Event {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  clone() {
    return new Event(this.title, this.date);
  }
}

module.exports = Event;
