class Semaphore {
  constructor() {
    this.lock = false;
    this.queue = [];
  }

  acquire() {
    return new Promise((resolve) => {
      this.queue.push(resolve);
      this._dispatch();
    });
  }

  _dispatch() {
    while (this.queue.length > 0) {
      if (this.lock) break;

      this.lock = true;
      const resolve = this.queue.shift();
      resolve([true, this._release.bind(this)]);
    }
  }

  _release() {
    while (this.queue.length > 0) {
      const resolve = this.queue.shift();
      resolve([false, undefined]);
    }
    this.lock = false;
  }
}

module.exports = Semaphore;
