const admin = {
    username: 'Administrator',
    role: 'admin'
};

const copyAdmin = admin;
const spreadCopy = { ...admin }; // shallow copy with another refference
const assignCopy = Object.assign({}, admin);
admin.username = 'MainAdmin';
console.log(copyAdmin, spreadCopy, assignCopy);
// Do not forget about square bracket notation, it can be sometimes useful
const roleKey = 'role';
const userRole = admin[roleKey];
console.log(userRole); // 'admin'
const age = 23;
const adminWithAge = { ...admin, age }; // age: age
// if we have a property of an object with the same name of a variable, we can omit property name, during 
// assignement variable value to this property, list such properties first
console.log(adminWithAge);
const adminWithGetter = { 
    ...adminWithAge,
    getAge: () => {
        return age;
    }
};
// We can omit "function" keyword when declare function as an object property
console.log(adminWithGetter.getAge()); // 23
// If we have nested objects it won't save us from mutation, we have to do deepCopy
const adminWithAbilities = {
    ...adminWithGetter,
    abilities: [
        {
            name: 'edit',
            isAvailable: false,
        }
    ]
};
const fullAdminCopy = { ...adminWithAbilities };
adminWithAbilities.abilities[0].isAvailable = true;
console.log(adminWithAbilities, fullAdminCopy); // will be set to "true" in both objects, we have to use 
const deepAdminCopy = JSON.parse(JSON.stringify(adminWithAbilities));
// problem with JSON.parse, that we are losing our functions during copying
console.dir(fullAdminCopy.getAge); // .dir function display properties of an object

const custom = function manual() {
    console.log('Hello world!');
};

console.log(custom.name) // manual;
const nonCustom = function () {
    console.log('Hello world!');
};
console.log(nonCustom.name) // nonCustom;