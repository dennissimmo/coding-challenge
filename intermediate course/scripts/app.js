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