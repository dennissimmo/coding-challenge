// Explanation: This pattern allows copy objects without need to deep in realization. Create a new object but with same values
// of inner properties (may be useful for serialization objects).
// We can precisely modify each instance without changing base structure

class TeslaCar {
    model: string;
    exterior: string;
    price: number;
    autopilot: boolean;

    constructor(model: string, exterior: string, price: number, autopilot: boolean) {
        this.model = model;
        this.exterior = exterior;
        this.price = price;
        this.autopilot = autopilot;
    }

    produce(): TeslaCar {
        return new TeslaCar(this.model, this.exterior, this.price, this.autopilot);
    }
}

// Produce base auto
const prototypeCar = new TeslaCar('S', 'black', 30000, false);

// Cloning of base auto
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// Update particular car;
car2.price = 23450;
car2.autopilot = true;

car3.autopilot = true;