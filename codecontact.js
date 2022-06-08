var button = document.getElementById('subb');

button.addEventListener('click', function clickk(){
    var formularioo = document.querySelector('#formulario');
    var nameValido = false;
    var emailValido = false;
    var mensajeValido = false;
    if (formularioo.name.value==0){
        formularioo.name.style.backgroundColor = 'rgba(184, 45, 45, 0.445)';
    }else{
        nameValido=true;
        formularioo.name.style.backgroundColor = 'rgb(255, 255, 255)';
    }
    if (formularioo.email.value==0){
        formularioo.email.style.backgroundColor = 'rgba(184, 45, 45, 0.445)';
    }else{
        emailValido=true;
        formularioo.email.style.backgroundColor = 'rgb(255, 255, 255)';
    }
    if(nameValido==true && emailValido==true){
        button.setAttribute("form", "formulario")
        const form = document.querySelector('#formulario');
        event.preventDefault();
        alertify.success('Su mensaje ha sido enviado');
        formularioo.reset();
        console.log("send");
    }
});
