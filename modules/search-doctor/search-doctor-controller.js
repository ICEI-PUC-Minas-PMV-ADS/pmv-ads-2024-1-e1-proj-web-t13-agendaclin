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
        this.setupSearchButton();
    }
    async getAllData() {
        try {
            this.doctors = JSON.parse(localStorage.getItem('filteredDoctors')) || [];
            if (this.doctors.length === 0) {
                this.doctors = await this.searchDoctorService.fetchData('doctors');
            }
            this.cities = await this.searchDoctorService.fetchData('cities');
            this.specialties = await this.searchDoctorService.fetchData('specialties');
            this.insurances = await this.searchDoctorService.fetchData('insurances');

            this.renderDoctors(this.doctors);

            this.renderSelectOptions('cities', this.cities, 'Cidade');
            this.renderSelectOptions('specialties', this.specialties, 'Especialidade');
            this.renderSelectOptions('insurances', this.insurances, 'Convênios');

            const neighborhoodsSelect = document.getElementById('neighborhoods');
            neighborhoodsSelect.disabled = true;
            localStorage.removeItem('filteredDoctors');
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
    setupSearchButton() {
        const searchlupa = document.querySelector('#searchlupa');
        searchlupa.addEventListener('click', () => this.handleSearch());
    }
    handleSearch() {
        const specialtyInput = document.querySelector('#specialties').value;
        const cityInput = document.querySelector('#cities').value;
        console.log('Search:', specialtyInput, cityInput);
        const filteredDoctors = this.doctors.filter(doctor => {
            const matchesSpecialty = specialtyInput === 'Especialidade' || doctor.specialty === specialtyInput;
            const matchesCity = cityInput === 'Cidade' || doctor.city === cityInput;

            return matchesSpecialty && matchesCity;
        });
        localStorage.setItem('filteredDoctors', JSON.stringify(filteredDoctors));
        window.location.href = '/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/#/search-doctor';
        console.log('Filtered Doctors:', filteredDoctors);
        this.getAllData();
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
            // this.filterDoctors('Cidade');
        });

        // specialtySelect.addEventListener('change', () => this.filterDoctors('Epecialidade'));

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
            doctorCard.id = doctor.id;
            doctorCard.classList.add('row', 'profile-card');
            const calendarId = `calendar-${doctor.id}`;
            let stars ;
            if (this.roundDownToNearestHalf(doctor.rating) === 5) {
                stars = '<img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/5 estrelas.svg"' +
                    ' alt="Star"' +
                    ' class="feedback-star">'
            }
            if (this.roundDownToNearestHalf(doctor.rating) === 4.5) {
                stars = '<img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/4,5%20estrelas.svg"' +
                    ' alt="Star"' +
                    ' class="feedback-star">'
            }
            if (this.roundDownToNearestHalf(doctor.rating) === 4) {
                stars = '<img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/4%20estrelas.svg"' +
                    ' alt="Star"' +
                    ' class="feedback-star">'
            }
            if (this.roundDownToNearestHalf(doctor.rating) === 3.5) {
                stars = '<img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/3,5%20estrelas.svg"' +
                    ' alt="Star"' +
                    ' class="feedback-star">'
            }
            if (this.roundDownToNearestHalf(doctor.rating) === 3) {
                stars = '<img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/3%20estrelas.svg"' +
                    ' alt="Star"' +
                    ' class="feedback-star">'
            }
            console.log('stars',  this.roundDownToNearestHalf(doctor.rating))
            // console.log(stars, stars)

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
                            <img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/local.png" alt="" class="doctor-info-icone">
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
            doctorCard.addEventListener('click', () => this.handleCardClick(doctor));

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
                info.el.style.fontSize = '16px';
                info.el.style.lineHeight = '1.2';

                // const deleteButton = document.createElement('button');
                // deleteButton.innerHTML = 'Delete';
                // deleteButton.classList.add('delete-event-btn');
                // deleteButton.addEventListener('click', function() {
                //     info.event.remove(); // Remove o evento do calendário
                //     const events = JSON.parse(localStorage.getItem('events')) || [];
 if ( events.filter(element => element !== null).length === 0) return [];        //     const updatedEvents = events.filter(e => e.id !== info.event.id);
                //     localStorage.setItem('events', JSON.stringify(updatedEvents)); // Atualiza o localStorage
                // });
                // info.el.appendChild(deleteButton);
            }
        });
        calendar.render();
        const timeGridSlots = calendarEl.querySelectorAll('.fc-timegrid-slot');
        timeGridSlots.forEach(slot => {
            slot.style.height = '25px';
        });
    }
    handleDateClick(info) {
        const calendarEl = info.view.calendar;
        const calendarId = calendarEl.el.id; // Obtém o ID do calendário
        console.log('calendarId', calendarId)
        //Criar evento para Teste
        //     const eventId = new Date().getTime();
        //     const eventData = {
        //         id: eventId,
        //         start: info.date,
        //         allDay: info.allDay,
        //         calendarId: calendarId
        //     };
        //     calendarEl.addEvent(eventData); // Adiciona o evento ao calendário
        //     this.saveEvent(eventData); // Salva o evento no localStorage

        // Iniciar a consulta
            const eventData = {
                id:new Date().getTime(),
                start: info.date,
                allDay: info.allDay,
                calendarId: calendarId,
                name: 'Consulta com Dr. Fulano',
            };
            this.startConsultation(eventData);


    }
    deleteEvent(event) {
        // Remove o evento do calendário
        event.remove();

        // Remove o evento do localStorage
        const events = JSON.parse(localStorage.getItem('events')) || [];
 if ( events.filter(element => element !== null).length === 0) return [];const updatedEvents = events.filter(e => e.id !== event.id);
        localStorage.setItem('events', JSON.stringify(updatedEvents));
    }
    saveEvent(eventData) {
        console.log('eventData', eventData)
        const events = JSON.parse(localStorage.getItem('events')) || [];
 if ( events.filter(element => element !== null).length === 0) return [];events.push(eventData);
        localStorage.setItem('events', JSON.stringify(events));
    }
    loadEvents(calendarId) {
        const events = JSON.parse(localStorage.getItem('events')) || [];
 if ( events.filter(element => element !== null).length === 0) return [];// console.log('events', events)
        return events.filter(event => event.calendarId === calendarId);
    }
    startConsultation(eventData) {
        console.log('eventData', eventData)
        localStorage.setItem('currentEvent', JSON.stringify(eventData));
        window.location.href = '/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/#/schedule-consult-step-1';
    }

    handleCardClick(doctor) {
        console.log('Doctor:', doctor);
        localStorage.setItem('currentDoctor', JSON.stringify(doctor));
        window.location.href = '/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/#/doctor-profile';
    }
    roundDownToNearestHalf(num) {
        return Math.floor(num * 2) / 2;
    }
}

new SearchDoctorController();
