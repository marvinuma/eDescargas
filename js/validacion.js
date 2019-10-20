(function(){
    var validacion = {
        username:{},
        formulario:{},
        login:{},
        password:{},
        btnIniciarSesion:{},
        inicializar: function(){
        this.formulario = document.getElementById('contactoFrm');
            this.login = document.getElementById('txtLogin');
            this.password = document.getElementById('txtPassword');
            this.btnIniciarSesion = document.getElementById('btnLogin');
            this.binding();
        },
        binding:function(){
            this.btnIniciarSesion.onclick = this.validarFrm;
        },
        validarFrm:function(e){
            e.preventDefault();
            var verifica = true;
            var expReglogin = /^[a-zA-ZÑñáéíóúÁÉÍÓÚÜü\.]+$/;
            if (!validacion.login.value) {
                alert('Ingrese su usuario');
                validacion.login.focus();
                verifica = false;
            } else if (!expReglogin.exec(validacion.login.value)) {
                alert('El campo Usuario no acepta caracteres especiales, numeros '
                    + 'ni espacios en blanco');
                validacion.login.focus();
                verifica = false;
            } else if (!validacion.password.value) {
                alert('El campo password es requerido');
                validacion.password.focus();
                verifica = false;
            }
            if(verifica){
                location.href="html/main.html";
                this.username = document.getElementById('txtLogin');
            }
        },
    }

    
    validacion.inicializar();
})()