// Explanation: Instead of real objects provides special objects replacers. Layer that allows to perform some additional
// operations, before giving further control. Proxy duplicates of an interface an object which it replaces

class CarAccess {
    open() {
        console.log('Door is opened')
    }

    close() {
        console.log('Door is closed')
    }
}

class SecuritySystem {

    door: CarAccess

    constructor(
        door: CarAccess
    ) {
        this.door = door;
    }

    open(password) {
        if (this.authenticate(password)) {
            this.door.open();
        } else {
            console.log('Access denied!');
        }
    }

    authenticate(password) {
        return password === 'Denys';
    }

    close() {
        this.door.close();
    }
}

const door = new SecuritySystem(new CarAccess());

door.open('Denchik'); // Access denied
door.open('Denchik'); // Door is opened!
door.close();