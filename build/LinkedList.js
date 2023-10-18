"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
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
    get length() {
        if (!this.head) {
            return 0;
        }
        let len = 0;
        let temp = this.head;
        while (temp) {
            len++;
            temp = temp.next;
        }
        return len;
    }
    //   returns a node at a specified position
    at(index) {
        if (!this.head) {
            throw new Error('index out of bounds');
        }
        let start = 0;
        let temp = this.head;
        while (temp) {
            if (start === index) {
                return temp;
            }
            start++;
            temp = temp === null || temp === void 0 ? void 0 : temp.next;
        }
        throw new Error('index out of bounds');
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('Linked List does not exist');
        }
        let leftNode = this.at(leftIndex);
        let rightNode = this.at(rightIndex);
        return leftNode.data > rightNode.data;
    }
    swap(leftIndex, rightIndex) {
        // dont swap node but swap values
        let leftNode = this.at(leftIndex);
        let rightNode = this.at(rightIndex);
        const temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }
    print() {
        if (!this.head) {
            throw new Error('Linked List does not exist');
        }
        let temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
exports.LinkedList = LinkedList;
