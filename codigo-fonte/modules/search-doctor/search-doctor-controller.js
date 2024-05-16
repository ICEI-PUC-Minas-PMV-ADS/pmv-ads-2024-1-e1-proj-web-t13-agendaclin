import { SearchDoctorService } from './search-doctor-service.js';

export class SearchDoctorController {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
            const calendarEl = document.getElementById('calendar');
            const calendar = new FullCalendar.Calendar(calendarEl, {
                locale: 'pt-br',                 // Idioma
                initialView: 'timeGridWeek',     // Visão semanal com grade de tempo
                slotDuration: '00:30:00',        // Intervalos de 30 minutos
                slotLabelInterval: '00:30:00',   // Rótulos a cada 30 minutos
                slotLabelFormat: {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false               // Formato 24h
                },
                allDaySlot: false,               // Desativa a área de Todo o Dia
                nowIndicator: true,              // Indicador do horário atual
                height: 'auto',                  // Altura automática
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
                slotMaxTime: '17:30:00'
            });
            calendar.render();
    }
}
new SearchDoctorController();
