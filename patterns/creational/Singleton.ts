// Explanation: This pattern is used to create an instance of some object only once and make it available throughout
// a project. It guarantees that certain class will have only one instance.
// Every time, when we will try to access we will receive the same instance and second instance of the same
// class cannot be created.

// 1. Implementation with global variable

let instance: Counter;

class Counter {

    count: number;

    constructor() {
        if (!instance) {
            instance = this;
            instance.count = 0;
        }

        return instance;
    }

    getCount(): number {
        return instance.count;
    }

    increaseCount(): number {
        return instance.count++;
    }
}

const counterWords = new Counter();
const counterNumbers = new Counter();
counterNumbers.increaseCount();
counterNumbers.increaseCount();
console.log(counterNumbers.getCount()); // 2
console.log(counterWords.getCount()); // 2

// 2. Implementation with ES6 syntax
class UpdatedCounter {

    static instance: UpdatedCounter;
    count: number;

    constructor() {
        if (typeof UpdatedCounter.instance === 'object') {
            return UpdatedCounter.instance;
        }
        this.count = 0;
        UpdatedCounter.instance = this;
    }

    getCount(): number {
        return this.count;
    }

    increaseCount(): number {
        return this.count++;
    }
}

const words = new UpdatedCounter();
const numbers = new UpdatedCounter();
words.increaseCount();
numbers.increaseCount();
console.log(numbers.getCount()); // 2
console.log(words.getCount()); // 2