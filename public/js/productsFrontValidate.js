window.onload = function(){
   

    let form = document.querySelector('.form')
        form.title.focus()

    form.addEventListener('submit', (e)=>{ 
        e.preventDefault()

    let errors =[]

    let img_1 = document.querySelector('[name="img_1"]')
    let img_2 = document.querySelector('[name="img_2"]')
    let img_3 = document.querySelector('[name="img_3"]')
    let img_4= document.querySelector('[name="img_4"]')
    let img_5= document.querySelector('[name="img_5"]')

    let title = document.querySelector('[name="title"]')
    let one_word_descr = document.querySelector('[name="one_word_descr"]')
    let short_descr = document.querySelector('[name="short_descr"]')
    let long_descr = document.querySelector('[name="long_descr"]')
    let game_group = document.querySelector('[name="game_group"]')
    let video_1 = document.querySelector('[name="video_1"]')
    let category = document.querySelector('[name="category"]')
    let launch_date = document.querySelector('[name="launch_date"]')
    let platform = document.querySelector('[name="platform"]')
    let os_min = document.querySelector('[name="os_min"]')
    let os_rec = document.querySelector('[name="os_rec"]')
    let processor_min = document.querySelector('[name="processor_min"]')
    let processor_rec = document.querySelector('[name="processor_rec"]')
    let storage_min = document.querySelector('[name="storage_min"]')
    let storage_rec = document.querySelector('[name="storage_rec"]')
    let graphics_min = document.querySelector('[name="graphics_min"]')
    let graphics_rec = document.querySelector('[name="graphics_rec"]')
    //let age = document.querySelector('[name="age"]')
  



    //Vaidación de campos imagen
    if (img_1.value =="") {
        errors.push('El campo imagen no puede estar vacio')
        img_1.classList.add('is-invalid_create')
    } else {
        img_1.classList.add('is-valid_create')
        img_1.classList.remove('is-invalid_create')
    }


    if (img_2.value =="") {
        errors.push('El campo imagen no puede estar vacio')
        img_2.classList.add('is-invalid_create')
    } else {
        img_2.classList.add('is-valid_create')
        img_2.classList.remove('is-invalid_create')
    }


    if (img_3.value =="") {
        errors.push('El campo imagen no puede estar vacio')
        img_3.classList.add('is-invalid_create')
    } else {
        img_3.classList.add('is-valid_create')
        img_3.classList.remove('is-invalid_create')
    }


    if (img_4.value =="") {
        errors.push('El campo imagen no puede estar vacio')
        img_4.classList.add('is-invalid_create')
    } else {
        img_4.classList.add('is-valid_create')
        img_4.classList.remove('is-invalid_create')
    }

    if (img_5.value =="") {
        errors.push('El campo imagen no puede estar vacio')
        img_5.classList.add('is-invalid_create')
    } else {
        img_5.classList.add('is-valid_create')
        img_5.classList.remove('is-invalid_create')
    }



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
    /// VALIDACION Game Group
    if (game_group.value == "") {
        errors.push('El campo Game Group no puede estar vacio!')
        game_group.classList.add('is-invalid_create')
    } else {
        game_group.classList.add('is-valid_create')
        game_group.classList.remove('is-invalid_create')
        
    }
    /// VALIDACION Categoría
    if (category.value =="") {
        errors.push('El campo category no puede estar vacio!')
        category.classList.add('is-invalid_create')
    } else {
        category.classList.remove('is-invalid_create')
        category.classList.add('is-valid_create')
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
        
    /// VALIDACION Fecha
    if (launch_date.value =="") {
        errors.push('El campo category no puede estar vacio!')
        launch_date.classList.add('is-invalid_create')
    } else {
        launch_date.classList.remove('is-invalid_create')
        launch_date.classList.add('is-valid_create')
    }

    /// VALIDACION Plataformas
   if (platform.value == "") {
        errors.push('El campo Platform no puede estar vacio!')
        platform.classList.add('is-invalid_create')
    } else {
        platform.classList.add('is-valid_create')
        platform.classList.remove('is-invalid_create')
    } 
    /// VALIDACION Sistema Operativo Req.Min
     if (os_min.value == "") {
        errors.push('El campo OS mínimo no puede estar vacio!')
        os_min.classList.add('is-invalid_create')
    } else {
        os_min.classList.add('is-valid_create')
        os_min.classList.remove('is-invalid_create')
    }
    /// VALIDACION Sistema Operativo Req. Recomendado
    if (os_rec.value == "") {
        errors.push('El campo Os recomendado no puede estar vacio!')
        os_rec.classList.add('is-invalid_create')
    } else {
        os_rec.classList.add('is-valid_create')
        os_rec.classList.remove('is-invalid_create')
    }
    /// VALIDACION Procesador Req. Minimo
    if (processor_min.value == "") {
        errors.push('El campo Procesador Mínimo no puede estar vacio!')
        processor_min.classList.add('is-invalid_create')
    } else {
        processor_min.classList.add('is-valid_create')
        processor_min.classList.remove('is-invalid_create')
    }
    /// VALIDACION Procesador Recomendado
    if (processor_rec.value == "") {
        errors.push('El campo Procesador Recomendado no puede estar vacio!')
        processor_rec.classList.add('is-invalid_create')
    } else {
        processor_rec.classList.add('is-valid_create')
        processor_rec.classList.remove('is-invalid_create')
    }
    /// VALIDACION Almacenamiento Mínimo
    if (storage_min.value == "") {
        errors.push('El campo Almacenamiento Mínimo no puede estar vacio!')
        storage_min.classList.add('is-invalid_create')
    } else {
        storage_min.classList.add('is-valid_create')
        storage_min.classList.remove('is-invalid_create')
    }
    /// VALIDACION Almacenamiento Recomendado
    if (storage_rec.value == "") {
        errors.push('El campo Almacenamiento Recomendado no puede estar vacio!')
        storage_rec.classList.add('is-invalid_create')
    } else {
        storage_rec.classList.add('is-valid_create')
        storage_rec.classList.remove('is-invalid_create')
    }
    /// VALIDACION Gráficos Mínimos
    if (graphics_min.value == "") {
        errors.push('El campo Gráficos mínimos no puede estar vacio!')
        graphics_min.classList.add('is-invalid_create')
    } else {
        graphics_min.classList.add('is-valid_create')
        graphics_min.classList.remove('is-invalid_create')
    }
    /// VALIDACION Gráficos Recomendados
    if (graphics_rec.value == "") {
        errors.push('El campo Gráficos Recomendados no puede estar vacio!')
        graphics_rec.classList.add('is-invalid_create')
     //   setErrorFor(graphics_rec, 'Gráfico recomendado no puede estar vacío');
       
    } else {
        graphics_rec.classList.add('is-valid_create')
        graphics_rec.classList.remove('is-invalid_create')
    }


/*     function setErrorFor(input, mensaje) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'is-invalid_create';
        small.innerText = mensaje;
        console.log(formControl)
    } */
    

    let ulErrors = document.querySelector('.errors');
    ulErrors.classList.add('alert-warning_create')
    ulErrors.innerHTML = '';
    if (errors.length > 0) {
        console.log(errors)
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
