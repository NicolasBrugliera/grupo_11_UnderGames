
window.onload = function () {

    const form = document.querySelector('.register-form');
    form.name.focus()

    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        let errors = []

        // let tos = document.querySelector('#tos')
        let name = document.querySelector('[name="name"]')
        let lierror1 = document.querySelector('[name="lierror1"]')
        let surname = document.querySelector('[name="surname"]')
        let lierror2 = document.querySelector('[name="lierror2"]')
        let email = document.querySelector('[name="email"]')
        let smallEmailError = document.querySelector('[name="smallEmailError"]')
        let gamertag = document.querySelector('[name="gamertag"]')
        let smallGamerTagError = document.querySelector('[name="smallGamerTagError"]')
        let password = document.querySelector('[name="password"]')
        let smallErrorPassword = document.querySelector('[name="smallErrorPassword"]')
        let smallErrorPassword2 = document.querySelector('[name="smallErrorPassword2"]')
        let smallErrorPassword3 = document.querySelector('[name="smallErrorPassword3"]')
        let repetedpassword = document.querySelector('[name="repeted-password"]')
        let smallErrorPassword4 = document.querySelector('[name="smallErrorPassword4"]')
        let smallErrorPassword5 = document.querySelector('[name="smallErrorPassword5"]')
        let smallErrorPassword6 = document.querySelector('[name="smallErrorPassword6"]')
        let smallErrorImg = document.querySelector('.imgRegister')
        let errorImgReg = document.querySelector('[name="errorImgReg"]')
        
        //validacion Nombre
        if (name.value == '') {
            errors.push('El campo Nombre no puede estar vacio!')
            name.classList.add('is-invalid_registerUser')
            lierror1.classList.add('lierror1True')
         
        }
        else {
            name.classList.add('is-valid_registerUser')
            name.classList.remove('is-invalid_registerUser')
            lierror1.classList.remove('lierror1True')
        }

        //validacion apellido
        if (surname.value == '') {
            errors.push('El campo surname no puede estar vacio!')
            surname.classList.add('is-invalid_registerUser')
            lierror2.classList.add('lierror2True')
        }
        else {
            surname.classList.add('is-valid_registerUser')
            surname.classList.remove('is-invalid_registerUser')
            lierror2.classList.remove('lierror2True')
        }
        //validacion email
        if (email.value == '') {
            errors.push('El campo email no puede estar vacio!')
            email.classList.add('is-invalid_registerUser')
            smallEmailError.classList.add('smallEmailErrortrue')

        }
        
        else {

            email.classList.add('is-valid_registerUser')
            email.classList.remove('is-invalid_registerUser')
            smallEmailError.classList.remove('smallEmailErrortrue')
        }
        //validacion gamertag
        if (gamertag.value == '') {
            errors.push('El campo gamertag no puede estar vacio!')
            gamertag.classList.add('is-invalid_registerUser')
            smallGamerTagError.classList.add('smallGamerTagErrortrue')
        }
        else {
            gamertag.classList.add('is-valid_registerUser')
            gamertag.classList.remove('is-invalid_registerUser')
            smallGamerTagError.classList.remove('smallGamerTagErrortrue')

        }
        //validacion Password smallErrorPassword
        if (password.value == '') {
            errors.push('El campo password no puede estar vacio!')
            password.classList.add('is-invalid_registerUser')
            smallErrorPassword.classList.add('smallErrorPasswordTrue')
        }
        

        else {
            password.classList.add('is-valid_registerUser')
            password.classList.remove('is-invalid_registerUser')
            smallErrorPassword.classList.remove('smallErrorPasswordTrue')
        }
        //validacion password match
        if (password.value !== repetedpassword.value ) {
            errors.push('Las contraseñas no son iguales!')
            password.classList.add('is-invalid_registerUser')
            smallErrorPassword3.classList.add('smallErrorPassword3True')
            smallErrorPassword6.classList.add('smallErrorPassword6True')
        }
        

        else {
            password.classList.add('is-valid_registerUser')
            password.classList.remove('is-invalid_registerUser')
            smallErrorPassword3.classList.remove('smallErrorPassword3True')
            smallErrorPassword6.classList.remove('smallErrorPassword6True')
        }
        //validacion password length
        if (password.value.length <= 5) {
            errors.push('Las contraseñas deben tener 6 caracteres como minimo!')
            password.classList.add('is-invalid_registerUser')
            smallErrorPassword2.classList.add('smallErrorPassword2True')
        }
        

        else {
            password.classList.add('is-valid_registerUser')
            password.classList.remove('is-invalid_registerUser')
            smallErrorPassword2.classList.remove('smallErrorPassword2True')
        }

        //validacion repeted password length

        if (repetedpassword.value.length <= 5 ) {
            errors.push('Las contraseñas deben tener 6 caracteres como minimo!')
            repetedpassword.classList.add('is-invalid_registerUser')
            smallErrorPassword3.classList.add('smallErrorPassword3True')
            smallErrorPassword5.classList.add('smallErrorPassword5True')
        }
        

        else {
            repetedpassword.classList.add('is-valid_registerUser')
            repetedpassword.classList.remove('is-invalid_registerUser')
            smallErrorPassword5.classList.remove('smallErrorPassword5True')
            smallErrorPassword3.classList.remove('smallErrorPassword3True')
        }
        
        //validacion repeted-Password
        if (repetedpassword.value == '') {
            errors.push('El campo repeted Password no puede estar vacio!')
            repetedpassword.classList.add('is-invalid_registerUser')
            smallErrorPassword4.classList.add('smallErrorPassword4True')
        }
        else {
            repetedpassword.classList.add('is-valid_registerUser')
            repetedpassword.classList.remove('is-invalid_registerUser')
            smallErrorPassword4.classList.remove('smallErrorPassword4True')
        }

        if(smallErrorImg.value == "" ){
            smallErrorImg.classList.add('imgRegErrorTrue')
            errorImgReg.classList.add('imgRegErrorTrue')

        }
        else{
            smallErrorImg.classList.remove('imgRegErrorTrue')
            errorImgReg.classList.remove('imgRegErrorTrue')
        }
        console.log(smallErrorImg.value)
      
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
                // tos: e.target.tos.value
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


















