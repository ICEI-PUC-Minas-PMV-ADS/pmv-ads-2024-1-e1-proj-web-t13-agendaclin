import { DoctorConsultDashboardService } from './doctor-consult-dashboard-service.js';

export class DoctorConsultDashboardController {
    constructor() {
        this.homeService = new DoctorConsultDashboardService();
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