
let buyCart = document.querySelector('.cart-section__PD')

window.addEventListener("scroll",function() { 
if(window.scrollY >= 410 && window.innerWidth >= 768) { 
    buyCart.style.position = 'absolute'; 
    buyCart.style.top = '75%'; 
} 
if(window.scrollY <= 410 && window.innerWidth >= 768){ 
    buyCart.style.position = 'fixed'; 
    buyCart.style.top = '25%'; 
} })


  
