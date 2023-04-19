window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.querySelector('form');
    const inputEmail = document.querySelector('#inputEmail');
    const inputPassword = document.querySelector('#inputPassword');
    const inputRepetirPass = document.querySelector('#inputPasswordRepetida');
    const inputNombre = document.querySelector('#inputNombre');
    const inputApellido = document.querySelector('#inputApellido');



    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            //console.log('Preparando los Datos');
            const datos = {
                firstName: inputNombre.value,
                lastName: inputApellido.value,
                email: inputEmail.value,
                password: inputPassword.value
                
            }
    
            //console.log(datos);
            realizarLogin( datos);
        });


    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(datos) {
        const url = 'http://todo-api.ctd.academy:3000/v1/users';
        const config = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(datos)
        }

        // Fetch a la API
        fetch(  url, config ).then( response => {
            console.log(response);
            return response.json();
        } ). then(  respJSON  => {
            console.log(respJSON);

            if( respJSON.jwt){
                localStorage.setItem('jwt', respJSON.jwt);
                location.replace('index.html');
            }

        })


        
    };


});