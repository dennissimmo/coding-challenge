// Explanation: Use this pattern for creation instances with difficult structure/state. For example ones that have
// 5+ fields, which must be set during constructor call. Used to avoid big constructors

class Car {
    engine: string;
    parktronic: boolean;
    autopilot: boolean;
    signaling: boolean;


    constructor() {
        this.parktronic = false;
        this.autopilot = false;
        this.signaling = false;
    }
}

class CarBuilder {
    car: Car;

    constructor() {
        this.car = new Car();
    }

    addParktronic(parktronic: boolean): CarBuilder {
        this.car.parktronic = parktronic;
        return this;
    }

    addSignaling(signaling: boolean): CarBuilder {
        this.car.signaling = signaling;
        return this;
    }

    updateEngine(engine: string): CarBuilder {
        this.car.engine = engine;
        return this;
    }

    build(): Car {
        return this.car;
    }
}

const customCar: Car = new CarBuilder()
    .addSignaling(true)
    .addParktronic(true)
    .updateEngine('V8 2.4 l')
    .build();
