import { HomeService } from './home-service.js';

export class HomeController {
    doctors = [];
    cities = [];
    specialties = [];

    constructor() {
        this.homeService = new HomeService();
        this.getAllData();
        this.setupSearchButton();
    }

    async getAllData() {
        try {
            this.doctors = await this.homeService.fetchData('doctors');
            this.cities = await this.homeService.fetchData('cities');
            this.specialties = await this.homeService.fetchData('specialties');

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

        this.homeService.sortObjectsByField(options, 'name').forEach(option => {
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
        window.location.href = 'pmv-ads-2024-1-e1-proj-web-t13-agendaclin/#/search-doctor';
        console.log('Filtered Doctors:', filteredDoctors);
    }

}
