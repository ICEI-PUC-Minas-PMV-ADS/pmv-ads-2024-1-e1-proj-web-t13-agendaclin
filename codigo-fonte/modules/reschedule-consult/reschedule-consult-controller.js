import { RescheduleConsultService } from './reschedule-consult-service.js';

export class RescheduleConsultController {
    newEvent;
    currentEvents = [];
    calendar;

    constructor() {
        this.setupEventListeners();
        this.loadCalendar();
    }

    setupEventListeners() {
        document.getElementById('closeSuccessModalButton').addEventListener('click', function () {
            $('#successModal').modal('hide');
        });
        document.getElementById('closeSuccessModalIcon').addEventListener('click', function () {
            $('#successModal').modal('hide');
        });
        document.getElementById('confirmEventBtn').addEventListener('click', this.confirmEvent.bind(this));
        document.getElementById('finalizarBtn').addEventListener('click', this.finalizeReschedule.bind(this));
    }

    loadCalendar() {
        const currentDoctor = 1;
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
            events: this.loadEvents(calendarId),
        });
        this.calendar.render();
        const timeGridSlots = calendarEl.querySelectorAll('.fc-timegrid-slot');
        timeGridSlots.forEach(slot => {
            slot.style.height = '25px';
        });
    }

    handleDateClick(info) {
        this.newEvent = {
            id: new Date().getTime(),
            start: info.date,
            allDay: info.allDay,
            calendarId: `calendar-1`,
            name: 'Consulta com Dra. Sofia Martinez Rivera'
        };
        document.getElementById('eventDetails').innerText = `Confirmar reagendamento para ${info.date.toLocaleString()}`;
        $('#eventModal').modal('show');
    }

    confirmEvent() {
        const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
        const updatedEvents = existingEvents.filter(event => event.calendarId !== this.newEvent.calendarId);
        updatedEvents.push(this.newEvent);
        localStorage.setItem('events', JSON.stringify(updatedEvents));
        this.currentEvents = updatedEvents;
        this.loadCalendar();
        $('#eventModal').modal('hide');
    }

    loadEvents(calendarId) {
        const events = JSON.parse(localStorage.getItem('events')) || [];
        this.currentEvents = events.filter(event => event.calendarId === calendarId);
        return this.currentEvents.map(event => {
            event.color = 'green'; // Alterar a cor do evento confirmado
            return event;
        });
    }

    finalizeReschedule() {
        $('#successModal').modal('show');
    }
}

new RescheduleConsultController();
