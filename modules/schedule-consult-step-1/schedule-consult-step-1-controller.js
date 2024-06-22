import { salvarDados } from './schedule-consult-step-1-service.js';
import { ScheduleConsultStep1Service, SearchDoctorService } from './schedule-consult-step-1-service.js';

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

    renderSelectOptions(selectId, options, defaultValue) {
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
        });

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
            case selectedCity !== 'Cidade':
                filteredDoctors = filteredDoctors.filter(doctor => doctor.city === selectedCity);
            case selectedSpecialty !== 'Especialidade':
                filteredDoctors = filteredDoctors.filter(doctor => doctor.specialty === selectedSpecialty);
            case selectedInsurance !== 'Convênios':
                filteredDoctors = filteredDoctors.filter(doctor => doctor.insurance === selectedInsurance);
            case selectedNeighborhood !== 'Bairro':
                filteredDoctors = filteredDoctors.filter(doctor => doctor.neighborhoods.includes(selectedNeighborhood));
        }

        this.renderDoctors(filteredDoctors);
    }

    renderDoctors(doctors) {
        const doctorListElement = document.querySelector('.medico-lista');
        doctorListElement.innerHTML = '';

        doctors.forEach(doctor => {
            const doctorElement = document.createElement('div');
            doctorElement.className = 'medico-item';
            doctorElement.innerHTML = `
                <div class="medico-card">
                    <div class="doctor-photo">
                        <img src="${doctor.photo}" alt="${doctor.name}">
                    </div>
                    <div class="doctor-info">
                        <h4 class="doctor-name">${doctor.name}</h4>
                        <p class="doctor-specialty">${doctor.specialty}</p>
                        <p class="doctor-city">${doctor.city}</p>
                        <p class="doctor-insurance">${doctor.insurance}</p>
                    </div>
                </div>
            `;
            doctorElement.addEventListener('click', () => {
                console.log('Doctor clicked:', doctor);
                localStorage.setItem('selectedDoctor', JSON.stringify(doctor));
                window.location.href = '/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/#/doctor-detail';
            });
            doctorListElement.appendChild(doctorElement);
        });
    }
}
