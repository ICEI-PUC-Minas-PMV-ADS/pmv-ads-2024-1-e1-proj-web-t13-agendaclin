document.addEventListener('DOMContentLoaded', () => {
    loadMedicoData();
    setupButtons();
});

function loadMedicoData() {
    const medicoImagem = localStorage.getItem('medicoImagem');
    const medicoNome = localStorage.getItem('medicoNome');
    const medicoEspecialidade = localStorage.getItem('medicoEspecialidade');
    const consultaHorario = localStorage.getItem('consultaHorario');
    const consultaLocal = localStorage.getItem('consultaLocal');

    if (medicoImagem || medicoNome || medicoEspecialidade || consultaHorario || consultaLocal) {
        document.getElementById('imagemMedico').src = medicoImagem;
        document.getElementById('nomeMedico').innerHTML = `${medicoNome}<br><span id="especialidadeDoMedico">${medicoEspecialidade}</span>`;
        document.getElementById('dadosHorario').querySelector('p').innerHTML = consultaHorario;
        document.getElementById('local').innerHTML = consultaLocal;
    } else {
        console.error('Dados do médico não disponíveis no localStorage');
    }
}

function setupButtons() {
    const buttonReschedule = document.getElementById('buttonReschedule');
    const buttonCancel = document.getElementById('buttonCancel');

    buttonReschedule.addEventListener('click', () => {
        window.location.href = '../schedule-consult-step-1/schedule-consult-step-1.html';
    });

    buttonCancel.addEventListener('click', () => {
        alert('Consulta cancelada com sucesso!');
        window.location.href = "../cancel-consult/cancel-consult.html";
    });
}