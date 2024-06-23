export class RescheduleConsultController {
    currentReschedule;
    currentDoctorEvents = [];
    allPlatformSchedules = [];
    calendar;

    constructor() {
        this.setupEventListeners();
        this.loadDoctorData();
    }
    loadDoctorData() {
        this.allPlatformSchedules = JSON.parse(localStorage.getItem('allSchedules')) || [];
        this.currentReschedule = JSON.parse(localStorage.getItem('reschedule'));
        this.currentDoctorEvents = this.allPlatformSchedules.filter(schedule => schedule.doctor.id ===  this.currentReschedule.doctor.id)

        const container = document.getElementById('doctor-card');
        container.innerHTML = ` <div class="dra">
                                <img class="doctor" src="${this.currentReschedule.doctor.profile_pic_url}">
                            </div>
                            <div class="reagendar">
                                <p>Reagendar consulta</p>
                            </div>
                            <div class="informações">
                                <img src="../../assets/icon/medico.png"/>
                                <span>${this.currentReschedule.doctor.name}<br>
                                    ${this.currentReschedule.doctor.specialty}</span>
                            </div>
                            <div class="selecionar">
                                <p>Selecione data e horário</p>
                            </div>
                            <div id="doctor-container"></div>`; // Limpa o conteúdo existente

        console.log('this.currentDoctorEvents:',this.currentDoctorEvents);
        console.log('currentReschedule:', this.currentReschedule);
        this.loadCalendar()
    }
    setupEventListeners() {
        document.getElementById('closeConfirmationModalButton').addEventListener('click', function () {
            $('#eventModal').modal('hide');
        });
        document.getElementById('closeSuccessModalButton').addEventListener('click', function () {
            $('#successModal').modal('hide');
            window.location.href = '/';
        });
        document.getElementById('closeSuccessModalIcon').addEventListener('click', function () {
            $('#successModal').modal('hide');
            window.location.href = '/';
        });
        document.getElementById('confirmEventBtn').addEventListener('click', this.confirmEvent.bind(this));
        document.getElementById('finalizarBtn').addEventListener('click', this.finalizeReschedule.bind(this));
    }

    loadCalendar() {

        const currentDoctor = this.currentReschedule.doctor.id;
        const calendarId = `calendar-${currentDoctor}`;
        const container = document.getElementById('doctor-container');
        container.innerHTML = `<div id='${calendarId}' class='calendar'></div>`;
        const calendarEl = document.getElementById(calendarId);
        this.calendar = new FullCalendar.Calendar(calendarEl, {
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
            dateClick: this.handleDateClick.bind(this),
            expandRows: true,
            slotMinTime: '8:00:00',
            slotMaxTime: '18:00:00',
            events: this.loadEvents(calendarId, this.currentDoctorEvents, this.currentReschedule.id),
        });
        this.calendar.render();
        const timeGridSlots = calendarEl.querySelectorAll('.fc-timegrid-slot');
        timeGridSlots.forEach(slot => {
            slot.style.height = '25px';
        });
    }

    handleDateClick(info) {

        this.currentReschedule.start = info.date;
        document.getElementById('eventDetails').innerText = `Confirmar reagendamento para ${info.date.toLocaleString()}`;
        $('#eventModal').modal('show');
    }

    confirmEvent() {
        this.allPlatformSchedules = this.allPlatformSchedules.map(schedule => schedule.id === this.currentReschedule.id ? this.currentReschedule : schedule);
        localStorage.setItem('allSchedules', JSON.stringify(this.allPlatformSchedules));
        this.loadDoctorData();
        $('#eventModal').modal('hide');
    }

    loadEvents(calendarId, events, eventId) {
        if ( events.filter(element => element !== null).length === 0) return [];
        return this.currentDoctorEvents.map(event => {
            if (event.id === eventId) {
                event.color = 'green';
            }
            return event;
        });
    }

    finalizeReschedule() {
        $('#successModal').modal('show');
    }
}
