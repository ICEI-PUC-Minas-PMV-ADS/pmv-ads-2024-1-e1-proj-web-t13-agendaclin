import { ScheduleConsultStep2Service } from './schedule-consult-step-2-service.js';

export class ScheduleConsultStep2Controller {
    service = new ScheduleConsultStep2Service();
    constructor() {
        this.loadData();
        this.addFormEventListener();
    }

    async loadData() {
        const eventDataString = localStorage.getItem('step1Data');
        if (eventDataString) {
            this.loadDoctorData(JSON.parse(eventDataString));
        } else {
            console.error('No event data found in localStorage');
        }
    }

    loadDoctorData(eventData) {
        this.eventData = eventData;
        const doctorData = eventData.doctor;
        const starDate = this.formatDateToBrasilia(eventData.start);
        const container = document.getElementById('tableMedico');
        container.innerHTML = `
            <div id="containerDadosTable">
                <div id="dadosMedico">
                    <div id="containerImagemMedico">
                        <img id="imagemMedico" src="${doctorData.profile_pic_url}" alt="Foto do médico">
                    </div>
                    <div id="containerNomeMedico">
                        <p id="nomeMedico">${doctorData.name}<br><span id="especialidadeDoMedico">${doctorData.specialty}</span></p>
                    </div>
                </div>
                <div id="dadosHorario">
                    <div id="containerIconCalendar">
                        <img id="iconCalendar" src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/calendar.png">
                    </div>
                    <span>${starDate[0]},
                        <time datetime="${eventData.start}">${starDate[1]}</time>
                        <br> Fuso horário de Brasília
                    </span>
                </div>
                <div id="dadosLocal">
                    <div id="containerIconLocal">
                        <img id="iconLocal" src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/local.png" alt="Ícone de localização">
                    </div>
                    <div class="containerLocal">
                        <div class="tituloLocal">Endereço</div>
                        <div id="local">
                            ${doctorData.street}, ${doctorData.neighborhood}, ${doctorData.city}, CEP ${doctorData.zip_code}, Brasil
                        </div>
                    </div>
                </div>
            </div>`;
    }

    formatDateToBrasilia(dateString) {
        console.log('dateString2:', dateString)
        const date = new Date(dateString);
        const options = {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'America/Sao_Paulo',
            timeZoneName: 'short'
        };
        const formatter = new Intl.DateTimeFormat('pt-BR', options);
        const formattedDate = formatter.format(date);
        const [datePart, timePart] = formattedDate.split(' às ');
        const [day, month, year] = datePart.split(' de ');
        const [time, timeZone] = timePart?.split(' ');
        return [`${day} de ${month} de ${year}`, `${time}`];
    }

    addFormEventListener() {
        const form = document.getElementById('consultaForm');
        form.addEventListener('submit', (event) => this.handleSubmit(event));
    }

    handleSubmit(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = document.getElementById('nome').value.trim();
        const sobrenome = document.getElementById('sobrenome').value.trim();
        const numeroTelefone = document.getElementById('numeroTelefone').value.trim();
        const informacoesAdicionais = document.getElementById('inputAdicional').value.trim();

        const invalidFields = this.validateForm(nome, sobrenome, numeroTelefone);

        if (invalidFields.length === 0) {
            const formData = {
                nome,
                sobrenome,
                numeroTelefone,
            };
            this.eventData['step-2'] = formData;
            const allSchedules = localStorage.getItem('allSchedules');
            if (allSchedules) {
                const schedules = JSON.parse(allSchedules);
                schedules.push(this.eventData);
                localStorage.setItem('allSchedules', JSON.stringify(schedules));
            } else {
                localStorage.setItem('allSchedules', JSON.stringify([this.eventData]));
            }
            localStorage.setItem('currentSchedule', JSON.stringify(this.eventData));
            window.location.href = '/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/#/schedule-consult-step-3';
        } else {
            alert(`Por favor, corrija os seguintes campos:\n${invalidFields.join('\n')}`);
        }
    }

    validateForm(nome, sobrenome, numeroTelefone) {
        const invalidFields = [];

        if (!nome) {
            invalidFields.push('Nome');
        }

        if (!sobrenome) {
            invalidFields.push('Sobrenome');
        }

        const telefoneRegex = /^\(\d{2}\)\d{8,9}$/; // Exemplo de regex para número de telefone no formato (11)987654321
        if (!numeroTelefone || !telefoneRegex.test(numeroTelefone)) {
            invalidFields.push('Número de telefone (formato esperado: (11)987654321)');
        }

        return invalidFields;
    }
}
