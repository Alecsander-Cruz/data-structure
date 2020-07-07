class Queue {
  constructor() {
    this.fila = [];
  }

  add(element) {
    this.fila.push(element);
    return this.fila;
  }

  remove() {
    return this.fila.shift();
  }
}

let queue = new Queue();

queue.add('a');
queue.add('b');
queue.add('c');

console.log(queue);

queue.remove();
console.log(queue);
queue.remove();
console.log(queue);

queue.add('a');
queue.add('b');
queue.add('c');

console.log(queue);
