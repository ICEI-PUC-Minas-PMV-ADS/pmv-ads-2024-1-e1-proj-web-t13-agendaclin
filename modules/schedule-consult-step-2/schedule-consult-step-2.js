function salvarDados() {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const numero = document.getElementById("numeroTelefone").value;
    const informacoesAdicionais = document.getElementById("inputAdicional").value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('sobrenome', sobrenome);
    localStorage.setItem('numero', numero);
    localStorage.setItem('informacoesAdicionais', informacoesAdicionais);
}

function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const numero = document.getElementById("numeroTelefone").value;
    const numeroRegex = /^\(\d{2}\)\d{9}$/;

    if (nome === "" || sobrenome === "" || !numeroRegex.test(numero)) {
        alert("Por favor, preencha todos os campos obrigatórios corretamente.");
        return false;
    }
    return true;
}

function formatarNumero(event) {
    const input = event.target;
    const value = input.value.replace(/\D/g, '');
    let formattedValue = "";

    if (value.length > 0) {
        formattedValue = "(" + value.substring(0, 2);
    }
    if (value.length > 2) {
        formattedValue += ")" + value.substring(2, 11);
    }
    if (value.length > 11) {
        formattedValue = formattedValue.substring(0, 14);
    }

    input.value = formattedValue;
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("consultaForm");
    const numeroTelefone = document.getElementById("numeroTelefone");

    numeroTelefone.addEventListener("input", formatarNumero);

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (validarFormulario()) {
            salvarDados();
            window.location.href = "../schedule-consult-step-3/schedule-consult-step-3.html";
        }
    });
});