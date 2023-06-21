// Explanation: It is a pattern that creates an interface that is grouping other factories, which are logically related.
// "Subfactories" should have the same interface of creation objects.
// Additional abstraction over multiple similar factories, do not tie with specific class realization

// Abstract factory
function bmwProducer(kind) {
    return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

function sportCarFactory() {
    return new X5();
}

function familyCarFactory() {
    return new I3();
}

class I3 {
    info() {
        return 'I3 family car';
    }
}

class X5 {
    info() {
        return 'X5 sport car';
    }
}

// Initialing abstract factory of car producers
const producer = bmwProducer('sport');

// Car producing (Factory)
const x5 = producer();
console.log(x5.info());