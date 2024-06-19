
import { RescheduleConsultService } from './reschedule-consult-service.js';

export class RescheduleConsultController {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        const currentDoctor = 1
        const calendarId = `calendar-${currentDoctor}`;
        const container = document.getElementById('doctor-container');
        container.innerHTML = `<div id='${calendarId}' class='calendar'></div>`;
        // const currentDoctor = localStorage.getItem('currentDoctor');
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
        // console.log('events', events)
        return events.filter(event => event.calendarId === calendarId);
    }
}
new RescheduleConsultService();