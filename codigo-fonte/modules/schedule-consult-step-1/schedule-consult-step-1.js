const buttonContinuar = document.getElementById("buttonContinuar");

function salvarDados() {
    const convenio = document.getElementById("convenioSelect").value;
    const primeiraConsultaElement = document.querySelector('input[name="primeiraConsulta"]:checked');

    const primeiraConsulta = primeiraConsultaElement ? primeiraConsultaElement.value : '';

    localStorage.setItem('convenio', convenio);
    localStorage.setItem('primeiraConsulta', primeiraConsulta);
}

function validarFormulario() {
    const convenio = document.getElementById("convenioSelect").value;

    if (convenio === "Selecione") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    return true;
}

buttonContinuar.addEventListener("click", function() {
    if (validarFormulario()) {
        salvarDados();
        window.location.href = "../schedule-consult-step-2/schedule-consult-step-2.html";
    }
});