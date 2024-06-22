import { ScheduleConsultStep2Service } from './schedule-consult-step-2-service.js';

export class ScheduleConsultStep2Controller {
    constructor() {
        this.service = new ScheduleConsultStep2Service();
        this.init();
    }

    init() {
        console.log('init function called');
        this.loadMedicoData();

        const form = document.getElementById("consultaForm");
        const numeroTelefone = document.getElementById("numeroTelefone");

        numeroTelefone.addEventListener("input", (event) => {
            console.log('Phone number input detected');
            event.target.value = this.service.formatarNumero(event.target.value);
        });

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log('Form submit event detected');

            const dados = {
                nome: document.getElementById("nome").value,
                sobrenome: document.getElementById("sobrenome").value,
                numero: document.getElementById("numeroTelefone").value,
                informacoesAdicionais: document.getElementById("inputAdicional").value
            };

            if (this.service.validarFormulario(dados)) {
                this.service.salvarDados(dados);
                console.log('Form data valid and saved');
                window.location.href = "../schedule-consult-step-3/schedule-consult-step-3.html";
            }
        });
    }

    loadMedicoData() {
        const medico = this.service.getDadosMedico();
        console.log('Medico data loaded', medico);

        if (medico.imagem || medico.nome || medico.especialidade || medico.horario || medico.local) {
            document.getElementById('imagemMedico').src = medico.imagem;
            document.getElementById('nomeMedico').innerHTML = `${medico.nome}<br><span id="especialidadeDoMedico">${medico.especialidade}</span>`;
            document.getElementById('horarioConsulta').innerHTML = medico.horario;
            document.getElementById('local').innerHTML = medico.local;
        } else {
            console.error('Medico data not available in localStorage');
        }
    }
}
