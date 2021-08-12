let form = document.querySelector('.form-auth');
let inputs = document.querySelectorAll('.form-auth input');
let mensagemErro = document.querySelector('erro');

//inputs.innerHTML += '<input type="data" name="datanasc" placeholder="Digite sua data de nascimento">'

form.addEventListener('submit', (evento) => {

    evento.preventDefault();
    let erro = 0

    inputs.filter((input) => input.value == "");

    if (erro > 0) {
        mensagemErro.innerText = "Erro campo vazio";
        mensagemErro.style.color = '#a5000';
    } else {
        form.submit();
    }

})