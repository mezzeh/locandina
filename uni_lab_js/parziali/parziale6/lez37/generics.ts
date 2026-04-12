function logLength<T extends { length: number }>(value: T): number {
  return value.length;
}

//This function works with arrays, strings, and objects that have a length property but not with numbers:

logLength("hello"); // ✅ Works (string has length)
logLength([1, 2, 3]); // ✅ Works (array has length)
logLength({ length: 10 }); // ✅ Works (object has length)

// logLength(42); ❌ Error (number has no length)
interface Box<T> {
  content: T;
}

const box1: Box<number> = { content: 42 };
const box2: Box<string> = { content: "hello" };
// qua dici che l'ooggettoooo deve avere conteng, ce il itpo deve rispettare l0'interfacci a.
class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

// Usage
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // 2

const stringStack = new Stack<string>();
stringStack.push("a");
stringStack.push("b");
console.log(stringStack.pop()); // "b"
