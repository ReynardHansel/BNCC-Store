// console.log("Hi");

const sideBtn = document.querySelector('.hamburger-menu');
const sideBack = document.querySelector('#sidebar-back');

let btnOpen = false;
sideBtn.addEventListener('click', () => {
    if (!btnOpen) {
        sideBtn.classList.add('open');
        btnOpen = true;

        document.querySelector('nav').classList.add('open');
    } 
    // else {
    //     sideBtn.classList.remove('open');
    //     btnOpen = false;
        
    //     document.querySelector('nav').classList.remove('open');
    // }
});

sideBack.addEventListener('click', () => {
    if (btnOpen) {
        sideBtn.classList.remove('open');
        btnOpen = false;
        
        document.querySelector('nav').classList.remove('open');
    }
})