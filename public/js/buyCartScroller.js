
let buyCart = document.querySelector('.cart-section__PD')

window.addEventListener("scroll",function() { 
if(window.scrollY >= 470 && window.innerWidth > 768) { 
    buyCart.style.position = 'absolute'; 
    buyCart.style.top = '80%'; 
} 
if(window.scrollY <= 450 && window.innerWidth > 768){ 
    buyCart.style.position = 'fixed'; 
    buyCart.style.top = '25%'; 
} })


  
 window.addEventListener("scroll",function() { 
    if(window.scrollY >= 500 && window.innerHeight > 1365) { 
        buyCart.style.position = 'absolute'; 
        buyCart.style.top = '95%'; 
    } 
    if(window.scrollY <= 500 && window.innerHeight > 1365){ 
        buyCart.style.position = 'fixed'; 
        buyCart.style.top = '15%'; 
    } }) 

window.addEventListener("scroll",function() { 
    if(window.scrollY >= 450 && window.innerHeight > 1024 && window.innerWidth > 768) { 
        buyCart.style.position = 'absolute'; 
        buyCart.style.top = '50%'; 
    } 
    if(window.scrollY <= 450 &&  window.innerHeight > 1024 && window.innerWidth > 768){ 
        buyCart.style.position = 'fixed'; 
        buyCart.style.top = '16%'; 
    } }) 