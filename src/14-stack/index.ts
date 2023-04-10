/**
 * Stack
 *
 * Create a stack data structure. The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 *
 * Examples:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
 */

class Stack {
  store: number[] = []

  push(n: number): void {
    this.store.push(n);
  }

  pop(): number {
    const numberToBeOut = this.store[this.store.length - 1];
    this.store.splice(this.store.length - 1, 1)
    return numberToBeOut;
  }

  peek(): number {
    return this.store[this.store.length - 1];
  }
}

export { Stack };
