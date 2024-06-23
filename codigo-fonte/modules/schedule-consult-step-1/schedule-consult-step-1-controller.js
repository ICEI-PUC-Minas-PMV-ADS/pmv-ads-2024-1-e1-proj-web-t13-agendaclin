import {ScheduleConsultStep1Service} from './schedule-consult-step-1-service.js';

export class ScheduleConsultStep1Controller {
    eventData;

    constructor() {
        this.service = new ScheduleConsultStep1Service();
        this.loadData();
        this.addEventListeners();
    }

    async loadData() {
        const eventData = await this.service.getEventData();
        if (eventData) {
            this.loadDoctorData(eventData);
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

        const containerSelect = document.getElementById('convenioSelect');
        containerSelect.innerHTML = '';
        const defaultOption = document.createElement('option');
        defaultOption.selected = true;
        defaultOption.disabled = true;
        defaultOption.textContent = 'Escolha seu convênio';
        containerSelect.appendChild(defaultOption);
        doctorData.insurance_accepted.push('Particular');
        const orderedInsurances = doctorData.insurance_accepted.sort((a, b) => a.localeCompare(b));
        orderedInsurances.forEach(insurance => {
            const option = document.createElement('option');
            option.value = insurance;
            option.innerText = insurance;
            containerSelect.appendChild(option);
        });
    }

    formatDateToBrasilia(dateString) {
        //console.log('dateString:', dateString)
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
        const [datePart, timePart] = formattedDate.split('às ');
        const [day, month, year] = datePart.split(' de ');
        const [time, timeZone] = timePart?.split(' ');
        return [`${day} ${month} ${year}`, `${time}`];
    }

    addEventListeners() {
        const buttonContinuar = document.getElementById('buttonContinuar');
        buttonContinuar.removeEventListener('click', this.validateForm);
        buttonContinuar.addEventListener('click', this.validateForm.bind(this));
    }

    validateForm() {
        const convenioSelect = document.getElementById('convenioSelect');
        const radioButtons = document.querySelectorAll('input[name="primeiraConsulta"]');
        const selectedRadio = Array.from(radioButtons).find(radio => radio.checked);
        const errors = [];

        if (!convenioSelect.value || convenioSelect.value === 'Escolha seu convênio') {
            errors.push('Por favor, selecione um convênio médico.');
        }

        if (!selectedRadio) {
            errors.push('Por favor, selecione se é a sua primeira consulta.');
        }

        if (errors.length > 0) {
            alert(errors.join('\n'));
        } else {
            this.submitForm(convenioSelect.value, selectedRadio.value);
        }
    }

    submitForm(convenio, primeiraConsulta) {
        this.eventData['step-1'] = {convenio, primeiraConsulta};
        const user = JSON.parse(localStorage.getItem('userToken'));
        this.eventData['username'] = user.additionalUserInfo.profile.name;
        this.eventData['email'] = user.additionalUserInfo.profile.email;
        localStorage.setItem('step1Data', JSON.stringify(this.eventData));
        window.location.href = '/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/#/schedule-consult-step-2';
    }
}
