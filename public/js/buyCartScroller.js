// Movimiento para Carrito - Detalle Producto
let buyCart = document.querySelector('.cart-section__PD')


////Position absolute con tope en 75% para scroll mayor a 500 mayor a tablet
window.addEventListener("scroll",function() { 
if(window.scrollY >= 470 && window.innerWidth > 768) { 
    buyCart.style.position = 'absolute'; 
    buyCart.style.top = '75%'; 
} 

//Si el scroll es menor a ese punto queda fixed 
if(window.scrollY <= 450 && window.innerWidth > 768){ 
    buyCart.style.position = 'fixed'; 
    buyCart.style.top = '25%'; 
} })

//Position absolote con tope en 95% para scroll mayor a 500 y Modo escritorio
 window.addEventListener("scroll",function() { 
    if(window.scrollY >= 500 && window.innerHeight > 1365) { 
        buyCart.style.position = 'absolute'; 
        buyCart.style.top = '95%'; 
    } 
    if(window.scrollY <= 500 && window.innerHeight > 1365){ 
        buyCart.style.position = 'fixed'; 
        buyCart.style.top = '15%'; 
    } }) 


    //Tablet viewports
window.addEventListener("scroll",function() { 
    if(window.scrollY >= 450 && window.innerHeight > 1024 && window.innerWidth > 768) { 
        buyCart.style.position = 'absolute'; 
        buyCart.style.top = '50%'; 
    } 
    if(window.scrollY <= 450 &&  window.innerHeight > 1024 && window.innerWidth > 768){ 
        buyCart.style.position = 'fixed'; 
        buyCart.style.top = '16%'; 
    } }) 