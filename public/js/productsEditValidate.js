window.onload = function(){

    let form = document.querySelector('.form')
    form.title.focus()
  
      form.addEventListener('submit', (e)=>{ 
          e.preventDefault()
  
      let errors =[]
  
      //Capturo todo los inputs o text areas

  
      let title = document.querySelector("[name='title']")
      let one_word_descr = document.querySelector('[name="one_word_descr"]')
      let short_descr = document.querySelector('[name="short_descr"]')
      let long_descr = document.querySelector('[name="long_descr"]')
      let game_group = document.querySelector('[name="game_group"]')
      let video_1 = document.querySelector('[name="video_1"]')
  
  
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

      title.value =="" ? setErrorFor(title, "#title   ", "titulo no puede estar vacío") : setClear(title, "#title")
      one_word_descr.value =="" ? setErrorFor(one_word_descr, "#oneWord", campo.vacio) :  setClear(one_word_descr, "#oneWord")
      short_descr.value == "" ? setErrorFor(short_descr, "#shortDesc", "Descripción Corta no puede estar vacía") : setClear(short_descr, "#shortDesc")
      long_descr.value =="" ? setErrorFor(long_descr, "#longDesc", "Descripción Larga no puede estar vacía") : setClear(long_descr, "#longDesc")
 
  
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
  