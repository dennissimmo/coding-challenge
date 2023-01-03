const countdown = document.querySelector('.clock h1');

setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = date.getSeconds();
    const templateStr = `${24 - hours}:${60 - minutes}:${60 - seconds}`;
    countdown.innerHTML = `<b>${templateStr}</b>`;
}, 1000);
