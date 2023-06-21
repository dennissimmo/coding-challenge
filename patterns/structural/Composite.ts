// Explanation: Allow to compose objects in tree structure and work with it structure like it is one single object
// Calls are not executing on root level, but passing for each leaf in a structure and call on their levels.
// All nested objects have common access points

interface iEquipment {
    price: number;
    name: string;
}

class Equipment implements iEquipment {
    private _name: string;
    private _price: number;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price || 0;
    }

    set price(value: number) {
        this._price = value;
    }
}

class Engine extends Equipment {

    constructor() {
        super();
        this.name = 'Engine';
        this.price = 800;
    }
}

class Body extends Equipment {

    constructor() {
        super();
        this.name = 'Body';
        this.price = 300;
    }
}

class Tools extends Equipment {

    constructor() {
        super();
        this.name = 'Tools';
        this.price = 400;
    }
}

class Composite extends Equipment {

    equipments: Equipment[];

    constructor() {
        super();
    }

    add(equipment: Equipment) {
        this.equipments.push(equipment);
    }

    getPrice(): number {
        return this.equipments
            .map(equip => equip.price)
            .reduce((a, b) => a + b);
    }
}

class Car extends Composite {

    constructor() {
        super();
        this.name = 'Audi';
    }
}

const ownCar = new Car();
ownCar.add(new Tools());
ownCar.add(new Engine());
ownCar.add(new Body());
ownCar.getPric  e(); // Total price;