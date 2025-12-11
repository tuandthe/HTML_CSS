// panic
function panic (message: string): never {
    throw new Error(message);
}

// type guards
function assert(condition: boolean, message: string): asserts condition {
    if (!condition) {
        panic(message);
    }
}

function safeDivide(a: number, b: number): number {
    assert(b !== 0, "Division by zero is not allowed.");
    assert(typeof a === "number" && typeof b === "number", "Both arguments must be numbers");
    return a / b;
}
// Bài 2: Shape Calculator với Exhaustive Check
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function getArea(s: Shape): number {
  switch (s.kind) {
    case "circle": return Math.PI * s.radius ** 2;
    case "square": return s.side ** 2;
    default:
      const _exhaustiveCheck: never = s;
      return _exhaustiveCheck;
  }
}
// Bài 3: Todo Reducer
type Action = 
  | { type: "ADD"; text: string }
  | { type: "DELETE"; id: number };

function todoReducer(state: any, action: Action) {
  switch (action.type) {
    case "ADD": return { ...state /* logic add */ };
    case "DELETE": return { ...state /* logic delete */ };
    default:
      const _check: never = action; // Báo lỗi nếu thiếu case
      return _check;
  }
}
export { safeDivide };