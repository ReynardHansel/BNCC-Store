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

const headerSearch = document.querySelector('#header-input');
const navSearch = document.querySelector('#nav-input');
      const itemsContainer = document.querySelector('.items-grid');
      
headerSearch.addEventListener('input', searchEvent);
navSearch.addEventListener('input', searchEvent)
      
      function searchEvent(e){ 
          const text = e.target.value.toLowerCase();
          const items = itemsContainer.querySelectorAll('.item-box');
          Array.from(items).forEach(function(item){
              const itemList= item.children[1].textContent;
              console.log(item)
               if(itemList.toLowerCase().indexOf(text) !=-1){
                   item.style.display = 'block';
               } else{
                   item.style.display = 'none';
               }
          })
      }      

const loginButton = document.getElementsByClassName("btn login");
const signupButton = document.getElementsByClassName("btn signup");
const cartButton = document.getElementsByClassName("cart");
const logoutButton = document.getElementsByClassName("exit");
const deadLinks = document.querySelectorAll(".dead-links");

loginButton[0].addEventListener('click',() => {
    // console.log("Login Clicked");
    alert("Feature Coming Soon");
});

signupButton[0].addEventListener('click',() => {
    // console.log("Sign Up Clicked");
    alert("Feature Coming Soon");
});

cartButton[0].addEventListener('click',() => {
    // console.log("Cart Clicked");
    alert("Feature Coming Soon");
});

logoutButton[0].addEventListener('click',() => {
    alert("You've Been Logged Out");
});

for (let i = 0; i < deadLinks.length; i++) {
    // const element = deadLinks[i];
    deadLinks[i].addEventListener('click',() => {
        console.log("clicked");
        alert("Feature Coming Soon");
    });
}