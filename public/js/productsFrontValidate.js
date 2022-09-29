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

  

 


    function setErrorFor(input, id, message) { 
        errors.push('El campo imagen no puede estar vacio')
        input.classList.add('is-invalid_create')
        let small = document.querySelector(id)
        small.innerHTML = message
} 

function setClear (input, id){
        let small = document.querySelector(id)
        small.innerHTML = ""
        input.classList.remove('is-invalid_create')
        input.classList.add('is-valid_create')
    } 
 
     if (img_1.value =="") {

        setErrorFor(img_1, "#img_1", "Imagen Principal no puede estar vacío")
    } else{
        setClear(img_1, "#img_1")
    }
 

    if (img_2.value =="") {
        setErrorFor(img_2, "#img_2", "Campo Imagen no puede estar vacío")
    } else {
        setClear(img_2, "#img_2")
    }


    if (img_3.value =="") {
        setErrorFor(img_3, "#img_3", "Campo Imagen no puede estar vacío")
       
    } else {
        setClear(img_3, "#img_3")
    }


    if (img_4.value =="") {
        setErrorFor(img_4, "#img_4", "Campo Imagen no puede estar vacío")
    } else {
        setClear(img_4, "#img_4")
    }

    if (img_5.value =="") {
        setErrorFor(img_5, "#img_5", "Campo Imagen no puede estar vacío")
    } else {
        setClear(img_5, "#img_5")
    }



    //validación Titulo de juego
    if (title.value =="") {
        setErrorFor(title, "#title", "titulo no puede estar vacío")
    } else {
        setClear(title, "#title")
    }
    /// VALIDACION Descripción One Word
    if (one_word_descr.value =="") {
        setErrorFor(one_word_descr, "#oneWord", "Este campo no puede estar vacío")
    } else {
        setClear(one_word_descr, "#oneWord")
    }
    /// VALIDACION short_descr 
    if (short_descr.value == "") {
        setErrorFor(short_descr, "#shortDesc", "Descripción Corta no puede estar vacía")
    } else {
        setClear(short_descr, "#shortDesc")
    }
    /// VALIDACION Long Description
    if (long_descr.value =="") {
        setErrorFor(long_descr, "#longDesc", "Descripción Larga no puede estar vacía")
    } else {
        setClear(long_descr, "#longDesc")
    }
    /// VALIDACION Game Group
    if (game_group.value == "") {
        setErrorFor(game_group, "#gameGroup", "Game Group no puede estar vacía")
    } else {
        setClear(game_group, "#gameGroup")
        
    }
    /// VALIDACION Categoría
    if (category.value =="") {
        setErrorFor(category, "#category", "Categoría no puede estar vacía")
    } else {
        setClear(category, "#category")
    }

    /// VALIDACION youtube url
    if (video_1.value =="") {
        setErrorFor(video_1, "#youtube", "URL youtube no puede estar vacío")
    } else {
        let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        let matchUrl = video_1.value.match(regExp);
        
            if(matchUrl==null){
                errors.push('URL inválida')
                setErrorFor(video_1, "#youtube", "URL inválida")
                video_1.classList.add('is-invalid_create')
                video_1.classList.remove('is-valid_create')
            } else {
            setClear(video_1, "#youtube")
            video_1.classList.add('is-valid_create')
            video_1.classList.remove('is-invalid_create')
        } 
    }
        

    if (launch_date.value =="") {
        setErrorFor(launch_date, "#launchDate", "Debe colocar una fecha")
 
    } else {
        setClear(launch_date, "#launchDate")
    }


   if (platform.value == "") {
        setErrorFor(platform, "#platform", "Plataformas no puede estar vacía")
    } else {
        setClear(platform, "#platform")
    } 


     if (os_min.value == "") {
        setErrorFor(os_min, "#osMin", "Sist. Operativo no puede estar vacío")
    } else {
        setClear(os_min, "#osMin")
    }


    if (os_rec.value == "") {
        setErrorFor(os_rec, "#osRec", "Sist. Operativo no puede estar vacío")
    } else {
        setClear(os_rec, "#osRec")
    }

    if (processor_min.value == "") {
        setErrorFor(processor_min, "#processorMin", "Procesador no puede estar vacío")
    } else {
        setClear(processor_min, "#processorMin")
    }

    if (processor_rec.value == "") {
        setErrorFor(processor_rec, "#processoRec", "Procesador no puede estar vacío")
    } else {
        setClear(processor_rec, "#processoRec")
    }

    if (storage_min.value == "") {
        setErrorFor(storage_min, "#storageMin", "Almacenamiento no puede estar vacío")
    } else {
        setClear(storage_min, "#storageMin")
    }

    if (storage_rec.value == "") {
        setErrorFor(storage_rec, "#storageRec", "Almacenamiento no puede estar vacío")
    } else {
        setClear(storage_rec, "#storageRec")
    }

    if (graphics_min.value == "") {
        setErrorFor(graphics_min, "#graphicsMin", "Gráficos no puede estar vacía")
    } else {
        setClear(graphics_min, "#graphicsMin")
    }
 
    if (graphics_rec.value == "") {
        setErrorFor(graphics_rec, "#graphicsRec", "Gráficos no puede estar vacía")
    } else {
        setClear(graphics_rec, "#graphicsRec")
    }


    let ulErrors = document.querySelector('.errors');

    ulErrors.innerHTML = '';
    if (errors.length > 0) {
        
        ulErrors.innerHTML = '';
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Revise los errores!',
           
        })

    } else {
        form.submit()
    }
  }
)}
