import { DoctorProfessionalProfileService } from './doctor-professional-profile-service.js';

export class DoctorProfessionalProfileController {
    constructor() {
        this.homeService = new DoctorProfessionalProfileService();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('loadButton').addEventListener('click', () => this.loadData());
    }

    loadData() {
        this.homeService.getData().then(data => {
            const container = document.getElementById('dataContainer');
            container.innerHTML = data.map(item => `<p>${item}</p>`).join('');
        });
    }
}