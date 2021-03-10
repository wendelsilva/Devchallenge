var capturando = "";
 
document.getElementById('fmail').oninvalid = function remover (evt) {
    evt.preventDefault();
    if(!this.validity.valid){
        capturando = document.getElementById('fmail').value;
        window.alert(capturando);
        {
            if (capturando.includes('@')){
                window.alert('ok');
            } else {
                var orientacao = document.getElementById('fmail');
                var aviso = document.getElementById('error');
                error.innerHTML = "<p>Por favor, insira um e-mail válido<p>";
                capturando();
                orientacao.setAttribute("placeholder", "email@exemplo");
            }
        }  
    }
}  
