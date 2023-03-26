//Envio Formulario Contacto

//Si quieres modificar esto debes crear una cuenta de EmailJs
//Posteriormente en tus usuarios te aparece una llave publica es lo que debes ponner aqui abajo
    emailjs.init('BedYqVTm__44I21gX')
    const btn = document.getElementById('button-contacto');

    document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    //Crea un template llenalo con tu información y automaticamente se te genera un templateID
    //Despues da de alta el servicio de tu preferencia GMAIL, OUTLOOK entre otros
    //Ahí se te generara tu serviceID 

    const serviceID = "service_7ewp737";
    const templateID = "template_qjn7xxb";

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {

            Swal.fire({
                icon: 'success',
                title: 'Se envió el mensaje',
                timer: 2500,
                showConfirmButton: false
              })

        window.location = "contacto.html";

        }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
        });
    });


