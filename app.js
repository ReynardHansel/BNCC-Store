// console.log("Hi");

const sideBtn = document.querySelector('.hamburger-menu');
let btnOpen = false;
sideBtn.addEventListener('click', () => {
    if (!btnOpen) {
        sideBtn.classList.add('open');
        btnOpen = true;

        document.querySelector('nav').classList.add('open');
    } else {
        sideBtn.classList.remove('open');
        btnOpen = false;
        
        document.querySelector('nav').classList.remove('open');
    }
});