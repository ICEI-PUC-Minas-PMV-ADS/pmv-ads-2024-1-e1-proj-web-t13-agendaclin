import DoctorProfessionalProfileService from "./doctor-professional-profile-service.js";
export class DoctorProfessionalProfileController {
    doctorProfessionalProfileService = new DoctorProfessionalProfileService();
    currentDoctor;
    constructor() {
        this.loadSegment();

        this.setupSaveButtonListener();
        this.loadDoctorProfile();
    }

    setupEventListeners() {
        const currentDoctor = 1;
        const calendarId = `calendar-${currentDoctor}`;
        const container = document.getElementById('doctor-container');
        container.innerHTML = `<div id='${calendarId}' class='calendar'></div>`;
        const calendarEl = document.getElementById(calendarId);
        const calendar = new FullCalendar.Calendar(calendarEl, {
            locale: 'pt-br',
            initialView: 'timeGridWeek',
            slotDuration: '00:45:00',
            slotLabelInterval: '00:45:00',
            slotLabelFormat: {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            },
            allDaySlot: false,
            nowIndicator: true,
            height: 'auto',
            headerToolbar: {
                left: '',
                center: '',
                right: ''
            },
            hiddenDays: [0, 6],
            dayHeaderFormat: {
                weekday: 'long',
                day: 'numeric',
                month: 'numeric',
                omitCommas: true,
            },
            expandRows: true,
            slotMinTime: '8:00:00',
            slotMaxTime: '18:00:00',
            events: this.loadEvents(calendarId),
        });
        calendar.render();
        const timeGridSlots = calendarEl.querySelectorAll('.fc-timegrid-slot');
        timeGridSlots.forEach(slot => {
            slot.style.height = '25px';
        });
    }

    loadEvents(calendarId) {
        const events = JSON.parse(localStorage.getItem('events')) || [];
        if ( events.filter(element => element !== null).length === 0) return [];
        return events.filter(event => event.calendarId === calendarId);
    }

    loadSegment() {
        const segmentButtons = document.querySelectorAll('.segment-button');
        segmentButtons.forEach(button => {
            button.addEventListener('click', function () {
                segmentButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    setupSaveButtonListener() {
        const saveButton = document.getElementById('salvar');

        // Remover qualquer listener existente para evitar duplicação
        saveButton.removeEventListener('click', this.handleSaveButtonClick);

        // Adicionar o listener novamente
        saveButton.addEventListener('click', this.handleSaveButtonClick);
    }

    handleSaveButtonClick(event) {
        event.preventDefault();
        const endereco = document.getElementById('endereço').value;
        const numero = document.getElementById('numero').value;
        const sobreMim = document.getElementById('sobreMim').value;
        const experiencia = document.getElementById('experiencia').value;
        const formacao = document.getElementById('formaçao').value;

        const doctorProfile = {
            endereco,
            numero,
            sobreMim,
            experiencia,
            formacao
        };
        console.log(doctorProfile);
        localStorage.setItem('doctorProfile', JSON.stringify(doctorProfile));
        alert('Dados salvos com sucesso!');
    }

  async  loadDoctorProfile() {
        this.currentDoctor = JSON.parse(localStorage.getItem('novoMedico')) || '';
        if (!this.currentDoctor) {
            this.currentDoctor = await this.doctorProfessionalProfileService.fetchData(localStorage.getItem('loggedDoctor') || '') ;
        }
      localStorage.setItem('currentDashboard', JSON.stringify(this.currentDoctor));
        const container = document.getElementById('doctor-card');
        const profilePicture = this.currentDoctor.profile_pic_url || '../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/medico.png';
        container.innerHTML = ` <div class="profile">
                <img src="${profilePicture}" alt="Dra. Sofia Martinez Rivera"
                     class="profile-img">
                <div style="font-size: 18px;">
                    <h3 style="color: #0367A5;">${this.currentDoctor.name}</h3>
                    <p class="escritas">${this.currentDoctor.specialty}</p>
                    <p class="escritas">Número de Registro: 63215</p>
                    <div class="estrelas">
                        <img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/5%20estrelas.svg" alt="">
                    </div>
                </div>
            </div>
            <div id="doctor-container"></div>`
        this.setupEventListeners();
    }
}

new DoctorProfessionalProfileController();
