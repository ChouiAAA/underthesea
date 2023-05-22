// HOME ANIMATION


let fish = document.getElementById("header__fish")
let front = document.getElementById("front__header")
let jellyfish = document.getElementById("header__jellyfish")
let headerBtn = document.querySelector(".header__button")   
let back = document.getElementById("header__background")

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    fish.style.top = value * 0.5 + 'px'
    back.style.top = value * 0.05 + 'px'      
    front.style.top = value * 0.1 + 'px'
    jellyfish.style.marginLeft = value *-2.5  + 'px'
    jellyfish.style.marginTop = value * 0.2 + 'px'
    headerBtn.style.marginTop = 450 + value * 0.2 + 'px'
})


// ABOUT ANIMATION

let orangeFish = document.getElementById("orangeFish")
    
window.addEventListener("scroll", function(){
    let value = window.scrollY;
    orangeFish.style.top = value * 1.3 + 'px'
})


//NAVBAR

const btnMenu=document.querySelector('.navbar__logo-menu');
const menu=document.querySelector('nav ul');

btnMenu.addEventListener('click', () =>{menu.classList.toggle('active')})

const allLinks=document.querySelectorAll('.navbar__item');

allLinks.forEach(item =>{
item.addEventListener('click', () => {menu.classList.toggle('active')})
})