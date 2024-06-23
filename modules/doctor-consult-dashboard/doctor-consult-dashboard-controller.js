import { DoctorConsultDashboardService } from './doctor-consult-dashboard-service.js';

export class DoctorConsultDashboardController {
    constructor() {
        this.doctorConsultDashboardService = new DoctorConsultDashboardService();
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
                eventContent: function(arg) {
                    const event = arg.event;
                    const startTime = event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    const username = event.extendedProps.username;

                    // Custom HTML for the event content
                    return {
                        html: `<div class="fc-event-time">${startTime}</div>
             <div class="fc-event-title">${event.title}</div>
             <div class="fc-event-username">${username}</div>`
                    };
                },
            });
            calendar.render();
        const timeGridSlots = calendarEl.querySelectorAll('.fc-timegrid-slot');
        timeGridSlots.forEach(slot => {
            slot.style.height = '25px';
        });
    }
    loadEvents(calendarId) {
        const events = JSON.parse(localStorage.getItem('allSchedules')) || [];
        if ( events.filter(element => element !== null).length === 0) return [];
        console.log('events', events)
        return events.filter(event => event.calendarId === calendarId);
    }
}