const users = [
    {
        id: 0,
        name: 'Denys'
    },
    {
        id: 1,
        name: 'Lisa'
    },
    {
        id: 2,
        name: 'John'
    },
];

// Fetch ids of users
function fetchIds(users) {
    return users.map(function (user) {
        return user.id;
    })
};

// Fetch ids of users
const userIds = test => test.map(user => user.id);

console.log(fetchIds(users));
console.log(userIds(users));

// Destructuring should be only with parenthesis
const fetchId = ({ id }) => id;
const idsWithInner = somethingWithId => somethingWithId.map(fetchId);
console.log(idsWithInner(users));

// wrong function with two parameters and initial value

const shape = {
    x: 20,
    y: 40,
    getThis: () => this,
    o: {
        x: 50,
        getShape: () => this
    }
};

console.log(this);

console.log(shape.o.getShape());
console.log(shape.getThis());

// const userIdsWithParam = testUsers, param = 5 => {
//     return testUsers.map(user => user.name);
// };


// Syntax error: Missing initializer in const declaration, without paranthesis around parameters list
// Syntax error: Malformed arrow function parameter
// console.log(userIdsWithParam(users, 'hello'));




function initSlider() {
    const arrows = document.querySelectorAll(".arrow");
    const movieLists = document.querySelectorAll(".movie-list");

    arrows.forEach((arrow, index) => {
        const transformStep = 300;
        const imagesCount = movieLists[index].children.length;
        const maxTransformX = imagesCount * transformStep;
        arrow.addEventListener('click', (event) => {
            const shouldSlideImage = imagesCount * transformStep > movieLists[index].getBoundingClientRect().width;
            if (!shouldSlideImage) return;
            let item = movieLists[index];
            let currentTransformValue = item.computedStyleMap().get("transform")[0].x.value - transformStep;
            if (Math.abs(currentTransformValue) > maxTransformX) {
                currentTransformValue = 0;
            }
            item.style.transform = `translateX(${currentTransformValue}px)`; 
        });
    });
}

function initToggleTheme() {
    const toggleBall = document.querySelector(".toggle-ball");
    const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.theme-toggle,.sidebar-list-item");

    toggleBall.addEventListener('click', () => {
        items.forEach(item => item.classList.toggle('active'));
        toggleBall.classList.toggle('active');
    });
}

initSlider();
initToggleTheme();