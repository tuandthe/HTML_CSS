// Bài 1: Generic merge function
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Bài 2: Generic Queue Class
export class Queue<T> {
    private data: T[] = [];

    enqueue(item: T): void {
        this.data.push(item);
    }

    dequeue(): T | undefined {
        return this.data.shift();
    }   
    peek(): T | undefined {
        return this.data[0];
    }   
}
// Bài 3: Generic Validator
interface Validatable{
    isValid(): boolean;
}
class DataValidator<T extends Validatable> {
    validate(item: T): boolean {
        return item.isValid();
    }
}
// Bài 4: Generic Filter Function
export function filterArray<T> (arr: T[], predicate: (item: T) => boolean): T[] {
    return arr.filter(predicate);
}