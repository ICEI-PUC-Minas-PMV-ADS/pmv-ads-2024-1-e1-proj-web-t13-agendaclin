
export class ScheduleConsultStep3Controller {
    eventData;
    constructor() {
        this.loadData();
        this.addFinishButtonEventListener();
    }
    async loadData() {
        const eventDataString = localStorage.getItem('currentSchedule');
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
                    <div  class="dados-medico">
                        <p id="nomeMedico">${doctorData.name}</p><span id="especialidadeDoMedico">${doctorData.specialty}</span>
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
        //console.log('dateString2:', dateString)
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
    addFinishButtonEventListener() {
        const buttonFinish = document.getElementById('buttonFinish');
        buttonFinish.addEventListener('click', () => {
            alert('Agendamento realizado com sucesso!');
            window.location.href = '/pmv-ads-2024-1-e1-proj-web-t13-agendaclin';
        });
        const resSchedule = document.getElementById('bottonReagendar');
        resSchedule.addEventListener('click', () => {
            this.eventData['reschedula'] = true;
            localStorage.setItem('reschedule', JSON.stringify(this.eventData));
            window.location.href = '/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/#/reschedule-consult';
        });
        const cancelConsult = document.getElementById('bottonCancelar');
        cancelConsult.addEventListener('click', () => {

            alert('Agendamento realizado com sucesso!');
        });
    }
}
