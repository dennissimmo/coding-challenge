// Explanation: Its purpose hide complex logic behind simple facade, gather difficult structures, combine them and provide
// simple interface for interaction/manipulation

class Conveyor {
    setBody() {
        console.log('Body set');
    }

    getEngine() {
        console.log('Dismantle engine!');
    }

    setEngine() {
        console.log('Set engine!');
    }

    getInterior() {
        console.log('Interior update')
    }

    setInterior() {
        console.log('Interior added!')
    }
}

class ConveyorFacade {

    car: Conveyor;

    constructor(
        car: Conveyor
    ) {
        this.car = car;
    }

    assembleCar() {
        this.car.getEngine();
        this.car.setEngine();
        this.car.getInterior();
        this.car.setInterior();
        return this.car;
        // car is built
    }
}

const conveyer = new ConveyorFacade(new Conveyor());
const car = conveyer.assembleCar();