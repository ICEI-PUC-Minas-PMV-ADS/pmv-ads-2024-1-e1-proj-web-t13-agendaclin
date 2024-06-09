import SearchDoctorService from "./search-doctor-service.js";

export class SearchDoctorController {
    doctors = [];
    cities = [];
    specialties = [];
    insurances = [];
    searchDoctorService = new SearchDoctorService();
    constructor() {
        this.getAllData();
        this.addEventListeners();
    }
    async getAllData() {
        try {

            this.doctors = await this.searchDoctorService.fetchData('doctors');
            this.cities = await this.searchDoctorService.fetchData('cities');
            this.specialties = await this.searchDoctorService.fetchData('specialties');
            this.insurances = await this.searchDoctorService.fetchData('insurances');

            this.renderDoctors(this.doctors);

            this.renderSelectOptions('cities', this.cities, 'Cidade');
            this.renderSelectOptions('specialties', this.specialties, 'Especialidade');
            this.renderSelectOptions('insurances', this.insurances, 'Convênios');

            const neighborhoodsSelect = document.getElementById('neighborhoods');
            neighborhoodsSelect.disabled = true;
        } catch (error) {
            console.error('Failed to fetch doctors data:', error);
        }
    }

    renderSelectOptions(selectId, options, defaultValue ) {
        const selectElement = document.getElementById(selectId);
        selectElement.innerHTML = ''; // Limpa as opções existentes

        // Adiciona uma opção padrão
        const defaultOption = document.createElement('option');
        defaultOption.selected = true;
        defaultOption.disabled = true;
        defaultOption.textContent = defaultValue;
        selectElement.appendChild(defaultOption);

        this.searchDoctorService.sortObjectsByField(options, 'name').forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.name;
            optionElement.textContent = option.name;
            selectElement.appendChild(optionElement);
        });
    }

    addEventListeners() {
        const citySelect = document.getElementById('cities');
        const specialtySelect = document.getElementById('specialties');
        const insuranceSelect = document.getElementById('insurances');
        const neighborhoodSelect = document.getElementById('neighborhoods');

        citySelect.addEventListener('change', (event) => {
            const selectedCityId = event.target.value;
            console.log('city', selectedCityId)
            this.updateNeighborhoodsSelect(selectedCityId);
            this.filterDoctors('Cidade');
        });

        specialtySelect.addEventListener('change', () => this.filterDoctors('Epecialidade'));
        insuranceSelect.addEventListener('change', () => this.filterDoctors('Convênios'));
        neighborhoodSelect.addEventListener('change', () => this.filterDoctors('Bairro'));
    }

    updateNeighborhoodsSelect(cityName) {
        const selectedCity = this.cities.find(city => city.name === cityName);
        if (selectedCity) {
            const neighborhoodsSelect = document.getElementById('neighborhoods');
            neighborhoodsSelect.disabled = false; // Enable the neighborhood select
            this.renderNeighborhoodOptions('neighborhoods', selectedCity.neighborhoods);
        } else {
            const neighborhoodsSelect = document.getElementById('neighborhoods');
            neighborhoodsSelect.disabled = true;
            neighborhoodsSelect.innerHTML = '';
        }
    }

    renderNeighborhoodOptions(selectId, neighborhoods) {
        const selectElement = document.getElementById(selectId);
        selectElement.innerHTML = '';
        const defaultOption = document.createElement('option');
        defaultOption.selected = true;
        defaultOption.disabled = true;
        defaultOption.textContent = 'Bairro';
        selectElement.appendChild(defaultOption);
        neighborhoods.sort().forEach(neighborhood => {
            const optionElement = document.createElement('option');
            optionElement.value = neighborhood;
            optionElement.textContent = neighborhood;
            selectElement.appendChild(optionElement);
        });
    }

    filterDoctors() {
        const citySelect = document.getElementById('cities');
        const specialtySelect = document.getElementById('specialties');
        const insuranceSelect = document.getElementById('insurances');
        const neighborhoodSelect = document.getElementById('neighborhoods');

        const selectedCity = citySelect.value;
        const selectedSpecialty = specialtySelect.value;
        const selectedInsurance = insuranceSelect.value;
        const selectedNeighborhood = neighborhoodSelect.value;

        let filteredDoctors = this.doctors;
        switch (true) {
            case selectedCity !== 'Cidade' && selectedNeighborhood === 'Bairro':
                filteredDoctors = filteredDoctors.filter(doctor => doctor.city === selectedCity);
                break;
            case selectedNeighborhood !== 'Bairro':
                filteredDoctors = filteredDoctors.filter(doctor => doctor.neighborhood === selectedNeighborhood);
                break;
            case selectedSpecialty !== 'Especialidade':
                filteredDoctors = filteredDoctors.filter(doctor => doctor.specialty === selectedSpecialty);
                break;
            case selectedInsurance !== 'Convênios':

                filteredDoctors = filteredDoctors.filter(doctor => doctor.insurance_accepted.includes(selectedInsurance));
                break;
        }

        this.renderDoctors(filteredDoctors);
    }

    renderDoctors(doctors) {
        const container = document.getElementById('doctor-container');
        container.innerHTML = ''; // Limpa o conteúdo existente

        doctors.forEach(doctor => {
            const doctorCard = document.createElement('div');
            doctorCard.classList.add('row', 'profile-card');
            const calendarId = `calendar-${doctor.name.replace(/\s+/g, '-')}`;
            const stars = Array(Math.round(doctor.rating)).fill('<img src="../../assets/icon/estrela-azul.png" alt="Star" class="feedback-star">').join('');

            doctorCard.innerHTML = `
                <div class="col-5" style="border-right:  1.5px solid #0367A5;">
                    <div class="doctor-info">
                        <div style="width: 30%"><img src="${doctor.profile_pic_url}" alt="${doctor.name}" class="img-fluid doctor-img-avatar"></div>
                        <div style="width: 70%">
                            <span class="doctor-info ps-2">
                                <strong>${doctor.name}</strong>
                            </span>
                            <span class="doctor-info ps-2">
                                <strong>${doctor.specialty}</strong>
                            </span>
                            <div class="doctor-feedback">
                                <span>${stars}</span>
                            </div>
                        </div>
                    </div>
                    <div class="location-icon-position mt-5">
                        <div style="width: 10%">
                            <img src="../../assets/icon/local.png" alt="" class="doctor-info-icone">
                        </div>
                        <div style="width: 90%" class="doctor-address">
                            <span>Endereço <br> ${doctor.street}, <br> ${doctor.neighborhood}, ${doctor.city}, <br> CEP ${doctor.zip_code}, Brasil</span>
                        </div>
                    </div>
                </div>
                <div class="col-7">
                    <div id='${calendarId}' class='calendar'></div>
                </div>
            `;
            container.appendChild(doctorCard);
            this.setupCalendar(calendarId); // Inicializa o calendário para o médico atual
        });
    }
    setupCalendar(calendarId) {
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
            dateClick: this.handleDateClick.bind(this) ,
            events: this.loadEvents(calendarId),
            eventDidMount: function(info) {
                info.el.style.fontSize = '16px'; // Altere o tamanho da fonte
                info.el.style.lineHeight = '1.2'; // Altere a altura da linha

                // Adiciona um botão de deletar ao evento
                const deleteButton = document.createElement('button');
                deleteButton.innerHTML = 'Delete';
                deleteButton.classList.add('delete-event-btn');
                deleteButton.addEventListener('click', function() {
                    info.event.remove(); // Remove o evento do calendário
                    const events = JSON.parse(localStorage.getItem('events')) || [];
                    const updatedEvents = events.filter(e => e.id !== info.event.id);
                    localStorage.setItem('events', JSON.stringify(updatedEvents)); // Atualiza o localStorage
                });
                info.el.appendChild(deleteButton);
            }
        });
        calendar.render();
        const timeGridSlots = calendarEl.querySelectorAll('.fc-timegrid-slot');
        timeGridSlots.forEach(slot => {
            slot.style.height = '100px';
        });
    }
    handleDateClick(info) {
        const calendarEl = info.view.calendar;
        const calendarId = calendarEl.el.id; // Obtém o ID do calendário
        const title = prompt('Digite o título do evento:'); // Pergunta ao usuário o título do evento

        if (title) {
            const eventId = new Date().getTime();
            const eventData = {
                id: eventId,
                title: title,
                start: info.date,
                allDay: info.allDay,
                calendarId: calendarId
            };
            calendarEl.addEvent(eventData);
            this.saveEvent(eventData);
        }
    }
    deleteEvent(event) {
        // Remove o evento do calendário
        event.remove();

        // Remove o evento do localStorage
        const events = JSON.parse(localStorage.getItem('events')) || [];
        const updatedEvents = events.filter(e => e.id !== event.id);
        localStorage.setItem('events', JSON.stringify(updatedEvents));
    }
    saveEvent(eventData) {
        console.log('eventData', eventData)
        const events = JSON.parse(localStorage.getItem('events')) || [];
        events.push(eventData);
        localStorage.setItem('events', JSON.stringify(events));
    }
    loadEvents(calendarId) {
        const events = JSON.parse(localStorage.getItem('events')) || [];
        return events.filter(event => event.calendarId === calendarId);
    }
}

new SearchDoctorController();
