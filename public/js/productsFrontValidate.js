window.onload = function(){

  let form = document.querySelector('.form')
  form.title.focus()

    form.addEventListener('submit', (e)=>{ 
        e.preventDefault()

    let errors =[]

    //Capturo todo los inputs o text areas
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


    let smalls = document.querySelectorAll("small")
  


    //Función para configurar el error y mostrarlo por cada input 
    //Agrega color rojo al borde del input
    //Selecciona los ID's de cada input
    //A cada uno le agrega un mensaje de error    
    setErrorFor = (input, id, message) => { 
            //smalls.forEach(e => console.log(e))
            errors.push('El campo no puede estar vacio')
            input.classList.add('is-invalid_create')
            let small = document.querySelector(id)
            small.innerHTML = message; 
    } 

    //Función resetear el error
    //Selecciona los ID's de cada input
    //Resetea mensaje a nada con innerHTML vacío - o sean no hay mensaje de error-
    //Quita borde rojo y agrega verde
    setClear = (input, id) => {
            let small = document.querySelector(id)
            small.innerHTML = ""
            input.classList.remove('is-invalid_create')
            input.classList.add('is-valid_create')
    } 

    const campo = {
        vacio :"Este campo no puede estar vacío",
        imagenVacio : "Campo Imagen no puede estar vacío",
        procVacio : "Procesador no puede estar vacío",
        sisVacio : "Sist. Operativo no puede estar vacío",
        storageVacio : "Almacenamiento no puede estar vacío", 
        graphVacio : "Gráficos no puede estar vacío"
    }
 

    //VALIDACIONES POR CAMPO VACÍOS U OTROS
    //Dependiendo el valor del input invoca la función de error , si no hay error invoca función de reset para no acumular mensajes de error
    img_1.value =="" ? setErrorFor(img_1, "#img_1", "Imagen principal no puede estar vacía") : setClear(img_1, "#img_1")
    img_2.value =="" ? setErrorFor(img_2, "#img_2", campo.imagenVacio) : setClear(img_2, "#img_2")
    img_3.value =="" ? setErrorFor(img_3, "#img_3", campo.imagenVacio) : setClear(img_3, "#img_3")
    img_4.value =="" ? setErrorFor(img_4, "#img_4", campo.imagenVacio) : setClear(img_4, "#img_4")
    img_5.value =="" ? setErrorFor(img_5, "#img_5", campo.imagenVacio) : setClear(img_5, "#img_5")
    title.value =="" ? setErrorFor(title, "#title   ", "titulo no puede estar vacío") : setClear(title, "#title")
    one_word_descr.value =="" ? setErrorFor(one_word_descr, "#oneWord", campo.vacio) :  setClear(one_word_descr, "#oneWord")
    short_descr.value == "" ? setErrorFor(short_descr, "#shortDesc", "Descripción Corta no puede estar vacía") : setClear(short_descr, "#shortDesc")
    long_descr.value =="" ? setErrorFor(long_descr, "#longDesc", "Descripción Larga no puede estar vacía") : setClear(long_descr, "#longDesc")
    game_group.value == "" ? setErrorFor(game_group, "#gameGroup", "Game Group no puede estar vacía") : setClear(game_group, "#gameGroup")
    category.value =="" ?  setErrorFor(category, "#category", "Categoría no puede estar vacía") : setClear(category, "#category")


    /// VALIDACION URL youtube
    if (video_1.value =="") {
        setErrorFor(video_1, "#youtube", "URL youtube no puede estar vacío")
    } else {
        // Regex para verificar URL válido
        let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/; 
        let matchUrl = video_1.value.match(regExp); 
        
        //Si el campo no está vacío pero no es válido el Regex es un error de URL inválido
            if(matchUrl==null){
                errors.push('URL inválida')
                setErrorFor(video_1, "#youtube", "URL inválida")
                video_1.classList.add('is-invalid_create')
                video_1.classList.remove('is-valid_create')
         //Si no está vacío el campo y la URL es válida entonces sí valida OK       
            } else {
            setClear(video_1, "#youtube")
            video_1.classList.add('is-valid_create')
            video_1.classList.remove('is-invalid_create')
        } 
    }
        
    launch_date.value =="" ?  setErrorFor(launch_date, "#launchDate", "Debe colocar una fecha") : setClear(launch_date, "#launchDate")
    platform.value == "" ?  setErrorFor(platform, "#platform", "Plataformas no puede estar vacía") : setClear(platform, "#platform")
    os_min.value == "" ?  setErrorFor(os_min, "#osMin", campo.sisVacio) : setClear(os_min, "#osMin")
    os_rec.value == "" ?  setErrorFor(os_rec, "#osRec", campo.sisVacio) : setClear(os_rec, "#osRec")
    processor_min.value == "" ? setErrorFor(processor_min, "#processorMin", campo.procVacio) : setClear(processor_min, "#processorMin")
    processor_rec.value == "" ? setErrorFor(processor_rec, "#processoRec", campo.procVacio) : setClear(processor_rec, "#processoRec")
    storage_min.value == "" ? setErrorFor(storage_min, "#storageMin", campo.storageVacio) : setClear(storage_min, "#storageMin")
    storage_rec.value == "" ?  setErrorFor(storage_rec, "#storageRec", campo.storageVacio) : setClear(storage_rec, "#storageRec")
    graphics_min.value == "" ?  setErrorFor(graphics_min, "#graphicsMin", campo.graphVacio) :  setClear(graphics_min, "#graphicsMin")
    graphics_rec.value == "" ?  setErrorFor(graphics_rec, "#graphicsRec", campo.graphVacio) :  setClear(graphics_rec, "#graphicsRec")

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
