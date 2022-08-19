//CONTADOR  - CUENTA REGRESIVA NUMEROS EN TEXT AREA - 

window.addEventListener('load', function(){

    ///Text Area "Descripción corta"para panel Admin
    const textAreaBoxShortDesc = document.querySelector(".textArea2__Create_shortDesc"); // clase del text area
    const characterCounterElementShortDesc = document.querySelector("#the-count__Create_shortDesc"); // container de counters
    const typedCharactersElementShortDesc= document.querySelector("#current_shortDesc");
    const maximumCharactersShort = 100;
    
    
    
    textAreaBoxShortDesc.addEventListener("keypress", (event) => {
        const typedCharactersShortDesc = textAreaBoxShortDesc.value.length;
    
        typedCharactersElementShortDesc.textContent = typedCharactersShortDesc;
    
        const currentshortDesc = document.getElementById('current_shortDesc')
        const maximumShortDesc = document.getElementById('maximum_shortDesc') 
    
        if (typedCharactersShortDesc < 50 ) {
           currentshortDesc.classList.add('text-ok__Create')
           maximumShortDesc.classList.add('text-ok__Create')
        } else if (typedCharactersShortDesc >= 50 && typedCharactersShortDesc < 80) {
           currentshortDesc.classList.replace('text-ok__Create','text-warning__Create')
           maximumShortDesc.classList.replace('text-ok__Create','text-warning__Create')
           
        } else if (typedCharactersShortDesc > 80 && typedCharactersShortDesc < 100) {
            currentshortDesc.classList.replace('text-warning__Create','text-danger__Create')
            maximumShortDesc.classList.replace('text-warning__Create','text-danger__Create')
        } 
    
    });
    
        ///Text Area  "Descripción Larga"para panel Admin
        const textAreaBox = document.querySelector(".textArea2__Create"); // clase del text area
        const characterCounterElement = document.querySelector("#the-count__Create"); // container de counters
        const typedCharactersElement = document.querySelector("#current");
        const maximumCharacters = 300;
    
    
     textAreaBox.addEventListener("keypress", (event) => {
         const typedCharacters = textAreaBox.value.length;
    
         typedCharactersElement.textContent = typedCharacters;
    
         const current = document.getElementById('current')
         const maximum = document.getElementById('maximum') 
    
         if (typedCharacters < 70 ) {
            current.classList.add('text-ok__Create')
            maximum.classList.add('text-ok__Create')
         } else if (typedCharacters >= 200 && typedCharacters < 250) {
            current.classList.replace('text-ok__Create','text-warning__Create')
            maximum.classList.replace('text-ok__Create','text-warning__Create')
            
         } else if (typedCharacters > 250 && typedCharacters < 300) {
             current.classList.replace('text-warning__Create','text-danger__Create')
             maximum.classList.replace('text-warning__Create','text-danger__Create')
         } 
    
     });
    

    })