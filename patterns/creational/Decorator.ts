// Explanation: With this pattern we can add additional fields and properties to objects, wrap our class in Decorator class
// thus expanding base class functionality
// Look at conception of @Component Decorator in Angular, we use it because we need to create thousands of Component classes
// in our app, with decorator usage all huge functionality of Component entity is hidden
// Decorator may accept object as an input parameter, adds methods and properties, thus expanding it

class Car {
    price: number;
    model: string;

    constructor() {
        this.model = 'Car';
        this.price = 100;
    }

    getPrice(): number {
        return this.price;
    }

    getModel(): string {
        return this.model;
    }

    getDescription(): string {
        return 'description';
    }
}

class Tesla extends Car {

    constructor() {
        super();
        this.model = 'Tesla';
        this.price = 30000;
    }
}

class Autopilot {

    car: Car;

    constructor(car: Car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 500;
    }

    getDescription() {
        return `${this.car.getDescription()} + with autopilot! `;
    }
}

class Parktronic {

    car: Car;

    constructor(car: Car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 200;
    }

    getDescription() {
        return `${this.car.getDescription()} + with parktronic! `;
    }
}

// TODO: Implementation should be different for TS, there are problems with types

// let tesla = new Tesla();
// const teslaWithAutopilot = new Autopilot(tesla); // tesla with autopilot
// const teslaWithParktronic = new Parktronic(teslaWithAutopilot);