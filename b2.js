const prompt = require("prompt-sync")();
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const addTwoNumbers = function (l1, l2) {
  let result = new LinkedList();
  let memory = 0;
  let p = l1.head;
  let q = l2.head;

  while (p != null || q != null) {
    let x = 0;
    let y = 0;
    if (p != null) {
      x = p.value;
      p = p.next;
    }
    if (q != null) {
      y = q.value;
      q = q.next;
    }
    const sum = x + y + memory;
    memory = Math.floor(sum / 10);
    result.addNode(sum % 10);
  }
  if (memory > 0) {
    result.addNode(memory);
  }
  return result;
};

function main() {
  const l1 = new LinkedList();
  const l2 = new LinkedList();
  const l1String = prompt("l1:");
  l1String
    .split(",")
    .map(Number)
    .forEach((value) => l1.addNode(value));
  const l2String = prompt("l2:");
  l2String
    .split(",")
    .map(Number)
    .forEach((value) => l2.addNode(value));

  console.log("List 1:");
  l1.printList();

  console.log("List 2:");
  l2.printList();

  const sumResult = addTwoNumbers(l1, l2);

  console.log("Sum Result:");
  sumResult.printList();
}
main();
