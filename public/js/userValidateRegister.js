
window.onload = function () {

    const form = document.querySelector('.register-form');
    form.name.focus()

    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        let errors = []

        // let tos = document.querySelector('#tos')
        let name = document.querySelector('[name="name"]')
        let surname = document.querySelector('[name="surname"]')
        let email = document.querySelector('[name="email"]')
        let gamertag = document.querySelector('[name="gamertag"]')
        let password = document.querySelector('[name="password"]')
        let repetedpassword = document.querySelector('[name="repeted-password"]')
        
        //validacion Nombre
        if (name.value == '') {
            errors.push('El campo Nombre no puede estar vacio!')
            name.classList.add('is-invalid_registerUser')
        }
        else {
            name.classList.add('is-valid_registerUser')
            name.classList.remove('is-invalid_registerUser')
        }
        //validacion tos
        // if (tos.value !== "on" ) {
        //     errors.push('El campo tos no puede estar vacio!')
        //     tos.classList.add('is-invalid_registerUser')
        // }
        // else {
        //     tos.classList.add('is-valid_registerUser')
        //     tos.classList.remove('is-invalid_registerUser')
        // }
        //validacion apellido
        if (surname.value == '') {
            errors.push('El campo surname no puede estar vacio!')
            surname.classList.add('is-invalid_registerUser')
        }
        else {
            surname.classList.add('is-valid_registerUser')
            surname.classList.remove('is-invalid_registerUser')
        }
        //validacion email
        if (email.value == '') {
            errors.push('El campo email no puede estar vacio!')
            email.classList.add('is-invalid_registerUser')

        }
        
        else {

            email.classList.add('is-valid_registerUser')
            email.classList.remove('is-invalid_registerUser')
        }
        //validacion gamertag
        if (gamertag.value == '') {
            errors.push('El campo gamertag no puede estar vacio!')
            gamertag.classList.add('is-invalid_registerUser')
        }
        else {
            gamertag.classList.add('is-valid_registerUser')
            gamertag.classList.remove('is-invalid_registerUser')

        }
        //validacion Password
        if (password.value == '') {
            errors.push('El campo password no puede estar vacio!')
            password.classList.add('is-invalid_registerUser')
        }
        

        else {
            password.classList.add('is-valid_registerUser')
            password.classList.remove('is-invalid_registerUser')
        }
        //validacion password match
        if (password.value !== repetedpassword.value ) {
            errors.push('Las contraseñas no son iguales!')
            password.classList.add('is-invalid_registerUser')
        }
        

        else {
            password.classList.add('is-valid_registerUser')
            password.classList.remove('is-invalid_registerUser')
        }
        //validacion password length
        if (password.value.length <= 5 || repetedpassword.value.length <= 5 ) {
            errors.push('Las contraseñas deben tener 6 caracteres como minimo!')
            password.classList.add('is-invalid_registerUser')
        }
        

        else {
            password.classList.add('is-valid_registerUser')
            password.classList.remove('is-invalid_registerUser')
        }
    
        
        //validacion repeted-Password
        if (repetedpassword.value == '') {
            errors.push('El campo repeted Password no puede estar vacio!')
            repetedpassword.classList.add('is-invalid_registerUser')
        }
        else {
            repetedpassword.classList.add('is-valid_registerUser')
            repetedpassword.classList.remove('is-invalid_registerUser')
        }
      
        let ulErrors = document.querySelector('.errors');
        ulErrors.classList.add('alert-warning_register')
        ulErrors.innerHTML = '';
        if (errors.length > 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Revise los errores!',
            })
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `<li > ${errors[i]} </li>`
            }
        }
        else {
        
            const body = {
                name: e.target.name.value,
                surname: e.target.surname.value,
                email: e.target.email.value,
                gamertag: e.target.gamertag.value,
                password: e.target.password.value,
                repetedpassword: e.target.repeted-password.value,
            
                tos: e.target.tos.value
            }
            
            form.submit()
            // POST
        //   let  handleGetJson = () => {
        //         fetch(`/users/register`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'Accept': 'application/json'
        //             }
        //         })
        //             .then(res => res.json())
        //             .then(data => console.log(data))
        //     }
           
            // const fetchResponse = await fetch("api/users/create", {
            //     method: 'POST',
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(body)
            // })
            
            // let res = await fetchResponse.json()
            // if (res.meta.status == 200) {
            //     ulErrors.innerHTML = '';
            //     Swal.fire(
            //         'Muy bien!',
            //         'Te registraste',

            //         'success'
            //     )
            // }
            // else {
            //     Swal.fire({
            //         icon: 'error',
            //         title: 'Oops...',
            //         text: 'Hubo un error al registrarse!',
            //     })
            // }
        }


    })

}


















