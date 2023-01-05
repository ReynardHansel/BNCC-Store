// console.log("Hi");

const sideBtn = document.querySelector('.hamburger-menu');
const sideBack = document.querySelector('#sidebar-back');
// const sideLink = document.querySelectorAll('.sidebar-links > a')

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


// sideLink.addEventListener('click', () => {
//     if (btnOpen) {
//         sideBtn.classList.remove('open');
//         btnOpen = false;
        
//         document.querySelector('nav').classList.remove('open');
//     }
// })
var counter = 1;
      setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 4){
          counter = 1;
        }
      }, 5000);