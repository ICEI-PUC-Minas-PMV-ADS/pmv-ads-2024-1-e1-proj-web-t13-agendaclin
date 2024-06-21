export class DoctorProfessionalProfileController {
    constructor() {
        this.loadSegment();
        this.setupEventListeners();
        this.setupSaveButtonListener();
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
}

new DoctorProfessionalProfileController();
