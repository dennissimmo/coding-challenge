// Explanation: Makes unsupported objects supported without changing the internal structure of unsupported objects.
// Perform adaptation. Example from real life is a USB - HUB. In other words allows objects with incompatible interfaces to collaborate


class Engine2 {
    simpleInterface() {
        console.log('Engine 2.0 tr-tr-tr');
    }
}

class EngineV8 {
    complicatedInterface() {
        console.log('Engine V8! wroom - wroom!')
    }
}

class EngineV8Adapter {

    engine;

    constructor(engine) {
        this.engine = engine;
    }

    simpleInterface() {
        this.engine.simpleInterface();
    }

}

class Auto {

    startEngine(engine) {
        engine.simpleInterface();
    }

}

// Engine 2.0
const lowCar = new Auto();
const lowEngine = new Engine2();

lowCar.startEngine(lowEngine);

// Engine V8 with adapter
const highCar = new Auto();
const highEngine = new EngineV8Adapter(new EngineV8());

highCar.startEngine(highEngine);

// TS Example

interface iMacBookPro {
    useUSBC(): string;
}

interface iHeadset {
    useUSBPort(): string;
}

class MacBookPro implements iMacBookPro {
    useUSBC(): string {
        return 'Using the USB-C port';
    }
}

class Headset implements iHeadset {

    useUSBPort(): string {
        return 'Using USB port';
    }
}

class USBtoUSBCAdapter implements iMacBookPro {
    device: iHeadset

    constructor(device: iHeadset) {
        this.device = device;
    }

    useUSBC(): string {
        this.device.useUSBPort();
        return 'Using USBC on USB port device';
    }

}

const adapterForMacBook = new USBtoUSBCAdapter(new Headset());
adapterForMacBook.useUSBC();