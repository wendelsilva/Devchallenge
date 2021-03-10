var capturando = "";
 
document.getElementById('fmail').oninvalid = function remover (evt) {
    evt.preventDefault();
    if(!this.validity.valid){
        capturando = document.getElementById('fmail').value;
        if (capturando.includes('@')){

        } else {
            var orientacao = document.getElementById('fmail');
            var aviso = document.getElementById('error');
            document.getElementById('lpass').value = "";
            document.getElementById('at').style.color = "#ff5757";
            aviso.innerHTML = "<p>Por favor, insira um e-mail válido<p>";
            orientacao.value = "";
            orientacao.setAttribute("placeholder", "email@exemplo");
            orientacao.style.border = "solid #ff5757";
        } 
    }
}  
