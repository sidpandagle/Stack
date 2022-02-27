// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


class Stack {
  //push
  //pop
  //size
  //peek
  size: number;
  stack: number[];
  constructor() {
    this.size = 0;
    this.stack = [];
  }

  push(val) {
    this.stack[this.size] = val;
    this.size++;
  }

  pop() {
    return this.stack.splice(--this.size, 1);
  }

  peek() {
    return this.stack[this.size - 1];
  }

  count() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(1);
console.log(stack.peek());
stack.push(2);
console.log(stack.peek());
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size);
