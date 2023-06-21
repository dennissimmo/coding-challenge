// Explanation: This pattern uses for creation class instances that has common base, hide logic of creation instances in a method.
// Useful when we want to create multiple objects with same structure but different parameters/values

class Bmw {
    private model: string;
    private price: number;
    private maxSpeed: number;

    constructor(model: string, price: number, maxSpeed: number) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

class BmwFactory {

    create(type: string): Bmw {
        if (type === 'X5') {
            new Bmw(type, 20000, 230);
        }
        if (type === 'X6') {
            new Bmw(type, 23000, 250);
        }

        return new Bmw('default', 10000, 100);
    }

}

const factory = new BmwFactory();
const x5 = factory.create('X5');
const x6 = factory.create('X6');