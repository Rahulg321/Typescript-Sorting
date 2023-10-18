import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  data: number;

  constructor(data: number) {
    this.data = data;
  }
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let temp = this.head;

    while (temp.next) {
      temp = temp.next;
    }

    temp.next = newNode;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let len = 0;

    let temp: Node | null = this.head;

    while (temp) {
      len++;
      temp = temp.next;
    }

    return len;
  }

  //   returns a node at a specified position
  at(index: number): Node {
    if (!this.head) {
      throw new Error('index out of bounds');
    }

    let start = 0;
    let temp: Node | null = this.head;
    while (temp) {
      if (start === index) {
        return temp;
      }

      start++;
      temp = temp?.next;
    }

    throw new Error('index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('Linked List does not exist');
    }

    let leftNode = this.at(leftIndex);
    let rightNode = this.at(rightIndex);

    return leftNode.data > rightNode.data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    // dont swap node but swap values
    let leftNode = this.at(leftIndex);
    let rightNode = this.at(rightIndex);

    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {
    if (!this.head) {
      throw new Error('Linked List does not exist');
    }

    let temp: Node | null = this.head;

    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}
