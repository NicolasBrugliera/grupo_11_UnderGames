window.onload = function(){


    let form = document.querySelector('.form')


    form.addEventListener('submit', (e)=>{ 
        e.preventDefault()

    let errors =[]

   

    let title = document.querySelector("[name='title']")
    let one_word_descr = document.querySelector('[name="one_word_descr"]')
    let short_descr = document.querySelector('[name="short_descr"]')
    let long_descr = document.querySelector('[name="long_descr"]')
    let game_group = document.querySelector('[name="game_group"]')
    let video_1 = document.querySelector('[name="video_1"]')



    //validación Titulo de juego
    if (title.value =="") {
        errors.push('El campo titulo no puede estar vacio')
        title.classList.add('is-invalid_create')
    } else {
        title.classList.add('is-valid_create')
        title.classList.remove('is-invalid_create')
    }
    /// VALIDACION Descripción One Word
    if (one_word_descr.value =="") {
        errors.push('Para el campo "One word description" debe ingresar un valor entre 0 y 10')
        one_word_descr.classList.add('is-invalid_create')
    } else {
        one_word_descr.classList.add('is-valid_create')
        one_word_descr.classList.remove('is-invalid_create')
    }
    /// VALIDACION short_descr 
    if (short_descr.value == "") {
        errors.push('El campo Descripción corta debe tener entre 30 y 100 palabras')
        short_descr.classList.add('is-invalid_create')
    } else {
        short_descr.classList.add('is-valid_create')
        short_descr.classList.remove('is-invalid_create')
    }
    /// VALIDACION Long Description
    if (long_descr.value =="") {
        errors.push('El campo Descripción larga debe tener entre 100 y 300 palabras')
        long_descr.classList.add('is-invalid_create')
    } else {
        long_descr.classList.add('is-valid_create')
        long_descr.classList.remove('is-invalid_create')
    }

    /// VALIDACION youtube url
    if (video_1.value =="") {
        errors.push('El campo URL youtube no puede estar vacio')
        video_1.classList.add('is-invalid_create')
    } else {
        let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        let matchUrl = video_1.value.match(regExp);
        
            if(matchUrl==null){
                errors.push('No es una URL válida de youtube')
                video_1.classList.add('is-invalid_create')
                video_1.classList.remove('is-valid_create')
                
            } else {
            video_1.classList.add('is-valid_create')
            video_1.classList.remove('is-invalid_create')
        } 
    }
        

    let ulErrors = document.querySelector('.errors');
    ulErrors.classList.add('alert-warning_create')
    ulErrors.innerHTML = '';
    if (errors.length > 0) {
     
        
 
        ulErrors.innerHTML = '';
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Revise los errores!',
           
        })
        for (let i = 0; i < errors.length; i++) {
            ulErrors.innerHTML += `<li > ${errors[i]} </li>`
           
        }
    } else {

        form.submit()
    }
  }
)}
