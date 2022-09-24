
window.onload = function () {

    let form = document.querySelector('.log-in-form');
    form.email.focus()




    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        let errors = []

        let email = document.querySelector('[name="email"]')        
        let password = document.querySelector('[name="password"]')
       
        

        //validacion email
        if (email.value == '') {
            errors.push('El campo email no puede estar vacio!')
            email.classList.add('is-invalid_login')

        }
        
        else {

            email.classList.add('is-valid_login')
            email.classList.remove('is-invalid_login')
        }

        //validacion Password
        if (password.value == '') {
            errors.push('El campo password no puede estar vacio!')
            password.classList.add('is-invalid_login')
        }
        

        else {
            password.classList.add('is-valid_login')
            password.classList.remove('is-invalid_login')
        }
        
        //validacion password length
        if (password.value.length <= 5 ) {
            errors.push('La contraseña deben tener 6 caracteres como minimo')
            password.classList.add('is-invalid_login')
        }
        

        else {
            password.classList.add('is-valid_login')
            password.classList.remove('is-invalid_login')
        }
    
        

        let ulErrors = document.querySelector('.errors');
        ulErrors.classList.add('alert-warning_login')
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
                
                email: e.target.email.value,                
                password: e.target.password.value,
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

