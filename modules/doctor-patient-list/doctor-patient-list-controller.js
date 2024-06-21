import { DoctorPatientListService } from './doctor-patient-list-service.js';

export class DoctorPatientListController {
    constructor() {
        this.homeService = new DoctorPatientListService();
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