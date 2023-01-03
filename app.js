// console.log("Hi");

const sideBtn = document.querySelector('.hamburger-menu');
let btnOpen = false;
sideBtn.addEventListener('click', () => {
    if (!btnOpen) {
        sideBtn.classList.add('open');
        btnOpen = true;
    } else {
        sideBtn.classList.remove('open');
        btnOpen = false;
    }
});