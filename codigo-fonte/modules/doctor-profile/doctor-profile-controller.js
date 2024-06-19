import { DoctorProfileService } from './doctor-profile-service.js';

export class DoctorProfileController {
    doctors = [];
    cities = [];
    specialties = [];
    constructor() {
        this.doctorProfileService = new DoctorProfileService();
        this.getAllData();
        this.setupSearchButton();
        this.loadSegment();
        this.setupEventListeners();
    }
    async getAllData() {
        try {
            this.doctors = await this.doctorProfileService.fetchData('doctors');
            this.cities = await this.doctorProfileService.fetchData('cities');
            this.specialties = await this.doctorProfileService.fetchData('specialties');

            this.renderSelectOptions('cities', this.cities, 'Filtre sua cidade');
            this.renderSelectOptions('specialties', this.specialties, 'Especialidade, doença ou nome');
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }
    renderSelectOptions(selectId, options, defaultValue) {
        const selectElement = document.getElementById(selectId);
        selectElement.innerHTML = '';

        const defaultOption = document.createElement('option');
        defaultOption.selected = true;
        defaultOption.disabled = true;
        defaultOption.textContent = defaultValue;
        selectElement.appendChild(defaultOption);

        this.doctorProfileService.sortObjectsByField(options, 'name').forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.name;
            optionElement.textContent = option.name;
            selectElement.appendChild(optionElement);
        });
    }
    setupSearchButton() {
        const searchButton = document.querySelector('#searchButton');
        searchButton.addEventListener('click', () => this.handleSearch());
    }
    handleSearch() {
        const specialtyInput = document.querySelector('#specialties').value;
        const cityInput = document.querySelector('#cities').value;
        console.log('Search:', specialtyInput, cityInput);
        const filteredDoctors = this.doctors.filter(doctor => {
            const matchesSpecialty = specialtyInput === 'Especialidade, doença ou nome' || doctor.specialty === specialtyInput;
            const matchesCity = cityInput === 'Filtre sua cidade' || doctor.city === cityInput;
            return matchesSpecialty && matchesCity;
        });

        localStorage.setItem('filteredDoctors', JSON.stringify(filteredDoctors));
        window.location.href = '/#/search-doctor';
        console.log('Filtered Doctors:', filteredDoctors);
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
    loadSegment() {
        const segmentButtons = document.querySelectorAll('.segment-button');
        segmentButtons.forEach(button => {
            button.addEventListener('click', function () {
                console.log('click')
                segmentButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
}
new DoctorProfileController();
// export class DoctorProfileController {
//     constructor() {
//         this.setupEventsListeners();
//     }
//     setupEventsListeners() {
//         const hora = document.getElementById("hora")
//
//         hora.addEventListener("click", function()
//             {
//                 window.location.href = "../schedule-consult-step-1/schedule-consult-step-1.html"
//             }
//         )
//         const segmentButtons = document.querySelectorAll('.segment-button');
//         segmentButtons.forEach(button => {
//             button.addEventListener('click', function () {
//                 console.log('click')
//                 segmentButtons.forEach(btn => btn.classList.remove('active'));
//                 this.classList.add('active');
//             });
//         });
//     }
// }
